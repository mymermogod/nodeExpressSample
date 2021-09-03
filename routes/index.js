var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/:firstName/:lastName', function (req, res, next) {
	res.render('index2', {
		title: 'Express',
		firstName: req.params.firstName,
		lastName: req.params.lastName
	});
});

module.exports = router;
