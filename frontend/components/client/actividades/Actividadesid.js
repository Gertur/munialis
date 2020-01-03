import React,{Component} from 'react';
const URI='http://localhost:3000';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Actividadesid extends Component{
    state={
        actividad:[]
    }
    async componentDidMount(){
        if(this.props.match.params.id){
            const res = await axios.get(URI+'/api/actividades/'+this.props.match.params.id);
            this.setState({
                titulo:res.data.titulo,
                fechadesarrollo:res.data.fechadesarrollo,
                imageLocation:res.data.imageLocation,
                descripcion:res.data.descripcion,
                horadesarrollo:res.data.horadesarrollo,
                lugardesarrollo:res.data.lugardesarrollo
            })
        }
        document.title = `Actividades - ${this.state.titulo}`
    }
    render(){
        const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        return(
            <div>
                <Navegacion/>
                    <div className="container">
                        <div className="row mt-2">
                            <div className="col-12">
                                <ul className="d-flex lista-navbar-noticia">
                                    <li className="mr-2"><Link to="/" className="text-muted"><strong>HOME</strong></Link>   /</li>
                                    <li className="ml-2"><Link to="/todas-actividades" className="text-muted"><strong>TODAS LAS NOTICIAS</strong></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-8"><h5><strong>{this.state.titulo}</strong></h5></div>
                                    <div className="col-4"><strong className="text-uppercase">Agenda de Actividades  - {meses[new Date(this.state.fechadesarrollo).getMonth()]} del {new Date(this.state.fechadesarrollo).getFullYear()}</strong> </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={this.state.imageLocation} alt="" className="d-block ml-auto mr-auto" width="70%"/>
                                        <p className="h5 mt-2"><strong>Fecha: </strong>{new Date(this.state.fechadesarrollo).getDate()} de {meses[new Date(this.state.fechadesarrollo).getMonth()]} del {new Date(this.state.fechadesarrollo).getFullYear()}<strong>Hora: </strong><kbd className="text-lowercase">{this.state.horadesarrollo}</kbd></p>
                                        <p className="h5 mt-2"><strong>Lugar de reunión: </strong>{this.state.lugardesarrollo}</p>
                                        <p className="lead ml-4">
                                            {this.state.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                            <h4>NOTICIAS</h4>
                                <ul className="mt-4 list-menu-actividades">
                                    <li className="mt-3"><Link to="/noticias" className="hvr-icon-hang"><i className="fas fa-angle-right hvr-icon mr-3"></i>Noticias</Link></li>
                                    <li className="mt-3"><Link to="/galeria-fotos-munialis" className="hvr-icon-hang"><i className="fas fa-angle-right hvr-icon mr-3"></i>Galería de fotos</Link></li>
                                    <li className="mt-3"><Link to="/calendario-festivo" className="hvr-icon-hang"><i className="fas fa-angle-right hvr-icon mr-3"></i>Calendario de festividades</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}