var fs = require('fs');
module.exports.getObjeto = function(req , res){
    fs.readFile('././base/weather.json', 'UTF-8' , function(err ,data){
        if(err) throw err;

        name = req.query.name;
    
        data  = JSON.parse(data);
        for( var i = 0; i< data.length ; i++){

            if(data[i].locale.name == name){
                data =  data[i];
            }else 
            {
                data = data[0];
            }
        }

        console.log(data);
        res.render('teste' , {clima : data});
    });
}