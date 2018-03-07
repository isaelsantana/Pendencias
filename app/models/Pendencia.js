
var Sequelize = require('sequelize');
var sequelize = require('../../config/DdConnection');
var Cliente  =require('./Cliente'); 
var Prioridade = require('./Prioridade');
var Funcao = require('./Funcao');

var padraoConfig = {
    freezeTableName : true,
    createdAt : false , 
    timestamps : false,

}



// tabela Pendencia 
const Pendencia = sequelize.define('Pendencia' , {
    pendenciaId :{
        type: Sequelize.INTEGER ,
        autoIncrement : true ,
        primaryKey : true,
        field : 'pendencia_id' 
    },
    descricao : {
        type : Sequelize.STRING,
        field : 'descricao'
    }, 
    CLIENTE_ID : {
        type : Sequelize.INTEGER , 
        references : {
            model : Cliente , 
            key : 'CLIENTE_ID' ,

        }
    }, 
    prioridade_id : {
        type : Sequelize.INTEGER , 
        references : {
            model : Prioridade,
            key : 'prioridade_id'
        }
    }, 
    funcao_id : {
        type: Sequelize.INTEGER , 
        references : {
             model : Funcao,
             key : 'funcao_id'
        }
    },
    tab_status_id : {
        type : Sequelize.INTEGER
    },
    data_incl : {
        type: Sequelize.DATEONLY
    }
} , padraoConfig)




Pendencia.belongsTo(Cliente , {
    foreignKey : 'cliente_id',
    constraints : false,
    freezeTableName : true ,
    as :'Cliente' 
});
Pendencia.belongsTo(Funcao ,{
    foreignKey : 'funcao_Id',
    constraints : false,
    freezeTableName : true,
    as :  'Funcao' 
});
Pendencia.belongsTo(Prioridade , {
    foreignKey : 'prioridade_id',
    constraints : false,
    freezeTableName : true,
   as :  'Prioridade' 
});

module.exports = Pendencia;