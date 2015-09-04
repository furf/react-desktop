import {combineReducers, createStore} from 'redux';
import Watcher from './services/watcher'
import path  from 'path';
import File, {addFile, removeFile} from './models/file';
import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/App';

/**
 * Initialize the application.
 * @param  {String} selector CSS selector for the application's root element.
 */
export default function(selector) {

  const cwd = process.cwd();
  const DATA_DIR = `${cwd}/data`;
  const IMAGES_DIR = `${DATA_DIR}/images`;
  const ADD_EVENT = 'add';
  const UNLINK_EVENT = 'unlink';

  // Initialize the data store.
  const store = createStore(combineReducers({
    images: File
  }));

  // Initialize the filesystem watcher.
  new Watcher(IMAGES_DIR).on('all', function(event, file) {

    const relativePath = path.relative(cwd, file);

    if (!relativePath) {
      return;
    }

    switch (event) {
      case ADD_EVENT:
        store.dispatch(addFile(relativePath));
      break;
      case UNLINK_EVENT:
        store.dispatch(removeFile(relativePath));
      break;
    }
  });

  // Initialize the view.
  React.render(
    <Provider store={store}>{() => <App />}</Provider>,
    document.querySelector(selector)
  );
};


