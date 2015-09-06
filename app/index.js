import {combineReducers, createStore} from 'redux';
import Watcher, {
  ADD_EVENT,
  CHANGE_EVENT,
  UNLINK_EVENT,
  ADD_DIR_EVENT,
  UNLINK_DIR_EVENT,
  ERROR_EVENT,
  READY_EVENT,
  RAW_EVENT,
} from './services/watcher'
import File, {
  addFile,
  removeFile,
  updateFile,
} from './models/file';
import path from 'path';
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
  const FILES_DIR = `${DATA_DIR}/files`;

  // Initialize the data store.
  const store = createStore(combineReducers({
    files: File
  }));

  // Initialize the filesystem watcher.
  const watcher = new Watcher(FILES_DIR);

  function getRelativePath(absolutePath) {
    return path.relative(cwd, absolutePath);
  }

  watcher.on(ADD_EVENT, function(absolutePath, stat) {
    const relativePath = getRelativePath(absolutePath);
    store.dispatch(addFile(relativePath, stat));
  });

  watcher.on(ADD_DIR_EVENT, function(absolutePath, stat) {
    const relativePath = getRelativePath(absolutePath);
    store.dispatch(addFile(relativePath, stat));
  });

  watcher.on(UNLINK_EVENT, function(absolutePath) {
    const relativePath = getRelativePath(absolutePath);
    store.dispatch(removeFile(relativePath));
  });

  watcher.on(UNLINK_DIR_EVENT, function(absolutePath) {
    const relativePath = getRelativePath(absolutePath);
    store.dispatch(removeFile(relativePath));
  });

  watcher.on(RAW_EVENT, function(event, absolutePath, stats) {
    if (event === CHANGE_EVENT) {
      const relativePath = getRelativePath(absolutePath);
      store.dispatch(updateFile(relativePath, stats.curr));
    }
  });

  // Initialize the view.
  React.render(
    <Provider store={store}>{() => <App />}</Provider>,
    document.querySelector(selector)
  );
};


