import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebarcultura from '../Partials/Sidebarcultura';
import WOW from 'wow.js/dist/wow';

export default class Turismo extends Component{
    componentDidMount(){
        new WOW().init();
        document.title = `Calendario festivo - Municipalidad Distrital de Alis`;
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
                                    <h4 className="ml-2 saludo-alcalde p-2">CALENDARIO FESTIVO</h4>
                                </div>
                                <div className="col-12 pl-4 pr-3">
                                    <p className="h4 text-justify">Alis tiene diversas manifestaciones culturales, todos ellos ligados con la naturaleza y la armonía del hombre con la tierra, a continuación, enumeramos algunas de sus principales festividades.</p>
                                    <ul className="timeline">
                                        <li className="">
                                            <div className="timeline__direction-r wow slideInRight">
                                                <div className="timeline__flag-wrapper h5">
                                                    <span className="timeline__flag">FIESTA DE LA NEGRERÍA</span>
                                                    <span class="timeline__time-wrapper"><span class="time"> <strong>01 - Enero</strong></span></span>
                                                </div>
                                                <div className="timeline__desc h5 text-justify">
                                                Se danza en honor al Niño Jesús cada primero de enero, varios negritos bien enternados deleitan con sus coreografías y movimientos.
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/negreria.jpg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline__direction-l wow slideInLeft">
                                                <div className="timeline__flag-wrapper h5">
                                                    <span className="timeline__flag">ANIVERSARIO DEL DISTRITO DE ALIS</span>
                                                    <span class="timeline__time-wrapper"><span class="time"> <strong>Febrero</strong></span></span>
                                                </div>
                                                <div className="timeline__desc h5 text-justify">
                                                Aniversario de la Creación Política del Distrito de Alis, conjuntamente con el carnaval Alisino.
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/aniversario-comunal.jpg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline__direction-r wow slideInRight">
                                                <div className="timeline__flag-wrapper h5">
                                                    <span className="timeline__flag">LA LIMPIA ACEQUIA</span>
                                                    <span class="timeline__time-wrapper"><span class="time"> <strong>Junio</strong></span></span>
                                                </div>
                                                <div className="timeline__desc h5 text-justify">
                                                <strong>Fiesta de La limpia acequia y la cashahuayta</strong>.
                                                La mayor pleitesía al agua, se da el tercer domingo de junio. Desde las alturas de la laguna de silacocha, varios comuneros bajan limpiando los canales que transportan el agua a los campos de cultivos, mientras los solteros y solteras alegran la fiesta con sus cantos y danzas, para posteriormente llegar danzando solteros y comuneros al lugar de Yarinca, donde los mayordomos los reciben con una rica pachamanca, primero almuerzan los comuneros y posteriormente los solteros, después del rico almuerzo se procese a la presentación de los danzantes los Mashas, donde muestran sus mejores dotes en el baile acompañado con la gracia y humor de los Mashas.
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/limpia-cequia.jpg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline__direction-l wow slideInLeft">
                                                <div className="timeline__flag-wrapper h5">
                                                    <span className="timeline__flag">LA PALLA ALISINA</span>
                                                    <span className="timeline__time-wrapper"><span className="time"> <strong>14 - 17 - Agosto</strong></span></span>
                                                </div>
                                                <div className="timeline__desc h5">
                                                Es la fiesta patronal y religiosa más importante del distrito que se desarrolla del 14 al 17 de agosto de todos los años. Esta fiesta costumbrista que viene asociado desde la creación del pueblo de Alis, se baila en homenaje a la Virgen de la Asunción y su devoto el Patrón San Lorenzo de Alis.
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/palla-alisina.jpg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline__direction-r wow slideInRight">
                                                <div className="timeline__flag-wrapper h5">
                                                    <span className="timeline__flag">ANIVERSARIO DE LA C.C.S.L</span>
                                                    <span class="timeline__time-wrapper"><span class="time"><strong>Setiembre</strong></span></span>
                                                </div>
                                                <div className="desc h5 text-justify">
                                                <strong>Aniversario de la Comunidad Campesina San Lorenzo de Alis, una semana llena de actividades y festividades.</strong>
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/aniversario-comunal.jpg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline__direction-l wow slideInLeft">
                                                <div className="timeline__flag-wrapper h4">
                                                    <span className="timeline__flag">FIESTA DE LAS AZUCENAS</span>
                                                    <span className="timeline__time-wrapper"><span className="time"> <strong>25 - Diciembre</strong></span></span>
                                                </div>
                                                <div className="desc h5 text justify">
                                                Se danza en honor al Niño Jesús cada 25 de diciembre.
                                                </div>
                                                <figure className="imagen-calendario-festivo mt-2">
                                                    <img src="./img/azucena.jpeg" alt="" className="w-100"/>
                                                </figure>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-sm-inline">
                            <Sidebarcultura/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}