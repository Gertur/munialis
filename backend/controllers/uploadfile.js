const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path')
const uploadfile = {};

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

uploadfile.createUploadFile = (req, res) =>{
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
module.exports = uploadfile;