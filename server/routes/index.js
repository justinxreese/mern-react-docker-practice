var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = 'mongodb://mongo:27017/<db>';
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  res.render('index', { title: 'Express' });
});

module.exports = router;
