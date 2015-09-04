import React from 'react';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import File, {addFile, removeFile} from './models/file';
import App from './containers/App';
import Watcher from './services/watcher'

let store = createStore(combineReducers({
  images: File
}));

let mainElement = document.querySelector('main');



const path = require('path');
const cwd = process.cwd();
const DATA_DIR = `${cwd}/data`;
const IMAGES_DIR = `${DATA_DIR}/images`;
const watcher = new Watcher(IMAGES_DIR);

watcher.on('all', function(event, file) {

  const ADD_EVENT = 'add';
  const UNLINK_EVENT = 'unlink';
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


React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  mainElement
);

