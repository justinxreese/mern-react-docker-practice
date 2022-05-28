var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('API is running');
});

router.get('/files/', function(req, res, next) {
  json = {
    "files": [
      {
        "name": "file1.txt",
        "size": "1.2 MB",
        "type": "text/plain",

      },
      {
        "name": "file2.txt",
        "size": "1.2 MB",
        "type": "text/plain",
      },
    ]
  }
  res.send(json);
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
