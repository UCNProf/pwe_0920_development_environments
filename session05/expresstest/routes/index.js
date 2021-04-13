var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', request: 'get' });
});

router.post('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', request: 'post', name: req.body.name });
});

module.exports = router;
