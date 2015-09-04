import {
  ADD_FILE,
  REMOVE_FILE,
} from './actions';

export default {


  /**
   * Add a file.
   * @param  {Array} state Array of files.
   * @param  {Object} action Action containing file to add.
   * @return {Array} Updated array of files.
   */
  [ADD_FILE]: function(state, action) {
    return [
      ...state,
      action.path
    ];
  },


  /**
   * Remove a file.
   * @param  {Array} state Array of files.
   * @param  {Object} action Action containing file to remove.
   * @return {Array} Updated array of files.
   */
  [REMOVE_FILE]: function(state, action) {
    return state.filter(function(path) {
      return path !== action.path;
    });
  },
};
