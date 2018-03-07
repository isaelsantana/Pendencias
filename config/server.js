var express = require('express');
var consign = require('consign'); 
var bodyParser = require('body-parser'); 

var app = express(); 

app.set('view engine' , 'ejs' ); 
app.set('views' , __dirname + '/../app/views'); 

app.use('/public' , express.static(__dirname + '/../app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

consign()
.include('app/routes')
.then('app/controllers')
.then('app/models/PendenciaDAO.js')
.then('app/models/PendenciaMongoDAO.js')
.then('schedule')
//.then('config/DdConnection.js')
//.then('config/DbConnectionMongo.js')
.into(app);



module.exports = app;