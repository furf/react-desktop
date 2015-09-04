import chokidar from 'chokidar';

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
