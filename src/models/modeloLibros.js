const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({

    nombre_libro:{
        type:String,
        required: true,
    },

    autor: {
        type: String,
        required: true,
    },

    anio_publicacion:{
        type: String,
        required: true,
    },
});

//Crea el modelo de libros utilizando el esquema definido

const Libro = mongoose.model("libros",libroSchema);

//Exporta el modelo para que esté dis´ponible en otros archivos

module.exports = Libro;