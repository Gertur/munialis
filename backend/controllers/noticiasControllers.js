const noticiasControllers = {};
const Noticias = require('../models/noticias');
const path = require('path');
const aws = require('aws-sdk');


noticiasControllers.getNoticias = async (req, res)=>{
    const noticias = await Noticias.find();
    res.json(noticias)
}
noticiasControllers.getLastNoticias = async (req, res) =>{
    const noticia = await Noticias.find().sort({"created_at":-1}).limit(1);
    res.json(noticia);
}
noticiasControllers.getNoticia= async (req, res)=>{
    const noticia = await Noticias.findById(req.params.id);
    res.json(noticia);
    
}
noticiasControllers.deleteNoticia= async (req, res)=>{
    await Noticias.findByIdAndDelete(req.params.id);
    res.json({mensaje:"Noticias Elminada"})
}
noticiasControllers.createNoticias =async (req,res) =>{
    const s3 = new aws.S3({
        // accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
        // secretAccessKey:'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',
        // Bucket:'municipalidadalis'
    })
    
    const {imagen,titulo,descripcion,segundadescripcion,pdf} = req.body;
    const base64Data= new Buffer.from(imagen.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    const type = imagen.split(';')[0].split('/')[1];

    const base64pdf = new Buffer.from(pdf,'base64');

    var paramas = {
        Bucket:'municipalidadalis',
        Key:`${Math.random()}.${type}`,
        Body:base64Data,
        ACL:'public-read',
        ContentEncoding: 'base64', // required
        ContentType: `image/${type}`
    }
    var paramaspdf = {
        Bucket:'municipalidadalis',
        Key:`pdf01.pdf`,
        Body:base64pdf,
        ACL:'public-read',
        ContentEncoding: 'base64', // required
        ContentType: "application/pdf"
    }
    try{
        const {Location} = await s3.upload(paramas).promise();
        await s3.upload(paramaspdf).promise();
        const imageLocation = Location; 
        res.send(console.log(base64Data));
        newNoticias = new Noticias({titulo,descripcion,segundadescripcion,imageLocation});
        newNoticias.save();
    }
    catch(error){
        res.send(console.log(error));
    }
    
}
module.exports = noticiasControllers;