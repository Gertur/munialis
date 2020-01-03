
import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';

export default class Regidores extends Component{
    componentDidMount(){
        document.title = "Regidores - Municipalidad Distrital de Alis";
    }
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="saludo-alcalde p-2">REGIDORES</h4>
                                </div>
                                <div className="row mt-2 pl-3 pr-3">
                                    <div className="card card-regidor col-4">
                                        <img src="./img/regidor.png" className="card-img-top card-img-top-regidor" alt=""/>
                                        <div className="card-body card-body-regidor">
                                            <h5>
                                                <small className="text-muted d-flex bd-highlight">RONALD RUBEN </small>
                                                JUAN DE DIOS BASURTO
                                            </h5>
                                            <p className="card-text h5"><i className="fas fa-phone-square-alt fa-2x mr-2"></i>993428767</p>
                                        </div>
                                    </div>  
                                    <div className="card card-regidor col-4">
                                        <img src="./img/regidor.png" className="card-img-top card-img-top-regidor" alt=""/>
                                        <div className="card-body card-body-regidor">
                                            <h5>
                                                <small className="text-muted d-flex bd-highlight">YELITZA MILAGROS </small>
                                                PONCE RODRIGUEZ
                                            </h5>
                                            <p className="card-text h5"><i className="fas fa-phone-square-alt fa-2x mr-2"></i>939138646</p>
                                        </div>
                                    </div>
                                    <div className="card card-regidor col-4">
                                        <img src="./img/regidor.png" className="card-img-top card-img-top-regidor" alt=""/>
                                        <div className="card-body card-body-regidor">
                                            <h5>
                                                <small className="text-muted d-flex bd-highlight">CARLOS ALBERTO </small>
                                                BEJARANO MONTOYA
                                            </h5>
                                            <p className="card-text h5"><i className="fas fa-phone-square-alt fa-2x mr-2"></i>975480524</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2 ml-1 d-flex justify-content-around">
                                    <div className="card card-regidor col-4 mt-2">
                                        <img src="./img/regidor.png" className="card-img-top card-img-top-regidor" alt=""/>
                                        <div className="card-body card-body-regidor">
                                            <h5>
                                                <small className="text-muted d-flex bd-highlight">DZAMILIA MAGDE </small>
                                                SANDOVAL LOPEZ
                                            </h5>
                                            <p className="card-text h5"><i className="fas fa-phone-square-alt fa-2x mr-2"></i>971952894</p>
                                        </div>
                                    </div>
                                    <div className="card card-regidor col-4 mt-2">
                                        <img src="./img/regidor.png" className="card-img-top card-img-top-regidor" alt=""/>
                                        <div className="card-body card-body-regidor">
                                            <h5>
                                                <small className="text-muted d-flex bd-highlight">HUGO </small>
                                                TEMBLADERA ALEJOS
                                            </h5>
                                            <p className="card-text h5"><i className="fas fa-phone-square-alt fa-2x mr-2"></i>972347704</p>
                                        </div>
                                    </div>
                                    </div>                    
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
