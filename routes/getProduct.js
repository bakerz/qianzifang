var express = require('express');
var router = express.Router();

router.get('/bra', function(req, res) {
	res.json({
		'success': 1,
		'datas': [
			{'link': '1.jpg'},
			{'link': '2.jpg'},
			{'link': '3.jpg'},
			{'link': '4.jpg'},
			{'link': '5.jpg'},
			{'link': '6.jpg'},
			{'link': '7.jpg'},
			{'link': '8.jpg'},
			{'link': '9.jpg'},
			{'link': '10.jpg'},
			{'link': '11.jpg'},
			{'link': '12.jpg'}
		]
	});
});

router.get('/underpants', function(req, res) {
	res.json({'success': 1});
});

router.get('/pajamas', function(req, res) {
	res.json({'success': 1});
});

router.get('/warmdacloth', function(req, res) {
	res.json({'success': 1});
});

router.get('/leggings', function(req, res) {
	res.json({'success': 1});
});

module.exports = router;