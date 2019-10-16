import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Sidebar extends Component{
    render(){
        return(
            <div className="menu-autoridades">               
            <Link className="menuautoridades hvr-icon-hang p-3" to="/cultura">
                Reseña Histórica
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
            <Link className="menuautoridades hvr-icon-hang p-3" to="/calendario-festivo">
                Calendario Festivo
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
            <Link className="menuautoridades hvr-icon-hang p-3" to="/galeria-de-fotos-cultura">
                Galeria de Fotos
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
        </div>
        )
    }
}