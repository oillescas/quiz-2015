var express = require('express');
var quizControler = require('../controladores/quiz_controler');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.param("quizId",quizControler.load)

router.get('/quizes/', quizControler.search);
router.get('/quizes/', quizControler.index);
router.get('/quizes/new', quizControler.nuevo);
router.post('/quizes/create', quizControler.create);
router.get('/quizes/:quizId(\\d+)', quizControler.show);
router.get('/quizes/:quizId(\\d+)/answer', quizControler.answer);

router.get('/author', function(req, res){
  res.render('author');
});


module.exports = router;
