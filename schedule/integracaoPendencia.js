var schedule = require('node-schedule');
var async = require('async');


module.exports = app => {

    var j = schedule.scheduleJob({ rule: '*/2 * * * *' } , function(){

        console.log("Rodando Schedule Integração Pendência"); 

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
    
    
    })

}