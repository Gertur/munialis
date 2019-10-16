const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true
})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('DB is connected')
})