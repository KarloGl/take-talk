var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tutorial page. */
router.get('/tutorial', function(req, res, next) {
  res.render('tutorial.ejs');
});

/* GET documentation page. */
router.get('/documentation', function(req, res, next) {
  res.render('documentation');
});

/* GET meeting page. */
router.get('/meeting', function(req, res, next) {
  res.render('meeting');
});

/* GET university of Evry page. */
router.get('*', function(req, res, next) {
  res.redirect('www.univ-evry.fr');
});

module.exports = router;
