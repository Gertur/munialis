const centenarioControllers = {};
const Centenario = require('../models/centenario');
const path = require('path');
const aws = require('aws-sdk');


centenarioControllers.getCentenario = async (req, res)=>{
    
}
centenarioControllers.createCentenario =async (req,res) =>{
    var {nombres,email,descripcion,data}=req.body;
    var images=[];
    for (let i = 0; i < data.images.length; i++) {
        const element =  data.images[i];
        var imageLocation=await centenarioControllers.upload(element.image);
        if (imageLocation!=null) {
            images.push({
                imageLocation:imageLocation
            })
        }    
    }
    var centenario=new Centenario();
    centenario.nombres=nombres;
    centenario.descripcion=descripcion;
    centenario.email=email;
    centenario.images=images;
    var response=await centenario.save()
    if(response){
        res.status(200)
        .send({
            message:"Guardado",
            data:response
        })
    }
    else{
        res.status(500)
        .send({
            message:"Error",
            data:null
        })
    }
}
centenarioControllers.upload=async(imagen)=>{
    const s3 = new aws.S3({
        accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
        secretAccessKey:'KUxQr67I++6kdYZqwqhRyrxSB6xuaelZQsWXg1SQ',
        Bucket:'municipalidadalis'
    })
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
        return imageLocation;
    }
    catch($e){
        console.log($e);
        return null;
    }
    return null;
}
module.exports = centenarioControllers;