import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';

export default class Vision extends Component{
    render(){
        return(
            <div>
            <Navegacion/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="saludo-alcalde p-2">VISION</h4>
                            </div>
                            <div className="col-12 mt-2">
                                <img src="./img/vision.jpg" className="img-fluid" alt="" width="100%" height="auto" alt="Saludo del Alcalde"/>
                            </div>
                            <div className="col-12 mt-2">
                                <p className="h4 text-justify">La Municipalidad Distrital de Alis es una Institución municipal promotora del desarrollo integral y sostenido, líder como modelo de gestión municipal, que atiende y trabaja de la mano con sus anexos, consolidando la prestación de servicios de calidad, con personal altamente motivado, calificado y con vocación de servicio, que administra una población auto sostenible  gracias al turismo, por estar inmersos dentro de la <a href="http://www.sernanp.gob.pe/nor-yauyos-cochas" className="text-muted" target="_blank">Reserva Paisajística Nor Yauyos Cochas</a>, logrando una gestión por resultados eficientes, eficaces y que protege y conserve  el medio ambiente".</p>
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