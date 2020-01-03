import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebarturismo from '../Partials/Sidebarturismo'
export default class Turismo extends Component{
    componentDidMount(){
        document.title = "Turísmo - Municipalidad Distrital de Alis";
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
                                    <h4 className="ml-2 saludo-alcalde p-2">RECURSOS TURÍSTICOS</h4>
                                </div>
                                <div className="col-12">
                                    <p className="h4 text-justify ml-2">
                                        Alis es considerado paraíso natural, patrimonio natural de la humanidad, está dentro del área de la Reserva Paisajística Nor Yauyos-Cochas, reconocido por su exótica riqueza natural, alberga animales y plantas que han creado adaptaciones especiales convirtiéndose en especies únicas en la región que cautivan el interés de miles de turistas nacionales y extranjeros.
                                    </p>
                                </div>
                                <div className="col-12 ml-2">
                                    <h2>PRINCIPALES RECURSOS TURÍSTICOS</h2>
                                </div>
                                <div className="col-12 ml-2">
                                    <div className="row">
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/laguna-silacocha.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h4 className="recursoturisticocard__title">Laguna de Silacocha</h4>
                                                    <p className="h5 text-justify">Laguna silacocha recurso natural de Alis, fuente de agua para regadíos a los andenes de Huacta, con un larga extension de canales.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Laguna de Silacocha<i class="fas fa-heart ml-4">12</i></strong>
                                                <i class="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/huacta.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h5 className="recursoturisticocard__title">Los Andenes de Huacta, Cuncaycancha y Añay.</h5>
                                                    <p className=" h5 text-justify">Andenerías legados por nuestros antepasados, irrigados por el gigantesco acueducto de Silacocha.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Los andenes de Huacta<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/coricoto.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h4 className="recursoturisticocard__title">Sitio Arqueológico de Coricoto y Marcalla</h4>
                                                    <p className="h5 text-justify recursoturisticocard__descripcion">Restos arqueológicos que testifican la noche de los tiempos de los gentiles.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Sitio Arqueológico de Coricoto<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ml-2 mt-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/bosque-lloque.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h3 className="recursoturisticocard__title">Bosque de Lloque</h3>
                                                    <p className="h5 text-justify">Bosque de formaciones vegetales, características de las laderas que bordean las grendes quebradas, denominadas por Kageneckia lanceolada (Lloque).</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Bosque de lloque<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/cañon.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h3 className="recursoturisticocard__title">Cañon de Uchco</h3>
                                                    <p className="h5 text-justify">Uchco testigo mudo del sacrificio, sudor y lágrimas de alisinos que trabajaron incansablemente desgranando sus rocas.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Cañon de Uchco<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/tapo.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h3 className="recursoturisticocard__title">Catarata de Tapo</h3>
                                                    <p className="h5 text-justify">Manantiales que se arrastran por el lecho del lugar de Tapo, formando cascadas y dando saltos que se discurren en el río Alis.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Catarata de Tapo<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ml-2 mt-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/caida-angel.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h3 className="recursoturisticocard__title">Catarata Caida del Ángel</h3>
                                                    <p className="h5 text-justify">Velo angelical que adorna el "Cañon de Uchco" con la caída de sus aguas de Monte que discurren al río Alis.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">Catarata Caida del Ángel<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                        <div className="col-4">
                                            <article className="recursoturisticocard pr-0 pl-0">
                                                <img className="recursoturisticocard__img" src="./img/cueva-murcielagos.jpg" alt="" height="350px"/>
                                                <div className="recursoturisticocard__content">
                                                    <h3 className="recursoturisticocard__title">La cueva de los Muriciélagos</h3>
                                                    <p className="h5 text-justify">Las exploraciones y aventuras en busca de colonias de cientos de mamíferos con la verdadera capacidad de volar.</p>
                                                </div>
                                                <strong className="recursoturisticocard__like__title">La cueva de los Muriciélagos<i className="fas fa-heart ml-4">12</i></strong>
                                                <i className="recursoturisticocard__info fas fa-info-circle fas-2s"></i>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-sm-inline">
                            <Sidebarturismo/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}