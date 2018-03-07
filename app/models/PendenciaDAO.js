var Pendencia = require('./Pendencia');
var Cliente  =require('./Cliente'); 
var Prioridade = require('./Prioridade');
var Funcao = require('./Funcao');
var Op = require('sequelize').Op;


var PendenciaDAO = function(){

}

PendenciaDAO.prototype.buscarTodasPendencias = callback => {
    
    var dataInclusao = new Date(); 
    dataInclusao.setDate(dataInclusao.getDate() -600);

    Pendencia.findAll({
        include : [{model: Cliente , as : 'Cliente' } , 
        {model : Prioridade , as : 'Prioridade'} , 
        {model : Funcao , as : 'Funcao'}],
        where : {
            tab_status_id : 1,
            data_incl : {
                [Op.gte] : dataInclusao
                } 

        }
    }).then(function(data){
        callback(null , data);
    })
    .catch(ex => {
        console.log(ex);
        callback(ex , null);
    });
}

PendenciaDAO.prototype.buscarPendenciaId  = (id ,callback) => {
    Pendencia.findAll({
        include : [{model: Cliente , as : 'Cliente' } , 
        {model : Prioridade , as : 'Prioridade'} , 
        {model : Funcao , as : 'Funcao'}],
        where : {
            pendencia_id : id,
            tab_status_id : 1
        }
    })
    .then(data =>{
        callback(null , data);
    })
    .catch(ex => {
        callback(ex , null);
    })
}


module.exports = function() {return  PendenciaDAO};