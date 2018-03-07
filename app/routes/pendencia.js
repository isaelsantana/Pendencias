module.exports = app => {

    app.get('/buscarTodasPendencias' , (req , res) => {
        app.app.controllers.pendenciaController.BuscarTodasPendencias(app ,req ,res);
    });

    app.get('/buscarPendenciaId/:id' , (req , res ) => {
        app.app.controllers.pendenciaController.BuscarPendenciaId(app ,req ,res);
    });

    app.get('/buscarPendenciaIdMongo/:id' , (req, res) => {
        app.app.controllers.pendenciaController.BuscarPendenciaIdMongo(app ,req ,res); 
    });

    app.get('/integracao' , (req , res) => {
        app.app.controllers.pendenciaController.Integracacao(app ,req ,res); 
    });

    app.get('/buscarTodasPendenciasMongo' , (req , res) => {
        app.app.controllers.pendenciaController.buscarTodasPendenciasMongo(app,req,res);
    })
}