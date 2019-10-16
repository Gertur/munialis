const {Schema, model} = require('mongoose');
const schemaNoticias = new Schema({
    titulo:{type:String, required:true},
    descripcion:{type:String, required:true},
    imagenPath:{type:String},
    created_at:{type:Date,default:Date.now}
})
module.exports= model('Noticias',schemaNoticias);