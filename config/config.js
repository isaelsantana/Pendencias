var config = {
    development :{
        url: '', 
        databaseMongo : {
            host: 'nome host' ,
            port : 'porta' , 
            db : 'base de dados'
        } ,
        databaseSqlServer : {
            server : 'host sql server', 
            database : 'base de dados' ,
            user : 'usuario' , 
            password : 'senha',
            port: 'porta se caso não tiver deixar null'
        }
    }, 
    production : {
        url: '', 
        databaseMongo : {
            host: 'nome host' ,
            port : 'porta' , 
            db : 'base de dados'
        } ,
        databaseSqlServer : {
            server : 'host sql server', 
            database : 'base de dados' ,
            user : 'usuario' , 
            password : 'senha',
            port: 'porta se caso não tiver deixar null'
        }
    }
}

module.exports = config;
