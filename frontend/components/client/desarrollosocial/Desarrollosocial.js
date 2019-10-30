import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer'
export default class Desarrollosocial extends Component{
    render(){
        return(
            <div>
                <Navegacion />
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-12">
                            <h4 className="ml-2 saludo-alcalde p-2">Desarrollo Social</h4>
                        </div>
                        <div className="col-12 ml-2">
                            <div className="container_desarrollosocial">
                                <img src="img/sub-gerencia-desarrollo-social.jpg" alt="" className="w-100 mr-3" width=""/>
                                <div className="container_desarrollosocial_descripcion">
                                    <p className="h5 text-justify mr-3">
                                        La Sub Gerencia de Desarrollo Social y de Servicios Públicos en nuestra  municipalidad es carácter administrativa del ayuntamiento que consiste en planear, programar, analizar, operar, y dar seguimiento con base en el marco jurídico, reglamentos, normas a los programas de infraestructura y desarrollo social y humano en el ámbito municipal; involucrando la participación ciudadana en el fomento a la educación, la cultura, la salud, la recreación y el deporte, asimismo se está desarrollando un trabajo para mejorar las condiciones de vida para la población del Municipio en especial a las que se encuentran en condiciones de rezago social y pobreza extrema y con respecto a los servicios públicos se está trabajando en políticas, estrategias y proyectos relacionados con la gestión de los residuos sólidos, conservación de las áreas verdes de uso público del distrito, control sanitario, el saneamiento ambiental y la seguridad ciudadana del distrito en concordancia con las competencias establecidas en la Ley Orgánica de Municipalidades.
                                    </p>
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