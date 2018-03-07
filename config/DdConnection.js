
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development'
var config = require('./config')['production'];


var sequelize = new Sequelize({
    host : config.databaseSqlServer.server, 
    port : config.databaseSqlServer.port ,
    username : config.databaseSqlServer.user,
    password : config.databaseSqlServer.password , 
    dialect : 'mssql' ,
    database: config.databaseSqlServer.database
});

sequelize
.authenticate()
.then(() =>{
    console.log('Conexão realizada com sucesso.');
})
.catch(err => {
    console.log( "Falha na conexão " + err);
})


module.exports = sequelize;