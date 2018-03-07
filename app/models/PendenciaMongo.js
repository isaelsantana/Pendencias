var mongoose  = require('../../config/DbConnectionMongo');

var PendenciaSchema = new mongoose.Schema({
    pendenciaId : Number , 
    prioridade : String , 
    descricao: String,
    cliente: String ,
    funcaoId: Number,
    descricaoFuncao: String
}, {collection : 'pendencias'}); 

const Pendencia  = mongoose.model('pendencias' , PendenciaSchema, 'pendencias');

module.exports = Pendencia;