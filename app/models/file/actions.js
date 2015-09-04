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
 * addFile action
 * @param {String} path
 */
export function addFile(path) {
  return {
    type: ADD_FILE,
    path,
  };
}


/**
 * removeFile action
 * @param {String} path
 */
export function removeFile(path) {
  return {
    type: REMOVE_FILE,
    path,
  };
}
