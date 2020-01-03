import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Createnoticias from '../noticias/Createnoticias';
import Actividades from '../actividades/Createactividades';
import Obras from '../obras/Obras';
export default class Navegacion extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-menu-admin fixed-top">
                    <div className="container">
                        <ul className="navbar-nav ml-auto" style={{color:"#ffffff"}}> 
                            <li className="nav-item active"><a href=""></a></li>
                            <li><a href="nav-item"><i className="fas fa-user-tie"></i></a>Usuario</li>
                        </ul>
                    </div>
                </nav>
                <div className="row espacio-crearnoticias">
                    <div className="col-2">
                        <div className="nav flex-column nav-pills sidebar-crear-noticia" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Noticias</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Actividades</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Obras</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Createnoticias/></div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Actividades/></div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><Obras/></div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate hic laborum minima? Blanditiis inventore architecto quidem? Ducimus fugit iure, totam quam voluptatem odio, aliquid voluptas enim suscipit repellat explicabo.</div>
                        </div>
                    </div>                
            </div>
            </div>
            
        )
    }
}