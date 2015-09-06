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

  // [
  //   ADD_EVENT,
  //   CHANGE_EVENT,
  //   UNLINK_EVENT,
  //   ADD_DIR_EVENT,
  //   UNLINK_DIR_EVENT,
  //   ERROR_EVENT,
  //   READY_EVENT,
  //   RAW_EVENT,
  // ].forEach(event => {
  //   watcher.on(event, console.log.bind(console, event));
  // });

  watcher.on(ADD_EVENT, function(path, stat) {
    store.dispatch(addFile(path, stat));
  });

  watcher.on(ADD_DIR_EVENT, function(path, stat) {
    store.dispatch(addFile(path, stat));
  });

  watcher.on(UNLINK_EVENT, function(path, stat) {
    store.dispatch(removeFile(path));
  });

  watcher.on(UNLINK_DIR_EVENT, function(path, stat) {
    store.dispatch(removeFile(path));
  });

  watcher.on(RAW_EVENT, function(event, path, stats) {
    if (event === CHANGE_EVENT) {
      store.dispatch(updateFile(path, stats.curr));
    }
  });

  // Initialize the view.
  React.render(
    <Provider store={store}>{() => <App />}</Provider>,
    document.querySelector(selector)
  );
};


