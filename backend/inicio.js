const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(express.json());
//configuraciones
app.set('puerto', process.env.PORT || 3500);
// middlewares
app.use(morgan('dev'));
app.use(function (req, res, next) {

  // Sitio web al que deseas permitir la conexión
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Solicita los métodos que deseas permitir
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // Solicita los encabezados que deseas permitir
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

  // Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
  // a la API (por ejemplo, en caso de que uses sesiones)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//  rutas para mi aplicacion
app.use(require('./Controllers/tiendacontrol'))
// inicia el servidor NODE
app.listen(app.get('puerto'), () => {
  console.log('El servidor corriendo en el puerto', app.get('puerto'))
});


//login//

app.post("/usuario/login", (req, res) => {
  const usuario = req.body.usuario;
  const clave = req.body.clave;
  if (usuario == 'mariano' && clave == 'admin') {
    const datos = {
      id: "14",
      email: "pepito",
      nickname: "pepito",
      password: "pepito"
    };
    res.status(200), json(datos);
  } else {
    res.status(400).send("credenciales incorrectas")
  }
});





























































app.listen(3000)
