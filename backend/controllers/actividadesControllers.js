const actividadesControllers = {};
const Actividades = require('../models/actividad');
const aws = require('aws-sdk');

actividadesControllers.getActividades = async(req, res)=>{
    const actividades = await Actividades.find();
    res.json(actividades);
}
actividadesControllers.getActividad= async (req, res)=>{
    const actividades = await Actividades.findById(req.params.id);
    res.json(actividades);
}
actividadesControllers.createActividad = async (req, res) =>{
    const s3 = new aws.S3({
        // accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
        // secretAccessKey:'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',
        // Bucket:'municipalidadalis'
    })
    const {imagen,titulo,lugardesarrollo,descripcion,fechadesarrollo,horadesarrollo} = req.body;

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
        res.send(console.log(imageLocation));
        const newActividad = new Actividades({imageLocation,titulo,lugardesarrollo,descripcion,fechadesarrollo,horadesarrollo});
        newActividad.save();
    }
    catch(error){
        res.send(console.log(error));
    }
}
actividadesControllers.deleteActividad = async (req, res) =>{
    await Actividades.findByIdAndDelete(req.params.id);
    res.json({mensaje:"Noticias Elminada"})
}
module.exports = actividadesControllers;