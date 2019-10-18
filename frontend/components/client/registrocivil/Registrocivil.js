import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
export default class Registrocivil extends Component{
    render(){
        return(
            <div>
                <Navegacion />
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-12">
                            <h4 className="ml-2 saludo-alcalde p-2">REGISTRO CIVIL</h4>
                        </div>
                        <div className="col-12 ml-2">
                            <div className="row">
                                <div className="col-9">
                                    <h2><strong>REQUISITOS PARA CONTRAER MATRIMONIO CIVIL EN EL DISTRITO DE ALIS</strong></h2>
                                    <h3><strong>Pasos generales:</strong></h3>
                                    <ul className="h4 list-unstyled ml-3">
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Conformación del expediente matrimonial.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Publicación del Edicto.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Declaracion de la capacidad.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Realización de la ceremonia del matrimonio.</li>
                                    </ul>
                                    <h3><strong>Documentos Generales:</strong></h3>
                                    <ul className="h4 list-unstyled ml-3">
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Solicitud dirigida al Alcalde.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Copia certificada de la partida de nacimiento de los contrayentes.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Copia simple de los DNI de cada uno de los contrayente.</li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Dos testigos portando copia de su DNI.
                                        <blockquote className="blockquote h4 ml-5">
                                                <p className="mb-0 h4">Nota:</p>
                                                <footer className="blockquote-footer blockquote-footer-turismo h4"><cite title="Distancia entre Cañete y Yauyos">Los tentigos no deven ser familiares de los contrayentes.</cite></footer>
                                            </blockquote>
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Declaracion jurada de los testigos de conocer a los contrayentes.<a href="#" className="text-muted" target="_blank">(Ver modelo)</a>
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Certificado médico de los contrayentes expedido por el área de Salud.
                                    </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Certificado de solteria o viudez.
                                    </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Declaración Jurada de Domicilio, uno de los pretendientes debe residir y figurar en su DNI que domicilie dentro del Distrito de Alis.
                                    </li>
                                    </ul>
                                    <h3><strong>Adicionales Según Corresponda:</strong></h3>
                                    <div className="ml-2">
                                        <h4 className="registro-segun-corresponda"><strong>Para menores de edad:</strong></h4>
                                        <ul className="h4 list-unstyled ml-3">
                                            <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Consentimiento de los padres con Escritura Pública desde los 17 años hast 17 años y 11 meses y/o con dispensa judicial desde los 14 años.<a href="#" className="text-muted" target="_blank">(Ver modelo)</a>
                                            </li>
                                        </ul>
                                        <h4 className="registro-segun-corresponda"><strong>Para divorciados:</strong></h4>
                                        <ul className="h4 list-unstyled ml-3">
                                            <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Partida de matrimonio con la inscripción del divorcio o anulación del matrimonio anterior.
                                    </li>
                                        </ul>
                                        <h4 className="registro-segun-corresponda"><strong>Para viudos(as):</strong></h4>
                                        <ul className="h4 list-unstyled ml-3">
                                            <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Partida de defunción del cónyugue fallecido.
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card h5 mr-2">
                                        <div className="card-body">
                                            <h5 className="card-title">Horario de Atención</h5>
                                            <p className="card-text"><i className="fas fa-calendar-week mr-2"></i>Lunes a Viernes de 9:00 am a 1:00 pm</p>
                                            <p className="card-text"><i className="fas fa-calendar-week mr-2"></i>Lunes a Viernes de 3:00 pm a 7:00 pm</p>
                                            <p className="card-text"><i className="fas fa-calendar-week mr-2"></i>Informes e inscripciones: Municipalidad Distrital de Alis, 3er Piso.</p>
                                            <p className="card-text"><i className="fas fa-user mr-2"></i>Registrador Civil: Arturo Huaraca Espejo.</p>
                                            <p className="card-text"><i className="fas fa-phone-square-alt mr-2"></i>966873728</p>
                                            <p className="card-text"><i className="fas fa-envelope mr-2"></i>gerturh@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
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
                                                    <th scope="row">Días laborables, horario de trabajo fuera de la Municipalidad</th>
                                                    <td>S/. 80.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Domingos y feriados dentro del Distrito</th>
                                                    <td>S/. 100.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Matrimonios fuera del Distrito</th>
                                                    <td>S/. 250.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-general"/>
                            <div className="row">
                                <div className="col-12">
                                    <h3><strong>Pasos a seguir para inicializar el expediente matrimonial:</strong></h3>
                                    <ul className="h4 list-unstyled ml-3">
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Presentarse ambos contrayentes en la oficina de Registro Civil de la Municipalidad Distrital de Alis, con la documentación completa.
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Abrir el expediente Matrimonial, previa revisión, calificación de documentos y pago del derecho de trámite.
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Una vez calificado positivamente el Expediente Matrimonial se hára entrega del Edicto Matrimonial para su publicación en el diario de mayor circulación nacional, o en todo caso en los murales de la Municipalidad del Distrito en el que residen.
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Una vez publicado el edicto matrimonial, estarán aptos  para contraer matrimonio a partir del noveno día.
                                        </li>
                                        <li><i className="fas fa-check-circle mr-2" style={{ fontSize: '18px' }}></i>Luego de publicado el edicto, el mismo debe ser devuelto para las cordinaciones de la ceremonia.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}