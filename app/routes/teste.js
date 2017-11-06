var fs = require('fs');
module.exports = function(app){
    app.get('/' , function(req ,res){
        
    });
  
    app.get('/teste' , function(req , res){
       var testeController = app.app.controllers.teste;
       
       testeController.getObjeto(req ,res);
    });
}