import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
//import Sidebarcultura from '../Partials/Sidebarcultura'
export default class Transparencia extends Component{
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="ml-2 saludo-alcalde p-2">RESOLUCIONES DE ALCALDÍA</h4>
                                </div>
                                <div className="col-12 ml-2">
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+79-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 079-2019-MDA/A, Reconocer, agredecer y felicitar al Sr. Antonio Vega Alcántara, por su labor acedémico como docente del Circulo de Estudios e Investigación durante el 2019 organizado por la Municipalidad Distrital de Alis.
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+78-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 078-2019-MDA/A, Reconocer, agredecer y felicitar al Sr. Abel Gonzales Paucar, por su labor acedémico como docente del Circulo de Estudios e Investigación durante el 2019 organizado por la Municipalidad Distrital de Alis.
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+71-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 071-2019-MDA/A, Otorgar el apoyo económico a  favor del Sr. Arenicio Chavarría Márquez, para subvencionar los gastos de recuperación despues del incendio suscitado en la cual se quemó su vivienda y su ganado, hasta el monto de S/ 2,500.00.
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+70-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 070-2019-MDA/A, Reconocer a la organización comunal "Junta Administradora de Servicio de Saneaminto Alis".
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+59-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 059-2019-MDA/A, Conformación del comité con los residentes Alisinos de la ciudad de Lima para la Celebración del Centenario Aniversario de creación política del Distrito de Alis".
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://municipalidadalis.s3-sa-east-1.amazonaws.com/Resoluci%C3%B3n+de+Alcaldia+N%C2%B0+58-2019-MDAA.pdf" target="_blank" className="text-muted h4">
                                        <i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>
                                            Resolución  de Alcadía N° 058-2019-MDA/A, Conformación del comité con los residentes Alisinos de la ciudad de Huancayo para la Celebración del Centenario Aniversario de creación política del Distrito de Alis".
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-sm-inline">
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, libero qui alias, iure hic obcaecati ipsam temporibus accusantium itaque, magni amet ipsa ratione accusamus voluptate quae nulla nihil iste unde?</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}