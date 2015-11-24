var express = require('express');
var router = express.Router();

router.get('/bra', function(req, res) {
	res.json({'success': 1});
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