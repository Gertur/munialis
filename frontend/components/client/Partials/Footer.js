import React,{Component} from 'react';
import path from 'path';
export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-5 mt-2 mb-2">
                            <div className="media">
                                <img src="./img/logo.png" alt="Alis" className="d-flex align-self-start mr-3 rounded-circle" width="70px"/>
                                <div className="media-body">
                                    <h3>Sobre nosotros</h3>
                                    <hr className="hr-footer"/>
                                    <p className="text-justify">La Municipalidad Distrital de Alis es una institución municipal que brinda servicios públicos, en el marco de una gestión joven, orientada al ciudadano.</p>
                                    <div className="fb-root">
                                        <div className="fb-like" data-href="https://www.munialis.gob.pe" data-width="" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-2">
                            <h3>Ubicanos</h3>
                            <hr className="hr-footer"/>
                            <div className="row">
                                <dt className="col-sm-3">DIRECCION:</dt>
                                <dd className="col-sm-9">Calle Virgen de la Asuncion s/n Alis</dd>
                            </div>
                            <div className="row">
                                <dt className="col-sm-12">HORARIO DE ATENCION</dt>
                            </div>
                            <div className="row">
                                <dt className="col-sm-3">LUN-VIE:</dt>
                                <dd className="col-sm-9">09:00 am - 01:00 pm</dd>
                            </div>
                            <div className="row">
                                <dt className="col-sm-3">LUN-VIE:</dt>
                                <dd className="col-sm-9">LUN-VIE: 02:30 am - 06:30 pm</dd>
                            </div>
                        </div>
                        <div className="col-3 mt-2">
                            <h3>Mas informacion</h3>
                            <hr className="hr-footer"/>
                            <div className="list-group footer-information">
                                <a href="#"><i className="fas fa-map-marked-alt mr-2"></i>Contactos Turiticos</a>
                                <a href="#"><i className="fas fa-archway mr-2"></i>Te invitamos a conocer Alis</a>
                                <a href="#"><i className="fas fa-file-alt mr-2"></i> Registro Civil</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <p className="text-center">&copy; 2019 por Municipalidad Distrital de Alis</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}