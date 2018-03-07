var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var config =  require('./config')[env];
var port =  config.databaseMongo.port || '27017';
var db = config.databaseMongo.db || 'suporte';
var host = config.databaseMongo.host || 'localhost';

var url  = 'mongodb://' + host + ':' + port + '/' + db ;
var Schema = mongoose.Schema;

mongoose.connect(url);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado com sucesso MongoDB");
});



module.exports = mongoose ;
