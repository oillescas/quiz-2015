var models = require('../models/models.js');


exports.index  = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/index',{quizes: quiz});
	});
};

exports.show = function(req, res){
	models.Quiz.find(req.param.quizId).then(function(quiz){
		res.render('quizes/show',{quiz: quiz});
	});
};

exports.answer = function(req, res){
	models.Quiz.find(req.param.quizId).then(function(quiz){
		if(req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer',{quiz:quiz, respuesta: 'Correcto'});
		}else{
			res.render('quizes/answer',{quiz:quiz,respuesta: 'Incorrecto'});
		}
	});
};