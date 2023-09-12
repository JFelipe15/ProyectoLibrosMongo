const mongoose = require("mongoose");

const mongo = require("../config/config.js");

const connectDB = async () => {
    const conexionUrl = mongo.coneccionBD.mongodburi
        await mongoose.connect(conexionUrl);
        console.log("Conexión a MongoDB Atlas exitosa");
};

module.exports = connectDB;