const mysqlConeccion = require('../model/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports.login = async(req,res) =>{
    const {email, password } = req.body;
    
    let findQuery = `select * from usuario where email ='${email}'`;
    mysqlConeccion.query(findQuery, async (err, registro) => {
        if (registro.length <=0) {
            res.status(400).json("no coincide")
            return
        }
        try {
            const match = await  bcrypt.compare(password, registro[0].password);
            if (match) {
                const payload = {
                    userId: registro[0].id,
                    username: registro[0].nombre
                };

                // Secret key for signing the token
                const secretKey = 'misecreto';
                            
                // Sign the token with the payload and secret key
                const token = jwt.sign(payload, secretKey);
                    
                // sessionStorage.setItem("token",token) agregar en el front "REACT"
                res.status(200).json({usuario:registro[0],token:token})
            //Obtener un usuario//
            } else {
                res.status(404).json({ mensaje: "credenciales incorrectas" })

            }
        }
        catch (error) {
            console.log(error)

            res.status(400).json(error)
        }
    })
}

module.exports.registro = async(req,res) => {
    const { email, nickname, password } = req.body

    let findQuery = `select * from usuario where email ='${email}'`;
    mysqlConeccion.query(findQuery, (err, registro) => {
        console.log(registro)
        if (registro.length > 0) {

            res.status(400).json("Ya existe un usuario con ese nombre")
            return
        }

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const encriptedPassword = hash;

                let query = `INSERT INTO usuario (email, nickname, password) VALUES ('${email}','${nickname}','${encriptedPassword}')`;
                await mysqlConeccion.query(query, (err, registro) => {
                    console.log(registro)
                    if (!err) {
                        res.status(201).json(registro[0])
                        // res.json(registro.idUsuario)

                    } else {
                        console.log(err)
                        res.send('El error es: ' + err);
                    }
                })

            });
        })
    });

}
// module.exports.getUser = async (req, res) => {
//     return mysqlConeccion.User.findAll()
//         .then((user) => {
//             res.status(200).json(user);
//         })
//         .catch((err) => {
//             console.log('There was an error querying user', JSON.stringify(err));
//             res.status(204).json(err);
//         });
// };

// //Obtener un usuario por ID//

// module.exports.getUserById = async (req, res) => {
// const { id } = req.params;
// const user = await mysqlConeccion.User.findByPk(id);
// if (user) {
//     res.status(200).json(user);
// } else {
//     res.status(404).json();
// }
// };

// //Borrar//

// module.exports.deleteUserById = async (req, res) => {
// const { id } = req.params;

// const user = await mysqlConeccion.User.findByPk(id);

// if (user) {
//     user.destroy();
//     res.status(200).json(user);
// } else {
//     res.status(404).json();
// }
// };
