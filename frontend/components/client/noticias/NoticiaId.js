import React, {Component} from 'react';
import axios from 'axios';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import { async } from 'q';
const URI='http://localhost:3000';
import {Link} from 'react-router-dom';
import {format,register} from 'timeago.js';
const localeFunc = (number, index, total_sec) => {
    return [
        ['justo ahora', 'en un rato'],
        ['hace %s segundos', 'en %s segundos'],
        ['hace 1 minuto', 'en 1 minuto'],
        ['hace %s minutos', 'en %s minutos'],
        ['hace 1 hora', 'en 1 hora'],
        ['hace %s horas', 'en %s horas'],
        ['hace 1 día', 'en 1 día'],
        ['hace %s días', 'en %s días'],
        ['hace 1 semana', 'en 1 semana'],
        ['hace %s semanas', 'en %s semanas'],
        ['hace 1 mes', 'en 1 mes'],
        ['hace %s meses', 'en %s meses'],
        ['hace 1 año', 'en 1 año'],
        ['hace %s años', 'en %s años']
    ][index];
  };
  register('es_ES', localeFunc);
export default class NoticiaId extends Component{
    state={
        titulo:'',
        descripcion:'',
        noticia:[]
    }
    async componentDidMount(){
        const resnoticia = await axios.get(URI+'/api/noticias');
        this.setState({
            noticia:resnoticia.data
        })

        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:3000/api/noticias/'+this.props.match.params.id);
            this.setState({
                titulo:res.data.titulo,
                descripcion:res.data.descripcion,
                imageLocation:res.data.imageLocation,
                segundadescripcion:res.data.segundadescripcion,
                create_at:res.data.create_at
            })
           
        }
        document.title = `Noticias - ${this.state.titulo}`;
    }
    
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-12">
                            <h4 className="ml-2 saludo-alcalde p-2">NOTICIAS ALIS</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="d-flex lista-navbar-noticia">
                                <li className="mr-2"><Link to="/" className="text-muted"><strong>HOME</strong></Link>   /</li>
                                <li className="ml-2"><Link to="/noticias" className="text-muted"><strong>TODAS LAS NOTICIAS</strong></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row" style={{marginLeft:"1px"}}>
                        <div className="col-8">
                            <h2><strong>{this.state.titulo}</strong></h2>
                            <kbd className="text-lowercase">{format(this.state.create_at,'es_ES')}</kbd>
                            <p className="h4">{this.state.descripcion}</p>
                            <img className="w-100 d-block img-fluid" src={this.state.imageLocation} alt=""/>
                            <p className="h4 mt-2">{this.state.segundadescripcion}</p>
                        </div>
                        <div className="col-4">
                            {
                                this.state.noticia.map(noticias=>(
                            <div className="card mt-2" key={noticias._id}>
                                <img src={noticias.imageLocation} className="card-img-top img-noticias" alt=""/>
                                <div className="card-body p-2 card-body-noticias">
                                    <h5 className="card-title card-title-noticias text-uppercase"> <strong>{noticias.titulo}</strong></h5>
                                    <p className="card-text">{noticias.descripcion.slice(0,30)}...</p>
                                    <Link to={"/noticias"} className="text-reset"><kbd className="ver-mas-noticias text-lowercase mr-5">Ver mas</kbd></Link>
                                    <kbd className="text-lowercase">{format(noticias.create_at,'es_ES')}</kbd>
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