import chokidar from 'chokidar';

export const ADD_EVENT = 'add';
export const CHANGE_EVENT = 'change';
export const UNLINK_EVENT = 'unlink';
export const ADD_DIR_EVENT = 'addDir';
export const UNLINK_DIR_EVENT = 'unlinkDir';
export const ERROR_EVENT = 'error';
export const READY_EVENT = 'ready';
export const RAW_EVENT = 'raw';

class Watcher {

  constructor(dir) {
    this.watcher = chokidar.watch(dir, {
      ignored: /[\/\\]\./
    });
  }

  on(event, callback) {
    this.watcher.on(event, callback);
  }
}

export default Watcher;



