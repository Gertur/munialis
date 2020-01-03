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
                                    <h4 className="ml-2 saludo-alcalde p-2">EL DISTRITO DE ALIS</h4>
                                </div>
                                <div className="pl-4 pr-3 h4 text-justify">
                                    <img src="https://munialisstatic.s3-sa-east-1.amazonaws.com/slide2.jpg" className="mr-3" alt="" width="70%" alt="Saludo del Alcalde" style={{float:'left'}}/>El Distrito de Alis se encuentra ubicado en la Zona Norte de la provincia de Yauyos. La capital del distrito está a una altitud de 3,2330 m.s.n.m., tiene una superficie territorial de 142.06 km2. Alis, limita por el Norte con el Distrito de Tomas, por el Sur con el Distrito de Laraos, por el Este con los Distritos de Tomas y la provincia de Huancayo y por el Oeste con los Distritos de Laraos y Miraflores. El clíma en Alis varía entre templado y seco. Las lluvias son abundantes entre diciembre y abril. El resto de los meses es seco o de estiaje, la temperatura media entre 9 y 21 grados centígrados.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h2> <strong>RUTAS DE ACCESO:</strong></h2>
                                    <h3><strong>Desde Lima:</strong></h3>
                                    <p className="h4 text-justify">Se debe ir por la Panamericana Sur, con destino hacia cañete - Lunahuaná - Zuñiga - Catahuasi - Magdalena - Tinco Alis - Alis. (165 Km. vía asfaltada - tiempo estimado de viaje 5 Hrs)</p>
                                    <h3><strong>Desde Huancayo:</strong></h3>
                                    <p className="h4 text-justify">Seguir el camino de Huancayo hacia - Chupaca - Chaucha - Tomas - Alis. (165 Km. vía asfaltada - tiempo estimado de viaje 3 Hrs)</p>
                                    <blockquote className="blockquote h4">
                                        <p className="mb-0 h4">Nota:</p>
                                        <footer className="blockquote-footer blockquote-footer-turismo h4"><cite title="Distancia entre Cañete y Yauyos">Cañete - Yauyos (136 Km. tiempo de viaje 3.5 Hrs)</cite></footer>
                                    </blockquote>
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