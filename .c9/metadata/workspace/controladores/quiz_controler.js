{"filter":false,"title":"quiz_controler.js","tooltip":"/controladores/quiz_controler.js","undoManager":{"mark":10,"position":10,"stack":[[{"start":{"row":3,"column":1},"end":{"row":4,"column":17},"action":"remove","lines":["models.Quiz.find(quizId).then(","\t\tfunction(quiz){"],"id":2}],[{"start":{"row":3,"column":1},"end":{"row":10,"column":33},"action":"insert","lines":["models.Quiz.find({","-    function(quiz) {\t\t+            where: {","+                id: Number(quizId)","+            },","+            include: [{","+                model: models.Comment","+            }]","+        }).then(function(quiz) {"],"id":3}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":22},"action":"remove","lines":["-    function(quiz) {\t"],"id":4}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["\t"],"id":5}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["+"],"id":6}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["+"],"id":7}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["+"],"id":8}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["+"],"id":9}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["+"],"id":10}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["+"],"id":11}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["+"],"id":12}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":0},"end":{"row":10,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1439314057946,"hash":"c56dff9caa48bbf03a4d6e89d55bd21cd88f6d27"}