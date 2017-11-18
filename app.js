var app = require('./config/server');

var port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log("Servidor ligado porta" + port);
});