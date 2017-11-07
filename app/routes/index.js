module.exports = function(app){
  
    app.get('/index' , function(req , res){
       var indexController = app.app.controllers.index;
       
       indexController.getObjeto(req ,res);
    });
}