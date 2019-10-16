import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';
export default class Mision extends Component{
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="saludo-alcalde p-2">MISION</h4>
                                </div>
                                <div className="col-12 mt-2">
                                    <img src="./img/mision.jpg" className="img-fluid" alt="" width="100%" height="auto" alt="Saludo del Alcalde"/>
                                </div>
                                <div className="col-12 mt-2">
                                    <p className="h4 text-justify">La Municipalidad Distrital de Alis es una institución municipal que brinda servicios públicos, en el marco de una gestión joven, orientada al ciudadano, de una manera eficiente, descentralizado, inclusivo, abierto, transparente, que rinde cuentas; y promotora de la participación ciudadana en la búsqueda de su desarrollo integral, que fomenta los valores, el bienestar, la identidad cultural y la seguridad de la población, basada en principios democráticos y en una cultura de derechos y deberes ciudadanos.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-lg-3 d-sm-inline">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}