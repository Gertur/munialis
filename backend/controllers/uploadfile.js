const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path')
const uploadfile = {}; 
const Noticias = require('../models/noticias');
/**::::::::::::::::::::::::::::::::::::: */
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
/**::::::::::::::::::::::::::::::::::::: */
uploadfile.getNoticias = async(req, res) =>{
    const noticias = await Noticias.find();
    res.json(noticias);
}
/**::::::::::::::::::::::::::::::::::::: */
uploadfile.createUploadFile = async (req, res) =>{
    const {titulo,descripcion} = req.body;
    const newNoticia = new Noticias({titulo,descripcion})
    await newNoticia.save();
    //await profileImgUpload();
    res.json({mensaje:'Noticia Guardada'}) 
    //const newNoticia = new Noticias({titulo,descripcion,imagenPath})
    
}
module.exports = uploadfile;