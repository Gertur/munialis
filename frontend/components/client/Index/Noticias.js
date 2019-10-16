import React,{Component} from 'react';
import axios from 'axios';
const URI='http://localhost:3000';

export default class Noticias extends Component{
    state={
        noticialast:[],
        noticia:[]
    }
    async componentDidMount(){
        const res = await axios.get(URI+'/api/noticias/last');
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
                            this.state.noticialast.map(noticialast=>(
                                <div className="carousel-item active" key={noticialast._id}>
                                <img src={URI+noticialast.imagenPath} className="w-100" alt="" height="400px"/>
                                <a href="">
                                    <div className="carousel-caption d-none d-md-block descripcion-noticia">
                                        <p className="text-uppercase ml-1 mb-0">
                                            {noticialast.titulo}
                                        </p>
                                        <p>
                                            {noticialast.descripcion.slice(0,30)}...
                                            <kbd className="ver-mas text-lowercase mr-auto">Ver mas</kbd>
                                        </p>     
                                    </div>
                                </a>
                            </div>
                            ))
                        }
                        {
                            this.state.noticia.map(noticia=>(
                            <div className="carousel-item" key={noticia._id}>
                            <img src={URI+noticia.imagenPath} className="w-100" alt="" height="400px"/>
                            <a href="">
                                <div className="carousel-caption d-none d-md-block descripcion-noticia">
                                    <p className="text-uppercase ml-1 mb-0">
                                        {noticia.titulo}
                                    </p>
                                    <p>
                                    {noticia.descripcion.slice(0,60)}...
                                        <kbd className="ver-mas text-lowercase mr-auto">Ver mas</kbd>
                                    </p>    
                                </div>
                            </a>
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