const {Schema, model} = require('mongoose');
const schemacentenario = new Schema({
    nombres:{type:String,required:true},
    descripcion:{type:String,required:true},
    email:{type:String,required:false},
    images:[
        {imageLocation:{type:String,required:false}}
    ],
    file:[
        {fileLocation:{type:String,required:false}}
    ],
    create_at:{type:Date,default:Date.now}
})
module.exports = model('Centenario',schemacentenario);