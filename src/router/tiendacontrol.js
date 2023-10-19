const express = require('express');
const router = express();
const mysqlConeccion = require('../model/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController')
//////fin archivo de conexion \\\\\\\

///////RUTA RAÍZ///////////////
router.get('/', (req, res) => {
    res.send('RUTA RAIZ');
});

// -------------------------------------------------------- 
// --RUTAS TIENDAS //
// -------------------------------------------------------- 

// OBTENER TODOS LOS PRODUCTOS //

router.get('/productos', (req, res) => {

    mysqlConeccion.query('select * from productos ', (err, registro) => {
        if (!err) {
            res.json(registro);
        } else {
            console.log(err)
        }
    })
});

// INSERTAR NUEVO PRODUCTO //

router.post('/productos', (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    const sql = 'INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)';

    mysqlConeccion.query(sql, [nombre, descripcion, precio], (err, resultado) => {
        if (!err) {
            res.json(resultado);
        } else {
            console.log(err)
        }
    })
});


// ACTUALIZAR NUEVO PRODUCTO //

router.put('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const { nombre, descripcion, precio } = req.body;
    const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?';

    mysqlConeccion.query(sql, [nombre, descripcion, precio, productId], (err, resultado) => {
        if (!err) {
            if (resultado.affectedRows > 0) {
                res.json({ message: 'Producto actualizado correctamente' });
            } else {
                res.json({ message: 'No se encontró ningún producto con el ID proporcionado' });
            }
        } else {
            console.log(err);
            res.status(500).json({ error: 'Ha ocurrido un error al actualizar el producto' });
        }
    });
});


// BORRAR UN PRODUCTO //
router.delete('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'DELETE FROM productos WHERE id = ?';

    mysqlConeccion.query(sql, [productId], (err, resultado) => {
        if (!err) {
            if (resultado.affectedRows > 0) {
                res.json({ message: 'Producto eliminado correctamente' });
            } else {
                res.json({ message: 'No se encontró ningún producto con el ID proporcionado' });
            }
        } else {
            console.log(err);
            res.status(500).json({ error: 'Ha ocurrido un error al eliminar el producto' });
        }
    });
});

// FIN TABLA PRODUCTOS //

//CARRITO//






// EDITAR UN COMENTARIO SOBRE UN PRODUCTO //



// LOGIN/USUARIO //
router.post('/login', userController.login);
router.post('/registrarUsuario', userController.registro);




module.exports = router;