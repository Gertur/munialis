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
    res.status(200).send({
        message:"¡Noticia eliminada satisfactoriamente!"
    });
}
noticiasControllers.createNoticias =async (req,res) =>{
    const s3 = new aws.S3({
        accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
        secretAccessKey:'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',
        Bucket:'municipalidadalis'
    })
    
    const {imagen,titulo,descripcion,segundadescripcion} = req.body;
    const base64Data= new Buffer.from(imagen.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    const type = imagen.split(';')[0].split('/')[1];

    var paramas = {
        Bucket:'municipalidadalis',
        Key:`${Math.random()}.${type}`,
        Body:base64Data,
        ACL:'public-read',
        ContentEncoding: 'base64', // required
        ContentType: `image/${type}`
    }
    try{
        const {Location} = await s3.upload(paramas).promise();
        const imageLocation = Location;
        newNoticias = new Noticias({titulo,descripcion,segundadescripcion,imageLocation});
        newNoticias.save();
        res.status(200).send({
            message:"¡Noticia registrada satisfactoriamente!"
        });
    }
    catch(error){
        res.send(console.log(error));
    }
    
}
module.exports = noticiasControllers;