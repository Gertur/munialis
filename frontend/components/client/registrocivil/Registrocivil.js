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
                            <h2><strong>REQUISITOS PARA CONTRAER MATRIMONIO CIVIL EN EL DISTRITO DE ALIS</strong></h2>
                            <h3><strong>Pasos generales:</strong></h3>
                                <ul className="h4 list-unstyled ml-3">
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Conformación del expediente matrimonial</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Publicación del Edicto</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Declaracion de la capacidad</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Realización de la ceremonia del matrimonio</li>
                                </ul>
                            <h3><strong>Documentos Generales:</strong></h3>
                                <ul className="h4 list-unstyled ml-3">
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Solicitud dirigida al Alcalde</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Copia certificada de la partida de nacimiento de los contrayentes</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Copia simple de los DNI de cada uno de los contrayente</li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Dos testigos portando copia de su DNI
                                        <blockquote className="blockquote h4 ml-5">
                                            <p className="mb-0 h4">Nota:</p>
                                            <footer className="blockquote-footer blockquote-footer-turismo h4"><cite title="Distancia entre Cañete y Yauyos">Los tentigos no deven ser familiares de los contrayentes.</cite></footer>
                                        </blockquote>
                                    </li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Declaracion jurada de los testigos de conocer a los contrayentes.<a href="#" className="text-muted" target="_blank">(Ver modelo)</a>                                    
                                    </li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Certificado médico de los contrayentes expedido por el área de Salud.                                    
                                    </li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Certificado médico de solteria o viudez.                                    
                                    </li>
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Declaración Jurada de Domicilio, uno de los pretendientes debe residir y figurar en su DNI que domicilie dentro del Distrito de Alis.               
                                    </li>
                                </ul>
                            <h3><strong>Adicionales Según Corresponda:</strong></h3>
                            <div className="ml-2">
                                <h4 className="registro-segun-corresponda"><strong>Para menores de edad:</strong></h4>
                                    <ul className="h4 list-unstyled ml-3">
                                        <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Consentimiento de los padres con Escritura Pública desde los 17 años hast 17 años y 11 meses y/o con dispensa judicial desde los 14 años.<a href="#" className="text-muted" target="_blank">(Ver modelo)</a>                                    
                                        </li>
                                    </ul>
                                <h4 className="registro-segun-corresponda"><strong>Para divorciados:</strong></h4>
                                <ul className="h4 list-unstyled ml-3">
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Partida de matrimonio con la inscripción del divorcio o anulación del matrimonio anterior.                                    
                                    </li>
                                </ul>
                                <h4 className="registro-segun-corresponda"><strong>Para viudos(as):</strong></h4>
                                <ul className="h4 list-unstyled ml-3">
                                    <li><i class="fas fa-check-circle mr-2" style={{fontSize:'18px'}}></i>Partida de defunción del cónyugue fallecido.                                    
                                    </li>
                                </ul>
                            </div>
                            <h3><strong>Derecho de pago:</strong></h3>
                            <div>
                            <table className="table table-striped table-bordered h4 mt-2 text-justify">
                                        <thead>
                                            <tr colSpan="2">
                                                <th scope="col">CEREMONIA DE MATRIMONIO</th>
                                                <th scope="col">DERECHO DE TRAMITACIÓN</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">De lunes a Viernes Horario de Oficina</th>
                                                <td>S/. 60.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SECRETARIA GENERAL</th>
                                                <td>Secretaria General</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SUB GERENCIA DE OBRAS Y DESARROLLO URBANO Y RURAL</th>
                                                <td>Sub Gerente de Obras y Desarrollo Urbano y Rural</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}