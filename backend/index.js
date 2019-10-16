
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}
const app = require('./app');
require('./database');
async function main(){
    await app.listen(app.get('port'),()=>{
        console.log('Server on port',app.get('port'));
        console.log(process.env.NODE_ENV)
    })
}
main();