const express = require("express");

const Libro = require("../models/modeloLibros.js");

const rutas = express.Router();

const connectDB = require("../connection/db.js");
connectDB();

//Traer información

rutas.get("/libros",async(req,res)=>{
    const libros = await Libro.find(); //Busca todos los libros en la base de datos 
    res.json(libros); //Devuelve la lista de libros en formato JSON
});

rutas.post("/libros",async(req,res)=>{
    
    const {nombre_libro,autor,anio_publicacion} = req.body;

    const nuevoLibro = new Libro({
        nombre_libro,
        autor,
        anio_publicacion
    });

    nuevoLibro.nombre_libro = nombre_libro;
    nuevoLibro.autor = autor;
    nuevoLibro.anio_publicacion = anio_publicacion;

    await nuevoLibro.save();
    res.json({"mensaje":"Libro guardado con éxito"});
});

rutas.put("/libros/:id",async(req,res)=>{
    const libroid = req.params.id;
    const {nombre_libro,autor,anio_publicacion}=req.body
    const libroEncontrado = await Libro.findById(libroid);

    libroEncontrado.nombre_libro = nombre_libro;
    libroEncontrado.autor = autor;
    libroEncontrado.anio_publicacion = anio_publicacion;

    await libroEncontrado.save();
    res.json(libroEncontrado);
});

rutas.delete("/libros/:id",async(req,res)=>{
    const libroid = req.params.id;
    const libroBuscado = await Libro.findById(libroid);
    await libroBuscado.deleteOne();
    res.json("Libro eliminado");
});

module.exports=rutas;