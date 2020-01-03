import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import axios from 'axios';
const URI='http://localhost:3000';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
export default class Actividades extends Component{
    state={
        actividades:[]
    }
    async componentDidMount(){
        this.getActividades();
        document.title="Actividades - Municipalidad Distrital de Alis"
    }
    async getActividades(){
        const actividades = await axios.get(URI+'/api/actividades');
        this.setState({
            actividades:actividades.data
        })
    }
    render(){
        const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="ml-2 saludo-alcalde p-2">TODOS LOS EVENTOS</h4>
                                    <p className="ml-2"><strong>Hay {this.state.actividades.length} Eventos</strong></p>
                                </div>
                                <div className="pl-4 pr-3 h4 text-justify">
                                    {this.state.actividades.map(actividad=>(
                                   <div className="media" key={actividad._id}>
                                       <img src={actividad.imageLocation} className="mr-3 img-activiades" alt="" width="15%"/>
                                       <div className="media-body media-body-activiades">
                                           <div className="d-flex bd-highlight">
                                                <Link to={"todas-actividades/"+actividad._id} className="w-100 bd-highlight mr-3"><h5 className="mt-5"><strong>{actividad.titulo}</strong></h5></Link>
                                                <p className="mt-5 flex-shrink-2 bd-highlight"><strong>Agenda de Actividades  - {meses[new Date(actividad.fechadesarrollo).getMonth()]} del {new Date(actividad.fechadesarrollo).getFullYear()}</strong> </p>
                                           </div>
                                           <hr className="hr-actividades"/>
                                            <h6><strong>{new Date(actividad.fechadesarrollo).getDate()} de {meses[new Date(actividad.fechadesarrollo).getMonth()]} del {new Date(actividad.fechadesarrollo).getFullYear()} <kbd className="text-lowercase">{actividad.horadesarrollo}</kbd></strong></h6>
                                           <h6><strong>{actividad.lugardesarrollo}</strong></h6>
                                           {actividad.descripcion}
                                           <Link to={"todas-actividades/"+actividad._id}>[...]</Link>
                                       </div>
                                   </div>
                                   ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-sm-inline">
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