import React,{Component} from 'react';
import axios from 'axios';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import {Link} from 'react-router-dom';
const URI='http://localhost:3000';
export default class ObraId extends Component{
    state={
        obras:[]
    }
    async componentDidMount(){
        if(this.props.match.params.id){
            const res = await axios.get(URI+'/api/obras/'+this.props.match.params.id);
            this.setState({
                titulo:res.data.titulo,
                descripcion:res.data.descripcion,
                estado_obra:res.data.estado_obra,
                presupuesto:res.data.presupuesto,
                avance:res.data.avance,
                objetivos:res.data.objetivos,
                create_at:res.data.create_at
            })
        }
        this.getObras();
        document.title = `Obras - ${this.state.titulo}`
    }
    async getObras(){
        const obras =await axios.get(URI+'/api/obras');
        this.setState({
            obras:obras.data
        })
    }
    render(){
        return(
            <div>
                <Navegacion/>
                    <div className="container">
                        <div className="row mt-2">
                            <div className="col-8">
                                <h4 className="ml-2 saludo-alcalde p-2">{this.state.titulo}</h4>
                                <ul className="d-flex lista-navbar-noticia">
                                    <li className="mr-2"><Link to="/" className="text-muted"><strong>HOME</strong></Link>   /</li>
                                    <li className="ml-2"><Link to="/obras" className="text-muted"><strong>TODAS LAS OBRAS</strong></Link>  /</li>
                                    <li className="ml-2 text-muted"><i class="far fa-clock"></i> Publicado el {new Date(this.state.create_at).getDate()+'/'+((new Date(this.state.create_at).getMonth())+1) +'/'+new Date(this.state.create_at).getFullYear()}</li>
                                </ul>
                                <div className="ml-2 h4">
                                    <p className="text-justify">{this.state.descripcion}</p>
                                    <p>
                                        <strong className="mr-2">Estado de la Obra:</strong>{this.state.estado_obra} <br/>
                                        <strong className="mr-2">Presupuesto:</strong>{this.state.presupuesto} <br/>
                                        <strong className="mr-2">Avance:</strong>{this.state.avance} <br/>
                                        <strong className="mr-2">Objetivos:</strong>{this.state.objetivos}
                                    </p>
                                </div>
                            </div>

                            <div className="col-4">
                                <h5>Categorías</h5>
                                <div className="card">
                                    <div className="card-title">
                                        <li className="list-categoria-obrasid">
                                            <ul><i class="fas fa-tasks mr-2"></i><Link className="text-muted" to="/todas-actividades">Actividades -  Municipalidad Distrital de Alis</Link></ul>
                                            <ul><i class="fas fa-clipboard mr-2"></i><Link className="text-muted" to="/noticias">Noticias - Municipalidad Distrital de Alis</Link></ul>
                                        </li>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}