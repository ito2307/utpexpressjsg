var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'UTP' });
});

router.get('/about', function(req, res, next) {
	res.render('about.jade', { title: 'Acerca de' });
});

module.exports = router;
