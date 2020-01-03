const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
router.post('/signup',async (req, res)=>{
    const {email, password, confirmar_password} = req.body;
    const errors =[];
    console.log(req.body)
    if(email.length<=0){
      errors.push({text: 'Insertar un correo.'});
    }
    if(password != confirmar_password){
      errors.push({text:'Las constraseñas no coinciden.'});
    }if(password.length < 4){
      errors.push({text:'La contraseña deve contener mas de 4 caracteres.'})
    }if(errors.length > 0){
      res.json(errors);
    }else{
      const emailuser = await User.findOne({email:email});
      if(emailuser){
        return res.json({ email: "El usuario ya existe." });
      }else{  
        const newUser=new User({email,password})
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.redirect('/Admin');
      }
    }
});

router.post('/singin',(req, res, next)=>{

})
router.get('/profile', (req, res, next) => {
    res.render('profile');
  });
module.exports = router;