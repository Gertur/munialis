const {Schema, model} = require('mongoose');
const schemaNoticias = new Schema({
    titulo:{type:String},
    descripcion:{type:String,required:true},
    imagenLocation:{type:String},
    created_at:{type:Date,default:Date.now}
})
module.exports= model('Noticias',schemaNoticias);