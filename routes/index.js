var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: '仟姿纺'});
});

router.get('/about', function(req, res, next) {
	res.render('about', {title: '企业介绍'});
});

router.get('/join', function(req, res, next) {
	res.render('join', {title: ''});
});

router.get('/business', function(req, res, next) {
	res.render('business', {title: ''});
});

router.get('/train', function(req, res, next) {
	res.render('train', {title: ''});
});

router.get('/product', function(req, res, next) {
	res.render('product', {title: '合作品牌'});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', {title: '联系我们'});
});

router.get('/staff', function(req, res, next) {
	res.render('staff', {title: ''});
});

module.exports = router;
