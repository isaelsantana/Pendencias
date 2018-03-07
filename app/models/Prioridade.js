var Sequelize = require('sequelize');
var sequelize = require('../../config/DdConnection');

var padraoConfig = {
    freezeTableName : true,
    createdAt : false , 
    timestamps : false,

}

const Prioridade = sequelize.define('Prioridade' , {
    prioridade_id : {
        type : Sequelize.INTEGER , 
        primaryKey : true, 
        autoIncrement : true
    },
    prioridade : {
        type : Sequelize.STRING
    }, 
} , padraoConfig)

module.exports = Prioridade;