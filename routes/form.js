var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('form');
});
/* GET home page. */
router.get('/delete', function (req, res, next) {
	res.render('form-delete');
});
module.exports = router;
