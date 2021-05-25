const express = require('express');

// Destructuracion  e importacion de la conexion a la BD
const { dbConnection } = require('./src/database/config');

// Utilizando e importando las variables de entorno en node
require('dotenv').config();

// Importando el paquete CORS
const cors = require('cors');




// Crear el servidor express
const app = express();

// Configurando y utilizando el paquete Cors
app.use(cors());

// Base de datos
dbConnection();

// Pruebas de las varibles de entorno
console.log(process.env.PORT);

// Rutas
// Req = Aqui llega la información de los headers, que cliente fue
// Resp = Es lo que el servidor va a responder al cliente.

// config mongoDB
// User:mean_user
// Pass: aMXPpD!!pCFieF8

app.get('/', (req, resp) => {
    resp.status(200).json({
        ok: true,
        msg: 'Hola mundo desde nodejs'
    })
})

// Escuchando el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});