var express = require('express');
var quizControler = require('../controladores/quiz_controler');
var commentController = require('../controladores/comment_controller');
var sessionController = require('../controladores/session_controller');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz',errors: [] });
});

router.param("quizId",quizControler.load);
router.param('commentId', commentController.load);  // autoload :commentId

// Definición de rutas de sesion
router.get('/login',  sessionController.new);     // formulario login
router.post('/login', sessionController.create);  // crear sesión
router.get('/logout', sessionController.destroy); // destruir sesión

router.get('/quizes/', quizControler.search);
router.get('/quizes/', quizControler.index);
router.get('/quizes/new', sessionController.loginRequired, quizControler.nuevo);
router.post('/quizes/create', sessionController.loginRequired, quizControler.create);
router.get('/quizes/:quizId(\\d+)', quizControler.show);
router.put('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizControler.update);
router.get('/quizes/:quizId(\\d+)/edit', sessionController.loginRequired, quizControler.edit);
router.get('/quizes/:quizId(\\d+)/answer', quizControler.answer);
router.delete('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizControler.destroy);

router.get('/author', function(req, res){
  res.render('author',{ errors: [] });
});


router.get('/quizes/:quizId(\\d+)/comments/new',commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);
router.get('/quizes/:quizId(\\d+)/comments/:commentId(\\d+)/publish', 
                sessionController.loginRequired, commentController.publish);



module.exports = router;
