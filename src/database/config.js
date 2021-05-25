
// Utilizando el ORM de mogoose
const mongoose = require('mongoose');

// Importamos las variables de entorno
require('dotenv').config();



// El async devuelve una promesa
const dbConnection = async () => {

    // Por si falla el inicio de la base de datos
    try {
        // Colocar la cadena de conexion
        await mongoose.connect(process.env.BD_CONEXION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB online');
    } catch (error) {
        console.log(error.message);
        throw new Error('Error a iniciar la base de datos ver logs');
    }

};

// Exportar la conexion para que pueda ser utilizadop en otro lugar
module.exports = {
    dbConnection
}
