const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const multer = require('multer');
//:::::::SETTING:::::::::://
app.set('port',process.env.PORT || 3000);

//:::::::MIDLEWARES:::::://
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),//donde almacenare las imagenes
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname)) //con que nombres los guardare
    }
})
app.use(multer({storage}).single("imagen"));//le digo que voy a subir una imagen a la vez//el nombre del input es imagen
app.use(express.json());
//::::::::STATIC FILES::::::://
app.use(express.static(path.join(__dirname,('public'))));
//::::::ROUTES::::://
app.use('/api/noticias',require('./routes/noticias'));
app.use('/api/profileimgupload',require('./routes/uploadfile'));

//::::::::MAPEO PARA RENDERIZAR HTML, DESDE REACT EN EL INDEX.HTML::::://
app.get('/*', function(req, res, next) {
    res.sendFile('./public/index.html', { root: __dirname });
 });

module.exports = app;