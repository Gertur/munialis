import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Sidebar extends Component{
    render(){
        return(
            <div className="menu-autoridades">               
            <Link className="menuautoridades hvr-icon-hang p-3" to="/turismo">
                Distrito de Alis
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
            <Link className="menuautoridades hvr-icon-hang p-3" to="/recursos-turisticos">
                Recursos Turísticos
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
            {/* <a className="menuautoridades hvr-icon-hang p-3" data-toggle="collapse" data-target="#menuautoridades" aria-controls="menuautoridades" aria-expanded="false" aria-label="Toggle navigaation">
                    Servicios Turísticos
                    <i className="fas fa-angle-down hvr-icon"></i>
                </a>
            <div className="collapse" id="menuautoridades">
                <div>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/hotel-municipal">
                        Hotel Municipal
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/casas-hospedajes">
                        Casas Hospedaje
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/casas-hospedajes">
                        Restaurantes
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/casas-hospedajes">
                        Artesanía
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/casas-hospedajes">
                        Museo
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                </div>
            </div> 
            <Link className="menuautoridades hvr-icon-hang p-3" to="">
                Galeria de Fotos
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link> */}
        </div>
        )
    }
}