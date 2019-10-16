import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
      </Router>
    );
  }
  export default App;
