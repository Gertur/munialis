import React,{Component} from 'react';
import axios from 'axios';
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
export default class Noticias extends Component{
    state={
        noticialast:[],
        noticia:[],
        ndenoticia:null
    }
    async componentDidMount(){
        const res = await axios.get(URI+'/api/noticias/last/lastnoticia');
        this.setState({
            noticialast:res.data
        })
        const resnoticia = await axios.get(URI+'/api/noticias');
        this.setState({
            noticia:resnoticia.data
        })
    }

    render(){
        
        return(
            <div>
                <div id="carousel-noticias" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        {
                        this.state.noticialast.map(noticia=>(
                        <div className="carousel-item active" key={noticia._id}>
                            <img src={noticia.imageLocation} className="w-100" alt="" height="400px"/>
                            <Link to={"noticia/"+noticia._id}>
                            <div className="carousel-caption d-none d-md-block descripcion-noticia">
                                <p className="text-uppercase ml-1 mb-0">
                                    {noticia.titulo.slice(0,70)}[...]
                                </p>
                                <p>
                                    {noticia.descripcion.slice(0,30)}...
                                    <kbd className="ver-mas text-lowercase mr-4">Ver mas</kbd>
                                    <kbd className="text-lowercase">{format(noticia.create_at,'es_ES')}</kbd>
                                </p>     
                            </div>
                            </Link>
                        </div>
                            ))
                        }
                        {
                        this.state.noticia.map(noticias=>(
                        <div className="carousel-item" key={noticias._id}>
                            <img src={noticias.imageLocation} className="w-100" alt="" height="400px"/>
                            <Link to={"noticia/"+noticias._id}>
                            <div className="carousel-caption d-none d-md-block descripcion-noticia">
                                <p className="text-uppercase ml-1 mb-0">
                                    {noticias.titulo.slice(0,70)}[...]
                                </p>
                                <p>
                                    {noticias.descripcion.slice(0,30)}...
                                    <kbd className="ver-mas text-lowercase mr-4">Ver mas</kbd>
                                    <kbd className="text-lowercase">{format(noticias.create_at,'es_ES')}</kbd>
                                </p>     
                            </div>
                            </Link>
                        </div>
                            ))
                        }
                    </div>
                    <a href="#carousel-noticias" className="carousel-control-prev" role="button" data-slide="prev">
                        <span aria-hidden="true"><i className="fas fa-angle-double-left"></i></span>
                        <span className="sr-only">Antes</span>
                    </a>
                    <a href="#carousel-noticias" className="carousel-control-next" role="button" data-slide="next">
                        <span aria-hidden="true"><i className="fas fa-angle-double-right"></i></span>
                        <span className="sr-only">Antes</span>
                    </a>
                </div>
            </div>
        )
    }
}