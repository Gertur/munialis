const {Schema, model} = require('mongoose');
const schemaactividad = new Schema({
    titulo:{type:String,required:true},
    lugardesarrollo:{type:String,required:true},
    descripcion:{type:String,required:true},
    imageLocation:{type:String},
    fechadesarrollo:{type:Date,default:Date.now},
    horadesarrollo:{type:String},
    create_at:{type:Date,default:Date.now}
})
module.exports = model('Actividad',schemaactividad);