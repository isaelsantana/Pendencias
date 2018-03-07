var Pendencia = require('./PendenciaMongo');

var PendenciaMongoDAO = function (){
  
}

PendenciaMongoDAO.prototype.gravaPendenciaMongo = function (obj , callback) {

    Pendencia.create(obj).then(data => { 
        console.log("Gravado com sucesso " + data);
        //res.send("Gravado com sucesso "  + data);
    })
    .catch(ex => {
        console.log(ex);
        callback(ex, null);
    });
}

PendenciaMongoDAO.prototype.buscaPendenciaId  = (id , callback) => {
    Pendencia.find({pendenciaId : id}).then( data => {
        console.log(data + "id : " + id); 
        callback(null , data);
    })
    .catch(ex => {
        console.log(ex);
        callback(ex , null)
    })
}

PendenciaMongoDAO.prototype.buscarTodasPendenciasMongo = (callback) => {
    Pendencia.find().then(data => {
        callback(null, data);
    })
    .catch(ex => {
        console.log(ex); 
        callback(ex , null);
    });
}

module.exports = () => {
    return PendenciaMongoDAO;
}