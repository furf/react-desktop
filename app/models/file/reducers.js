import {
  ADD_FILE,
  REMOVE_FILE,
  UPDATE_FILE,
} from './actions';

export default {


  /**
   * Add a file.
   * @param  {Array} state Array of files.
   * @param  {Object} action Action containing file to add.
   * @return {Array} Updated array of files.
   */
  [ADD_FILE]: function(files, action) {
    return [
      ...files,
      action.file
    ];
  },


  /**
   * Remove a file.
   * @param  {Array} state Array of files.
   * @param  {Object} action Action containing file to remove.
   * @return {Array} Updated array of files.
   */
  [REMOVE_FILE]: function(files, action) {
    return files.filter(function(file) {
      return file.path !== action.path;
    });
  },


  /**
   * Update a file.
   * @param  {Array} state Array of files.
   * @param  {Object} action Action containing file to update.
   * @return {Array} Updated array of files.
   */
  [UPDATE_FILE]: function(files, action) {
    return files.map(function(file) {
      if (file.path !== action.file.path) {
        return file;
      }
      return Object.assign({}, file, action.file);
    });
  },
};
