const {Schema, model} = require('mongoose');
const SchemaObras = new Schema({
    titulo:{type:String},
    descripcion:{type:String},
    estado_obra:{type: String},
    presupuesto:{type:String},
    avance:{type:String},
    objetivos:{type:String},
    create_at:{type:Date,default:Date.now}
})
module.exports = model('Obras',SchemaObras);