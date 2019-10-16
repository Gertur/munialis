const noticiasControllers={};
const Noticias = require('../models/noticias');
const {unlink} = require('fs-extra');
const path = require('path');

noticiasControllers.getNoticias = async(req, res)=>{
    const noticias = await Noticias.find();
    res.json(noticias);
}
noticiasControllers.createNoticias = async(req,res)=>{
    const {titulo,descripcion} = req.body;
    const imagenPath = '/img/'+req.file.filename;
    const newNoticia = new Noticias({titulo,descripcion,imagenPath})
    await newNoticia.save();
    res.json({mensaje:"Noticia guardado"})
}
noticiasControllers.deleteNoticia = async (req,res)=>{
    const noticia = await Noticias.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public'+noticia.imagenPath))
    res.json({mensaje:"Eliminado"})
}
noticiasControllers.getLastNoticia = async (req,res)=>{
    const noticia = await Noticias.find().sort({"created_at":-1}).limit(1);
    res.json(noticia);
}

module.exports = noticiasControllers;