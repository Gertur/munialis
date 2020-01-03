const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    email:{type:String},
    password:{type:String}
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));//recibe la contraseña y ejecutada un numero de lagoritomo para encriptar
};
userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

module.exports = model('User',userSchema);