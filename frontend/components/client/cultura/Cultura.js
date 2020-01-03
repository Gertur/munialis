import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebarcultura from '../Partials/Sidebarcultura'
export default class Turismo extends Component{
    componentDidMount(){
        document.title = "Cultura - Municipalidad Distrital de Alis";
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
                                    <h4 className="ml-2 saludo-alcalde p-2">RESEÑA HISTÓRICA - <strong>Alis (Allin Cay)</strong></h4>
                                </div>
                                <div className="pl-4 pr-3 h4 text-justify">
                                    <img src="./img/reseña-alis.jpg" className="mr-3" alt="" width="70%" alt="Saludo del Alcalde" style={{float:'left'}}/>La historia de Alis se remonta desde el periodo neolítico. Los primeros pobladores estaban bajo el tutelaje de los Hatun Yauyos (hoy provincia de Yauyos), grupos étnicos caracterizados por ser rebeldes y beligerantes. Motivo por el cual se asentaron en las partes altas de las zonas andinas. Aún quedan algunos restos arqueológicos en lo que alguna vez fue la fortaleza de Coricoto,
                                    las andenerías, los acueductos de irrigación y la represa de la laguna de silacocha, hacen suponer que existió influencia Inca durante la expansión del Tahuantinsuyo, dirigido por Inca Pachacutec.
                                    Alis tiene más de tres siglos de existencia, los primeros habitantes vinieron del ayllu los huaquis, las razones son desconocidas, pero se presume que rivalidades con otras tribus obligaron a migrar, tal como lo señala un documento de límites del año 1598.
                                    Durante la emancipación también se cuenta la participación de pobladores Alisinos. En 1821 el Virrey La Serna abandona Lima y se interna al interior de la sierra con destino a la ciudad de Jauja, el paso obligado era la provincia de Yauyos, en el trayecto de Carania y Piños hubo un enfrentamiento con la guerrilla capitaneada por Juan Evangelista Vivas, tal como cita el General Arenales en sus partes de batalla.
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