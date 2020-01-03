import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import axios from 'axios';
import {Link} from 'react-router-dom';
const URI='http://localhost:3000';

export default class Obras extends Component{
    state={
        obras:[]
    }
    async componentDidMount(){
        this.getObras();
        document.title = "Obras - Municipalidad Distrital de Alis";
    }
    async getObras(){
        const obras = await axios.get(URI+'/api/obras');
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
                            <h4 className="ml-2 saludo-alcalde p-2">OBRAS</h4>
                            <p className="h4">Obras de la Municipalidad Distrital de Alis - Yauyos - Lima.</p>
                            {
                            this.state.obras.map(obra=>(
                            <div className="card" key={obra._id}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <Link className="card-title h3 text-muted" to={"obra/"+obra._id}><strong>{obra.titulo}</strong></Link>
                                            <p><strong>{new Date(obra.create_at).getDate()+'-'+ (new Date(obra.create_at).getMonth()+1)+'-'+ new Date(obra.create_at).getFullYear()}</strong></p>
                                            <p className="card-text">{obra.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                            }
                        </div>
                        <div className="col-4">
                            <h5>Últimas entradas</h5>
                            { this.state.obras.map(obra=>(
                            <div className="card" key={obra._id}>
                                <div className="card-title">
                                    <Link className="text-muted" to={"obra/"+obra._id}>{obra.titulo}</Link>
                                    <p><strong>{new Date(obra.create_at).getDate()+'-'+ (new Date(obra.create_at).getMonth()+1)+'-'+ new Date(obra.create_at).getFullYear()}</strong></p>
                                </div>
                            </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}