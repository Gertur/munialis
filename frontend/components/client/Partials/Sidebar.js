import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Sidebar extends Component{
    render(){
        return(
            <div className="menu-autoridades">
                <a className="menuautoridades hvr-icon-hang p-3" data-toggle="collapse" data-target="#menuautoridades" aria-controls="menuautoridades" aria-expanded="false" aria-label="Toggle navigaation">
                    Autoridades
                    <i className="fas fa-angle-down hvr-icon"></i>
                </a>
            <div className="collapse" id="menuautoridades">
                <div>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/regidores">
                        Regidores
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                    <Link className="submenuautoridades d-flex bd-highlight hvr-icon-hang p-3 pl-5" to="/funcionarios">
                        Funcionarios
                        <i className="fas fa-angle-right hvr-icon"></i>
                    </Link>
                </div>
            </div>    
            <Link className="menuautoridades hvr-icon-hang p-3" to="/mision">
                Misión
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
            <Link className="menuautoridades hvr-icon-hang p-3" to="/vision">
                Visión
                <i className="fas fa-angle-right hvr-icon"></i>
            </Link>
        </div>
        )
    }
}