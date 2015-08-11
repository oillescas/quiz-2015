{"filter":false,"title":"comment_controller.js","tooltip":"/controladores/comment_controller.js","undoManager":{"mark":41,"position":41,"stack":[[{"start":{"row":0,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["var models = require('../models/models.js');","","// GET /quizes/:quizId/comments/new","exports.new = function(req, res) {","  res.render('comments/new.ejs', {quizid: req.params.quizId, errors: []});","};","","// POST /quizes/:quizId/comments","exports.create = function(req, res) {","  var comment = models.Comment.build(","      { texto: req.body.comment.texto,          ","        QuizId: req.params.quizId","        });","","  comment","  .validate()","  .then(","    function(err){","      if (err) {","        res.render('comments/new.ejs', {comment: comment, errors: err.errors});","      } else {","        comment // save: guarda en DB campo texto de comment","        .save()","        .then( function(){ res.redirect('/quizes/'+req.params.quizId)}) ","      }      // res.redirect: Redirección HTTP a lista de preguntas","    }","  ).catch(function(error){next(error)});","  ","};"],"id":1}],[{"start":{"row":0,"column":44},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["+// Autoload :id de comentarios","+exports.load = function(req, res, next, commentId) {","+  models.Comment.find({","+            where: {","+                id: Number(commentId)","+            }","+        }).then(function(comment) {","+      if (comment) {","+        req.comment = comment;","+        next();","+      } else{next(new Error('No existe commentId=' + commentId))}","+    }","+  ).catch(function(error){next(error)});","+};","+"],"id":4}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["+"],"id":5}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["+"],"id":6}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["+"],"id":7}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["+"],"id":8}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":["+"],"id":9}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":["+"],"id":10}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["+"],"id":11}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["+"],"id":12}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["+"],"id":13}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["+"],"id":14}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["+"],"id":15}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["+"],"id":16}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["+"],"id":17}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["+"],"id":18}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["+"],"id":19}],[{"start":{"row":44,"column":2},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":20}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":21}],[{"start":{"row":46,"column":0},"end":{"row":54,"column":5},"action":"insert","lines":["// GET /quizes/:quizId/comments/:commentId/publish","+exports.publish = function(req, res) {","+  req.comment.publicado = true;","+","+  req.comment.save( {fields: [\"publicado\"]})","+    .then( function(){ res.redirect('/quizes/'+req.params.quizId);} )","+    .catch(function(error){next(error)});","+","+  };"],"id":22}],[{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"remove","lines":["+"],"id":23}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":1},"action":"remove","lines":["+"],"id":24}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":1},"action":"remove","lines":["+"],"id":25}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"remove","lines":["+"],"id":26}],[{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"remove","lines":["+"],"id":27}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"remove","lines":["+"],"id":28}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"remove","lines":["+"],"id":29}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["+"],"id":30}],[{"start":{"row":47,"column":35},"end":{"row":47,"column":36},"action":"insert","lines":[","],"id":31}],[{"start":{"row":47,"column":36},"end":{"row":47,"column":37},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":47,"column":37},"end":{"row":47,"column":38},"action":"insert","lines":["n"],"id":33}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"insert","lines":["e"],"id":34}],[{"start":{"row":47,"column":39},"end":{"row":47,"column":40},"action":"insert","lines":["x"],"id":35}],[{"start":{"row":47,"column":40},"end":{"row":47,"column":41},"action":"insert","lines":["t"],"id":36}],[{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":[","],"id":37}],[{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"insert","lines":[" "],"id":38}],[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":["n"],"id":39}],[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"insert","lines":["e"],"id":40}],[{"start":{"row":24,"column":38},"end":{"row":24,"column":39},"action":"insert","lines":["x"],"id":41}],[{"start":{"row":24,"column":39},"end":{"row":24,"column":40},"action":"insert","lines":["t"],"id":42}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":40},"end":{"row":24,"column":40},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1439315974474,"hash":"4851f118862a909498adf20bb3f87f2b317a3bcb"}