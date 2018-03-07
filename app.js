var app = require('./config/server'); 



const port = process.env.port || 3000; 


app.listen(port , ()=> {

    console.log("Servidor ON , porta " + port);
}); 

