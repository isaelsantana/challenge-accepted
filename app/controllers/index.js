var fs = require('fs');
module.exports.getObjeto = function(req , res){
    fs.readFile('././base/weather.json', 'UTF-8' , function(err ,data){
        if(err) throw err;
        var clima;
        name = req.query.name;
    
        data  = JSON.parse(data);
        for( var i = 0; i< data.length ; i++){

            if(data[i].locale.name == name){
                clima =  data[i];
            }
        }

        if(clima){
            res.render('index' , {clima : clima});
        }else{  
            res.send('<h1>Nenhuma cidade encontrada</h1>');
        }
    });
};