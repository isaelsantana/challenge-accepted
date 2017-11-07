var fs = require('fs');
module.exports.getObjeto = function(req , res){
    fs.readFile('././base/weather.json', 'UTF-8' , function(err ,data){
        if(err) throw err;
        var clima;
        var contemInformacao = false;
        name = req.body.cidade;

        console.log(name);  
    
        data  = JSON.parse(data);
        for( var i = 0; i< data.length ; i++){

            if(data[i].locale.name == name){
                clima =  data[i];
                contemInformacao = true;
            }
        }
        console.log(clima);

            res.render('index' , {clima : clima, contemInformacao : contemInformacao});
    });
}

module.exports.carregaIndex = function(req ,res){
    res.render('index' , {clima : {},contemInformacao : false});
}