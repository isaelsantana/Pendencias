var Sequelize = require('sequelize');
var sequelize = require('../../config/DdConnection');

var padraoConfig = {
    freezeTableName : true,
    createdAt : false , 
    timestamps : false,

}

const Cliente = sequelize.define('Cliente' , {
    CLIENTE_ID : {
        type : Sequelize.INTEGER , 
        primaryKey : true, 
        autoIncrement : true
    },
    nome_cliente : {
        type : Sequelize.STRING
    }, 
} , padraoConfig)


module.exports = Cliente;