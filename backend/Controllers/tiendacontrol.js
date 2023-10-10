const express= require('express');
const router = express.Router();
const mysqlConeccion = require('../Model/database')
const jwt= require('jsonwebtoken');
//////fin archivo de conexion \\\\\\\

///////RUTA RAÍZ///////////////
router.get('/', (req, res)=>{
    res.send('RUTA RAIZ');
});

// -------------------------------------------------------- 
// --rutas de escucha (endpoint) dispoibles
// -------------------------------------------------------- 

router.get('/productos', (req, res)=>{
   
        mysqlConeccion.query('select * from productos ', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
});



module.exports = router;

