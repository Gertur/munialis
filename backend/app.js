const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
require('./passport/local-auth');
//::::::::::::::::::::::::::::::::::::::::::::SETTING::::::::::::::::::::::::::::://
app.set('port',process.env.PORT || 3000);

//:::::::::::::::::::::::::::::::::::::::::::MIDLEWARES::::::::::::::::::::::::::://
app.use(cors());
// const s3 = new aws.S3({
//     accessKeyId:'AKIASTR5S4XJC3H5SKHQ',
//     secretAccessKey:'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',
//     Bucket:'municipalidadalis'
// })
// const storage = multerS3({
//     s3:s3,
//     bucket:'municipalidadalis',
//     acl:'public-read',
//     key:function(req,file,cb){
//         cb(file.location,path.basename(file.originalname,path.extname(file.originalname))+'-'+Date.now()+path.extname(file.originalname))
//     }
    
// })

// app.use(multer({storage,limits:{fileSize:2000000}}).single("imagen"));//le digo que voy a subir una imagen a la vez//el nombre del input es imagen
app.use(express.json({limit:'50mb',parameterLimit:100000}));

// app.use(bodyParser.urlencoded({limit:'50mb',extended:true,parameterLimit:100000}));
// app.use(bodyParser.json({limit:'50mb'}));

app.use(session({
   secret:'mysecretsession',
   resave:false,
   saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{
   app.locals.signupMessage = req.flash('signupMessage');
   next();
})
//::::::::STATIC FILES::::::://
app.use(express.static(path.join(__dirname,'public')));
//::::::ROUTES::::://
app.use(('/api/noticias'),require('./routes/noticias'));
app.use(('/api/actividades'), require('./routes/actividades'));
app.use(('/api/auth'),require('./routes/auth'));
app.use(('/api/obras'), require('./routes/obras'));
//::::::::MAPEO PARA RENDERIZAR HTML, DESDE REACT EN EL INDEX.HTML::::://
app.get('/*', function(req, res, next) {
    res.sendFile('./public/index.html', { root: __dirname });
 });
app.get('/singup',(req, res)=>{
   console.log(req.flash());
   console.log("Login fail");
   res.send({error: true, message: 'Unknown error'});
})
app.get('*', function(req, res, next) {
    res.sendFile('./public/index.html', { root: __dirname });
 });
module.exports = app;