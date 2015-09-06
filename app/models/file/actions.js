/**
 * Constant for mapping `addFile` action to `addFile` reducer.
 * @type {String}
 */
export const ADD_FILE = 'ADD_FILE';


/**
 * Constant for mapping `removeFile` action to `removeFile` reducer.
 * @type {String}
 */
export const REMOVE_FILE = 'REMOVE_FILE';


/**
 * Constant for mapping `updateFile` action to `updateFile` reducer.
 * @type {String}
 */
export const UPDATE_FILE = 'UPDATE_FILE';


/**
 * addFile action
 * @param {String} path
 * @param {Object} stat
 */
export function addFile(path, stat) {
  return {
    type: ADD_FILE,
    file: Object.assign({}, stat, { path }),
  };
};


/**
 * removeFile action
 * @param {String} path
 */
export function removeFile(path) {
  return {
    type: REMOVE_FILE,
    path,
  };
};


/**
 * updateFile action
 * @param {String} path
 * @param {Object} stat
 */
export function updateFile(path, stat) {
  return {
    type: UPDATE_FILE,
    file: Object.assign({}, stat, { path }),
  };
};
