import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';
export default class Funcionarios extends Component{
    componentDidMount(){
        document.title="Funcionarios - Municipalidad Distrital de Alis";
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
                                    <h4 className="ml-2 saludo-alcalde p-2">FUNCIONARIOS MUNICIPALES</h4>
                                </div>
                                <div className="container pl-4">
                                    <table className="table table-striped table-bordered h4 mt-2 text-justify">
                                        <thead>
                                            <tr colSpan="2">
                                                <th scope="col">AREA</th>
                                                <th scope="col">CARGO</th>
                                                <th scope="col">FUNCIONARIO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">GERENCIA MUNICIPAL</th>
                                                <td>Encargada de la Gerencia Municipal</td>
                                                <td>
                                                    <h5>
                                                        <small className="text-muted d-flex bd-highlight">MARILUZ </small>
                                                        PARIONA LAURA
                                                    </h5>
                                                    <p className="card-text h5">
                                                        <a href="mailto:gerturh@mail.com" className="text-reset">Marilu02_14@hotmail.com</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SECRETARIA GENERAL</th>
                                                    <td>Secretaria General</td>
                                                    <td>
                                                        <h5>
                                                            <small className="text-muted d-flex bd-highlight">MILAGROS </small>
                                                            PEÑALOZA OLIVERA
                                                        </h5>
                                                        <p className="card-text h5">
                                                            <a href="mailto:ingmilagrospo@gmail.com" className="text-reset">ingmilagrospo@gmail.com</a>
                                                        </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <p className="subgerencia-table">
                                                    SUB GERENCIA DE DESARROLLO SOCIAL, ECONOMICO Y SERVICIOS PUBLICOS
                                                    </p>
                                                </th>
                                                <td>
                                                    <p className="d-flex bd-highlight borde-funcionarios">Sub Gerente de Desarrollo Social, Económico y Servicios Públicos</p>
                                                    <p className="d-flex bd-highlight borde-funcionarios">Jefe de la Oficina de Registros del Estado Civil</p>
                                                    <p className="d-flex bd-highlight borde-funcionarios">Encargada de la OFICINA DEL OMAPED</p>
                                                    <p className="d-flex bd-highlight">Encargada de la Unidad Local de Enpadronamiento - ULE</p>
                                                </td>
                                                <td>
                                                    <p className="borde-funcionarios">
                                                        <span>
                                                            <small className="text-muted d-flex bd-highlight">ELVA LIZ</small>
                                                            ROSALES FERNANDEZ
                                                        </span>
                                                        <a href="mailto:elvarousliz@gmail.com" className="d-flex bd-highlight card-text h5 text-reset">elvarousliz@gmail.com</a>
                                                    </p>
                                                    <p className="borde-funcionarios">
                                                        <span>
                                                        <small className="text-muted d-flex bd-highlight">CIRO</small>
                                                        ARAUCO RODRIGUEZ
                                                        </span>
                                                        <a href="mailto:gerturh@gmail.com" className="d-flex bd-highlight card-text h5 text-reset">ciroarauco@gmail.com</a>
                                                    </p>
                                                    <p className="borde-funcionarios">
                                                        <span>
                                                        <small className="text-muted d-flex bd-highlight">IRIS MARGOT</small>
                                                        HUARACA ESPEJO
                                                        </span>
                                                        <a href="mailto:151002alis@gmail.com" className="d-flex bd-highlight card-text h5 text-reset">151002alis@gmail.com</a>
                                                    </p>
                                                    <p>
                                                        <span>
                                                        <small className="text-muted d-flex bd-highlight">IRIS MARGOT</small>
                                                        HUARACA ESPEJO
                                                        </span>
                                                        <a href="mailto:151002alis@gmail.com" className="d-flex bd-highlight card-text h5 text-reset">151002alis@gmail.com</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SUB GERENCIA DE OBRAS Y DESARROLLO URBANO Y RURAL</th>
                                                <td>Sub Gerente de Obras y Desarrollo Urbano y Rural</td>
                                                <td>
                                                    <span>
                                                        <small className="text-muted d-flex bd-highlight">ING. VALERI </small>
                                                        FLORES MARTINEZ
                                                    </span>
                                                    <a href="mailto:valditodem@hotmail.com" className="d-flex bd-highlight card-text h5 text-reset">valditodem@hotmail.com</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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