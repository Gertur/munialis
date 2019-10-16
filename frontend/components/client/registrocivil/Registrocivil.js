import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
export default class Registrocivil extends Component{
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-12">
                            <h4 className="ml-2 saludo-alcalde p-2">REGISTRO CIVIL</h4>
                        </div>
                        <div className="col-12 ml-2">
                            <h5><strong>REQUISITOS PARA CONTRAER MATRIMONIO CIVIL EN EL DISTRITO DE ALIS</strong></h5>
                            <h6><strong>Pasos generales:</strong></h6>
                                <ul className="list-unstyled">
                                    <li>Conformación del expediente matrimonial</li>
                                    <li>Publicación del Edicto</li>
                                    <li>Declaracion de la capacidad</li>
                                    <li>Realización de la ceremonia del matrimonio</li>
                                </ul>
                            <h6><strong>Requisitos generales:</strong></h6>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}