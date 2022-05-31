var express = require('express');
var router = express.Router();
const FileLister = require('../src/services/fileLister');

router.get('/', function(req, res, next) {
  res.send('API is running');
});

router.get('/files/', function(req, res, next) {
  const FileListerInstance = new FileLister('/Users/justinxreese');
  FileListerInstance.list.then(function(files) {
    res.send(JSON.stringify(files));
  });
});

router.get('/files/:file', function(req, res, next) {
  json = {
    "file": {
      "name": "file1.txt",
      "size": "1.0 KB",
      "type": "text/plain",
      "content": "This is the content of the file"
    }
  }
  res.send(json);
});

module.exports = router;
