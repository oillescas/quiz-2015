var express = require('express');
var quizControler = require('../controladores/quiz_controler');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizControler.question);
router.get('/quizes/answer', quizControler.answer);
router.get('/author', function(req, res){
  res.render('author');
});


module.exports = router;
