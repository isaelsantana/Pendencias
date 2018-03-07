var async = require('async');


module.exports.BuscarTodasPendencias = (app,req , res) => {

    var pendenciaDAO = new app.app.models.PendenciaDAO();

        try{
             pendenciaDAO.buscarTodasPendencias((err, data) => {

                if (err) throw err;
                res.send(data);

             });
        }catch(ex){        
            console.log(ex);
        }
    }


module.exports.BuscarPendenciaId = (app , req , res) => {
    var pendenciaDAO = new app.app.models.PendenciaDAO(); 

    try{
        pendenciaDAO.buscarPendenciaId(req.params.id , (err , data) => {
            if (err) throw err;
            res.send(data);
        }); 
    } 
    catch(ex){
        console.log(ex);
    }
}

module.exports.BuscarPendenciaIdMongo = (app , req , res) => {
    var PendenciaMongoDAO = new app.app.models.PendenciaMongoDAO(); 

    try{
        PendenciaMongoDAO.buscaPendenciaId( req.params.id, (err, result) => {

            if (err) throw err;
            console.log("Busca Pendencia " +  req.params.id );
            res.send(result);
        });
    }catch(ex){
        console.log(ex);
    }
}

module.exports.Integracacao = (app , req , res) => {
    var pendenciaDAO = new app.app.models.PendenciaDAO();
    var pendenciaMongoDAO = new app.app.models.PendenciaMongoDAO();

    var consultaDadosSql = function(callback){

        try{
             pendenciaDAO.buscarTodasPendencias((err, data) => {

                if (err) callback(err , null);
               callback(null ,data);

             });
        }catch(ex){        
            console.log(ex);
        }
    }

    consultaDadosSql(function(err, data) {

        var converter = (obj) => {
            var teste =   {
                pendenciaId : obj.pendenciaId , 
                prioridade : obj.Prioridade == null ? null : obj.Prioridade.prioridade , 
                descricao: obj.descricao,
                cliente: obj.Cliente == null ? null : obj.Cliente.nome_cliente ,
                funcaoId: obj.funcao_id,
                descricaoFuncao:  obj.Funcao == null ? null : obj.Funcao.desc_funcao
            } 

            return  teste ;
        }

        if(data){
            async.forEachOf(data , (value, key , callback) => {
                console.log(key);
                console.log(value.dataValues);

                //Verifica se de existe a pendência ID no Mongo
                pendenciaMongoDAO.buscaPendenciaId(value.pendenciaId,(err,result) =>{                        
                    if (result.length <= 0){
                        var teste  = null ; 
                        teste  = converter(value.dataValues);
                        console.log("teste " +  teste);

                        //Grava Pendência no Mongo
                        pendenciaMongoDAO.gravaPendenciaMongo(teste , (err , res) => {
                            if (err) console.log(err);
                            console.log(res);
                        })
                    }
                    else{
                        console.log( "result " + result);
                    }                   
                });
            });
        }
    });

res.send("Integração realizada  com sucesso.");

}

module.exports.buscarTodasPendenciasMongo = (app , req ,res) => {
    var PendenciaMongoDAO = new app.app.models.PendenciaMongoDAO(); 


    PendenciaMongoDAO.buscarTodasPendenciasMongo( (err , data) => {
        try{
            if (err) throw err; 

            res.send(data);
        }catch(ex){

        }
    });
} 






