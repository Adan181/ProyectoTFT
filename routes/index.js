var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nuevopersonaje', function(req, res, next) {
  res.render('nuevopersonaje');
});

router.get('/nuevaminileyenda', function(req, res, next) {
  res.render('nuevaminileyenda');
});

router.get('/nuevocosto', function(req, res, next) {
  res.render('nuevocosto');
});

router.get('/nuevaclase', function(req, res, next) {
  res.render('nuevaclase');
});

router.get('/nuevoorigen', function(req, res, next) {
  res.render('nuevoorigen');
});

router.get('/nuevoobjeto', function(req, res, next) {
  res.render('nuevoobjeto');
});

router.get('/nuevoobjetofinal', function(req, res, next) {
  res.render('nuevoobjetofinal');
});

router.get('/actualizarpersonaje', function(req, res, next) {
  res.render('actualizarpersonaje');
});

router.get('/actualizarminileyenda', function(req, res, next) {
  res.render('actualizarminileyenda');
});

router.get('/actualizarcosto', function(req, res, next) {
  res.render('actualizarcosto');
});

router.get('/actualizarclase', function(req, res, next) {
  res.render('actualizarclase');
});

router.get('/actualizarorigen', function(req, res, next) {
  res.render('actualizarorigen');
});

router.get('/actualizarobjeto', function(req, res, next) {
  res.render('actualizarobjeto');
});

router.get('/actualizarobjetofinal', function(req, res, next) {
  res.render('actualizarobjetofinal');
});

router.get('/eliminarpersonaje', function(req, res, next) {
  res.render('eliminarpersonaje');
});

router.get('/eliminarminileyenda', function(req, res, next) {
  res.render('eliminarminileyenda');
});

router.get('/eliminarcosto', function(req, res, next) {
  res.render('eliminarcosto');
});

router.get('/eliminarclase', function(req, res, next) {
  res.render('eliminarclase');
});

router.get('/eliminarorigen', function(req, res, next) {
  res.render('eliminarorigen');
});

router.get('/eliminarobjeto', function(req, res, next) {
  res.render('eliminarobjeto');
});

router.get('/eliminarobjetofinal', function(req, res, next) {
  res.render('eliminarobjetofinal');
});

router.get('/bdlinks', function(req, res, next) {
  res.render('bdlinks');
});


module.exports = router;
