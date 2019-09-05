var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nuevopersonaje', function(req, res, next) {
  res.render('nuevopersonaje');
});

router.get('/nuevaminleyenda', function(req, res, next) {
  res.render('nuevaminleyenda');
});

module.exports = router;
