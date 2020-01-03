const {Schema, model} = require('mongoose');
const schemaNoticias = new Schema({
    titulo:{type:String},
    descripcion:{type:String,required:true},
    segundadescripcion:{type:String,required:true},
    imageLocation:{type:String},
    create_at:{type:Date,default:Date.now}
})
module.exports = model('Noticias',schemaNoticias);