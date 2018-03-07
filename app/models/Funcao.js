var Sequelize = require('sequelize');
var sequelize = require('../../config/DdConnection');

var padraoConfig = {
    freezeTableName : true,
    createdAt : false , 
    timestamps : false,

}
const Funcao = sequelize.define('Funcao' , {
    funcao_id : {
        type : Sequelize.INTEGER , 
        primaryKey : true, 
        autoIncrement : true
    },
    desc_funcao : {
        type : Sequelize.STRING
    }, 
} , padraoConfig)

module.exports = Funcao;