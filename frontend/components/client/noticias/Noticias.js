import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
const URI='http://localhost:3000';
import axios from 'axios';
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
export default class Desarrollosocial extends Component{
    state={
        noticialast:[],
        noticia:[]
    }
    async componentDidMount(){
        const resnoticia = await axios.get(URI+'/api/noticias');
        this.setState({
            noticia:resnoticia.data
        })
        document.title = "Noticias - Municipalidad Distrital de Alis";
    }
    render(){
        return(
            <div>
                <Navegacion />
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-12">
                            <h4 className="ml-2 saludo-alcalde p-2">TODAS LAS NOTICIAS ALIS</h4>
                        </div>
                    </div>
                    <div className="row">
                        
                            {
                                this.state.noticia.map(noticias=>(
                                    <div className="col-4">
                            <div className="card mt-2" key={noticias._id}>
                                <img src={noticias.imageLocation} className="card-img-top img-noticias" alt=""/>
                                <div className="card-body p-2 card-body-noticias">
                                    <h5 className="card-title card-title-noticias text-uppercase"> <strong>{noticias.titulo}</strong></h5>
                                    <p className="card-text">{noticias.descripcion.slice(0,30)}...</p>
                                    <Link to={"noticia/"+noticias._id} className="text-reset"><kbd className="ver-mas-noticias text-lowercase mr-5">Ver mas</kbd></Link>
                                    <kbd className="text-lowercase">{format(noticias.create_at,'es_ES')}</kbd>
                                </div>
                            </div>
                            </div>
                                ))
                               
                            }
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}