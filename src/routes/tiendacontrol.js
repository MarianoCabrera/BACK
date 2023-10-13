const express= require('express');
const router = express.Router();
const mysqlConeccion = require('../model/database')

//////fin archivo de conexion \\\\\\\

///////RUTA RAÍZ///////////////
router.get('/', (req, res)=>{
    res.send('RUTA RAIZ');
});

// -------------------------------------------------------- 
// --RUTAS TIENDAS //
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

router.put('/editarproducto/:idproductos', (req, res)=>{
    
    let id  = req.params.id;
    let estado=req.body.estado  
    let query=`UPDATE productos SET estado='${estado}' WHERE idproductos='${id}'`;
    
    
    mysqlConeccion.query(query, (err, registros)=>{
       if(!err){
           res.json({
               status: true,
               mensaje:"El estado del producto se cambio correctamente"
           });
       }else{
           res.json({
               status: false,
               mensaje:"Hubo un error"
           });
       }
   })
   
});

 /////////////////////////////////////////////////////////
    // FIN - CAMBIO DE ESTADO PRODUCTOS EN LA BASE DE DATOS//
    ////////////////////////////////////////////////////////


// EDITAR PRODUCTO METODO PUT //

router.put('/productos/:idproductos', verificarToken, (req, res)=>{
    //asigna a idclientes el valor que recibe por el parametro 
    let idproductos  = req.params.idproductos;
    const { ID, NombreProducto, DescripcionProducto, Precio, CantidadStock } =req.body  
    console.log(req.body)
    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
                let query=`UPDATE dbweb.producto SET ID='${ID}', apellido='${NombreProducto}', matricula='${DescripcionProducto}', email='${Precio}', telefono='${CantidadStock}' WHERE idproductos='${idproductos}'`;
                mysqlConeccion.query(query, (err, registros)=>{
                    if(!err){
                        res.send('El Id que editamos es : '+idproductos+' y cambiamos muchos campos');
                    }else{
                        console.log(err)
                    }
                })
            }
        })    
});

/////////////////////////////////////////
//EDITAR PRODUCTOS DE LA BASE DE DATOS//
/////////////////////////////////////////

module.exports = router;

