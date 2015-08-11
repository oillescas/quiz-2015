{"filter":false,"title":"session_controller.js","tooltip":"/controladores/session_controller.js","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":21},"action":"insert","lines":["session_controller.js"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":21},"action":"remove","lines":["session_controller.js"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":35,"column":2},"action":"insert","lines":["// Get /login   -- Formulario de login","exports.new = function(req, res) {","    var errors = req.session.errors || {};","    req.session.errors = {};","","    res.render('sessions/new', {errors: errors});","};","","// POST /login   -- Crear la sesion si usuario se autentica","exports.create = function(req, res) {","","    var login     = req.body.login;","    var password  = req.body.password;","","    var userController = require('./user_controller');","    userController.autenticar(login, password, function(error, user) {","","        if (error) {  // si hay error retornamos mensajes de error de sesión","            req.session.errors = [{\"message\": 'Se ha producido un error: '+error}];","            res.redirect(\"/login\");        ","            return;","        }","","        // Crear req.session.user y guardar campos   id  y  username","        // La sesión se define por la existencia de:    req.session.user","        req.session.user = {id:user.id, username:user.username};","","        res.redirect(req.session.redir.toString());// redirección a path anterior a login","    });","};","","// DELETE /logout   -- Destruir sesion ","exports.destroy = function(req, res) {","    delete req.session.user;","    res.redirect(req.session.redir.toString()); // redirect a path anterior a login","};"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["+// MW de autorización de accesos HTTP restringidos","+exports.loginRequired = function(req, res, next){","+    if (req.session.user) {","+        next();","+    } else {","+        res.redirect('/login');","+    }","+};","+"],"id":6}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["+"],"id":7}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["+"],"id":8}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["+"],"id":9}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["+"],"id":10}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["+"],"id":11}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["+"],"id":12}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["+"],"id":13}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["+"],"id":14}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["+"],"id":15}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1439315505028,"hash":"dd00edb6ec76befde4c78fcbf670461e9a36678e"}