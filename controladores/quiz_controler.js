var models = require('../models/models.js');

exports.load  = function(req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if(quiz){
				req.quiz = quiz;
				next();	
			}else{
				next(new Error("No existe quizId : "+ quizId));
			}
		}
	).catch(function(err){next(err)});
};

exports.index  = function(req, res, next){
	models.Quiz.findAll().then(
		function(quiz){
			res.render('quizes/index',{quizes: quiz});
		}
	).catch(function(err){next(err);});
};

exports.show = function(req, res){
		res.render('quizes/show',{quiz: req.quiz});
};

exports.answer = function(req, res){
	var resultado = "Incorrecto";
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = "Correcto";
	}
	res.render('quizes/answer',{quiz:req.quiz ,respuesta: resultado});
};