const express = require("express");

const app = express();

const config = require("./src/config/config.js");

const rutasLibros = require("./src/router/router.js");

app.use(express.json());

app.use("/apiLibros",rutasLibros);

app.listen(config.server.port,()=>{
    console.log("servidor funcionando por el puerto " + config.server.port);
});





