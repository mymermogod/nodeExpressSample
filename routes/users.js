var express = require('express');
var router = express.Router();

/* GET users listing. */
let users = { };
router.get('/', function(req, res, next) {
	res.json(users)
});

router.post('/', (req, res) => {
	console.warn(req.body)
	users[req.body.email] = req.body;
	res.send('<a href="http://localhost:3000">Voltar</a> usuario registrado');
})
router.delete('/', function(req, res, next) {
	delete(users[req.body.email]);
	res.send('<a href="http://localhost:3000">Voltar</a> usuario removido');
});

router.post('/delete', function(req, res, next) {
	delete(users[req.body.email]);
	res.send('<a href="http://localhost:3000">Voltar</a> usuario removido');
});

module.exports = router;
