const fs = require('fs');

class FileLister {
  constructor(path) {
    this.path = path;
  }

  list(){
    return this.directoryContents();
  }

  directoryContents() {
    return new Promise((resolve, reject) => {
        fs.readdir(this.path, { withFileTypes: true }, (error, files) => {
          if (error) reject(error);
          resolve(files.map((item) => item.name))
        });
    })
  }
}

module.exports = FileLister;
