const mysql = require('mysql');

const mysqlConeccion= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'integrador'
});

mysqlConeccion.connect(function(err){
    if(err){
        console.log('mi error es', err);
        return;
    }else{
        console.log('Mi coneccion se realizo correctamente');
    }
})
 
module.exports= mysqlConeccion;