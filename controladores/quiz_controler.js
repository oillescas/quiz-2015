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

exports.search  = function(req, res, next){
	if(req.query.search){
		var search = "%"+ req.query.search.trim().replace(/\s+/g , "%")+"%";
		models.Quiz.findAll({where: ["pregunta like ?", search]}).then(
			function(quiz){
				res.render('quizes/index',{quizes: quiz, errors:[]});
			}
		).catch(function(err){next(err);});
	}else{
		next();	
	}
};

exports.index  = function(req, res, next){
	models.Quiz.findAll().then(
		function(quiz){
			res.render('quizes/index',{quizes: quiz, errors:[]});
		}
	).catch(function(err){next(err);});
};

exports.show = function(req, res){
		res.render('quizes/show',{quiz: req.quiz, errors:[]});
};

exports.answer = function(req, res){
	var resultado = "Incorrecto";
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = "Correcto";
	}
	res.render('quizes/answer',{quiz:req.quiz ,respuesta: resultado,errors:[]});
};

exports.nuevo  = function(req, res, next){
	var quiz = models.Quiz.build({
		pregunta:"Pregunta", respuesta:"Respuesta"
	})
	res.render('quizes/new',{quiz:quiz, errors:[]});
};

exports.create  = function(req, res, next){
	var quiz = models.Quiz.build(req.body.quiz);
	
	quiz.validate().then(function(err){
		if(err){
			res.render("quizes/new",{quiz:quiz, errors:err.errors});
		}
		quiz.save({fields:["pregunta","respuesta"]}).then(function(){
			res.redirect("/quizes");
		});	
	});
};