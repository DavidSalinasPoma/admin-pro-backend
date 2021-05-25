# Curso de node js

* 1.- iniciar un  proyecto con git init y npm init -y

* 2.- Instalar el Framework express: npm install express

* 3.- Crear im imdex.js y configurar el servidor en el puerto ????

* 4.- Levantar el proyecto con el comando: node index.js

* 5.- Escuchar los cambia al guardar con: nodemon npm install -g nodemon

* 6.- Configurar un script de inicio del servidor en el package.js: "start": "nodemon index.js"

* 7.- Creando una primera ruta: ('/')--- es la raiz del proyecto y devolviendo una respoesta con un codigo
        app.status(200).get('/', (req, resp) => {
            resp.json({
                ok: true,
                msg: 'Hola mundo desde nodejs'
            })
        })

* 8.- Manejando Postman para pruebas de rutas o endPoints
      Crea repositorios de los endPoints.

* 9.- Configurar Mongo Atlas
      1.- Instalar mongo compass  
      2.- iniciar sesion en mogodb
      3.- Configurar Mongo Atlas con mongoCompas

* 10.- Estableciendo conexion entre mongoDB y nodeJS
       1.- Instalación de un ORM Mongoose : npm install mongoose,
       2.- Configurar mongoose en el proyecto
       3.- Estructurar el proyecto para la BD

* 11.- Configurar las variables de entorno definidas de forma global
       1.- ENV Configuración: npm i dotenv => este paquete permite leer archivos con la extencion de .ENV
       2.- Todo lo que se grabe en las variables de entorno .ENV van a hacer estring
       3.- Utilizar .ENV en cualquier parte de la aplicacion
           require('dotenv').config();

* 12.- configuracion del CORS: Pertimite aceptar peticiones en el servidor de diferentes dominios del mundo.
       1.- npm i cors
       2.- const cors = require('cors');
       3.- Configurar cors en el index.js
       4.- app.use(cors());

       
