var express = require('express');
var router = express.Router();
var models = require('../models');
var log = function(inst){
console.dir(inst.get())
}

 router.get('/crear', function(req, res, next) {
   res.render('crear.jade', { title: 'Crear Estudiante' });
 });

router.post('/crear', function(req, res, next) {
	models.estudiantes.create({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		cedula: req.body.cedula,
		descripcion: req.body.descripcion,
		activo: req.body.activo
	}).then(function() {
		res.render('crear', {});		
	});				
});

router.get('/listar', function(req, res, next) {
	res.render('listar', { title: 'Listar Estudiante' });
});

router.get('/listardata', function(req, res, next) {
	models.estudiantes.findAll({attributes: ['id','nombre', 'apellido','cedula','descripcion','activo']}).then(function(estudiantes) {
		estudiantes.forEach(log);
		res.json(estudiantes);
	});
});

router.delete('/deletestudent/:id', function(req, res) {
	models.estudiantes.destroy({where: {id: req.params.id}}).then(function() {
		//res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
		res.render('listar', {});
	});	
});

router.get('/detallar', function(req, res, next) {
	res.render('detallar', { title: 'Detallar Estudiante' });
});

router.get('/detallardata', function(req, res, next) {
	models.estudiantes.findAll(
	  {where: {id: 4},
      attributes: ['id','nombre', 'apellido','cedula','descripcion','activo']
	  }
	).then(function(estudiantes) {
		estudiantes.forEach(log);
		res.json(estudiantes);
	});
});
 
module.exports = router;