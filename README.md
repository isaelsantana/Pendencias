## Instalação de dependências


	
```javascript
   npm install

```	


## Configuração 

  É utilizado o arquivo config.js (caminho config/config.js) que contém as informações de banco de dados da aplicação , deve ser configurado de acordo 
  com banco de dados utilizado.

```javascript
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
```

## Acessando Rotas API


```javascript
  
  get : hostname:porta/buscarTodasPendencias         //- Retorna todas a pendências (SQL SERVER)
  get : hostname:porta/buscarPendenciaId/:id         //- Retorna a pendência do id informado (SQL SERVER)
  get : hostname:porta/buscarPendenciaIdMongo/:id    //- Retorna a pendência do id informado (MongoDB)
  get : hostname:porta/buscarTodasPendenciasMongo    //- Retorna todas a pendências (Mongo)
  get : hostname:porta/integracao                    //- Grava as pendências do SQL para MongoDB 

```
 
## Integração Schedule

A integração é realizada de 2 em 2 minutos pelo schedule que se encontra na pasta schedule/integracaoPendencia.js
