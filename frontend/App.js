import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import $ from 'jquery';
require('./img/paraiso_natural.svg');
require('./img/logo.svg');
require('./img/informacion.png');
require('./img/slide1.jpg');
require('./img/slide2.jpg');
require('./img/slide3.jpg');
require('./img/alcalde.jpg');
require('./img/hobras.svg');
require('./img/salud.svg');
require('./img/educacion.svg');
require('./img/turismo.svg');
require('./img/agenda.jpg');
require('./img/before1.svg');
require('./img/turismo-alis.jpg');
require('./img/cultura-alis.jpg');
require('./img/desarrollo-social.jpg');
require('./img/logo2.png');
require('./img/marca-alis.png');
require('./img/logo.png');
require('./img/saludo-alcalde.jpg')
require('./img/PONCE.jpg');
require('./img/regidor-hugo.jpg')
require('./img/regidor-carlos.jpg')
require('./img/regidor-ronald.jpg')
require('./img/regidora-samy.jpg')
require('./img/mision.jpg')
require('./img/vision.jpg')
require('./img/sub-gerencia-desarrollo-social.jpg')
require('./img/reseña-alis.jpg')
require('./img/negreria.jpg')
require('./img/laguna-silacocha.jpg')
require('./img/huacta.jpg')
require('./img/coricoto.jpg')
require('./img/bosque-lloque.jpg')
require('./img/cañon.jpg')
require('./img/tapo.jpg')
require('./img/caida-angel.jpg')
require('./img/cueva-murcielagos.jpg')
require('./img/slide4.jpg')
require('./img/aniversario-comunal.jpg')
require('./img/limpia-cequia.jpg')
require('./img/palla-alisina.jpg')


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'hover.css/css/hover-min.css';
import'./styles/main.scss';
import './script/main';


import Index from './components/client/Index/Index';
import Municipalidad from './components/client/Municipalidad/Municipalidad';
import Admin from './components/Administrator/Admin';
import Mision from './components/client/mision/Mision';
import Vision from './components/client/vision/Vision';
import Regidores from './components/client/regidores/Regidores';
import Funcionarios from './components/client/funcionarios/Funcionarios';
import Turismo from './components/client/turismo/Turismo';
import Recursosturiticos from './components/client/Recursosturisticos/Recursosturisticos';
import Cultura from './components/client/cultura/Cultura';
import Calendariofestivo from './components/client/calendariofestivo/Calendariofestivo';
import Registrocivil from './components/client/registrocivil/Registrocivil';
import Transparencia from './components/client/transparencia/Transparencia';
import Desarrollosocial from './components/client/desarrollosocial/Desarrollosocial';
function App() {
    return (
      <Router>
            <Route path="/" exact component={Index} />
            <Route path="/Municipalidad" component={Municipalidad}/>
            <Route path="/Admin" component={Admin} />
            <Route path="/mision" component={Mision}/>
            <Route path="/vision" component={Vision}/>
            <Route path="/regidores" component={Regidores}/>   
            <Route path="/funcionarios" component={Funcionarios} />
            <Route path="/turismo" component={Turismo} />
            <Route path="/recursos-turisticos" component={Recursosturiticos} />
            <Route path="/cultura" component={Cultura} />
            <Route path="/calendario-festivo" component={Calendariofestivo} />
            <Route path="/registro-civil" component={Registrocivil} />
            <Route path="/transparencia" component={Transparencia} />
            <Route path="/desarrollo-social" component={Desarrollosocial} />
            
      </Router>
    );
  }
  export default App;
