var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('home');
});

router.get('/about', function(req, res){
  res.render('about');
});

router.get('/contacts', function(req, res){
  res.render('contacts');
});

module.exports = router;
