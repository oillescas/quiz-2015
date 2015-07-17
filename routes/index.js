var express = require('express');
var quizControler = require('../controladores/quiz_controler');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/', quizControler.index);
router.get('/quizes/:quizId(\\d+)', quizControler.show);
router.get('/quizes/:quizId(\\d+)/answer', quizControler.answer);

router.get('/author', function(req, res){
  res.render('author');
});


module.exports = router;
