const noticiasControllers={};
const Noticias = require('../models/noticias');
const {unlink} = require('fs-extra');
const path = require('path');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

const s3 = new aws.S3({
    accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
    secretAccessKey:'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',
    Bucket:'municipalidadalis'
})
const profileImgUpload = multer({
    storage:multerS3({
        s3:s3,
        bucket:'municipalidadalis',
        acl:'public-read',
        key: function(req, file, cb){
            cb(null, path.basename(file.originalname, path.extname(file.originalname))+'-'+Date.now()+path.extname(file.originalname))
        },
    }),
    limits:{fileSize:2000000}//Esto esta en bytes 2000000 bytes = MB
}).single('profileImage');

noticiasControllers.getNoticias = async(req, res)=>{
    const noticias = await Noticias.find();
    res.json(noticias);
}
noticiasControllers.createNoticias = async(req, res)=>{
    const {titulo,descripcion} = req.body;
    //const imagenPath = '/img/'+req.file.filename;
    const newNoticia = new Noticias({titulo,descripcion})
    await newNoticia.save();
    
    res.json({mensaje:"Noticia guardado"})
    profileImgUpload(req, res,(error)=>{
        if(error){
            res.json({error:error})
        }else{
            if(req.file === undefined){
                res.json('Error: No seleccionaste el una imagen')
            }else{
                const imagenNombre = req.file.key;
                const imagenLocacion = req.file.location;
                res.json({
                    image:imagenNombre,
                    location:imagenLocacion
                })
            }
        }
    })
}
// noticiasControllers.deleteNoticia = async (req,res)=>{
//     const noticia = await Noticias.findByIdAndDelete(req.params.id);
//     unlink(path.resolve('./backend/public'+noticia.imagenPath))
//     res.json({mensaje:"Eliminado"})
// }
// noticiasControllers.getLastNoticia = async (req,res)=>{
//     const noticia = await Noticias.find().sort({"created_at":-1}).limit(1);
//     res.json(noticia);
// }

module.exports = noticiasControllers;