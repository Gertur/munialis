import React,{Component} from 'react';
import axios from 'axios';
const URI='http://localhost:3000';

export default class Noticias extends Component{
    // state={
    //     noticialast:[],
    //     noticia:[]
    // }
    // async componentDidMount(){
    //     const res = await axios.get(URI+'/api/noticias/last');
    //     this.setState({
    //         noticialast:res.data
    //     })
    //     const resnoticia = await axios.get(URI+'/api/noticias');
    //     this.setState({
    //         noticia:resnoticia.data
    //     })
    // }
    render(){
        return(
            <div>
                <div id="carousel-noticias" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="/img/vision.jpg" className="w-100" alt="" height="400px"/>
                            <a href="">
                                <div className="carousel-caption d-none d-md-block descripcion-noticia">
                                    <p className="text-uppercase ml-1 mb-0">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <p>
                                        {/* {noticialast.descripcion.slice(0,30)}... */}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque?
                                        <kbd className="ver-mas text-lowercase mr-auto">Ver mas</kbd>
                                    </p>     
                                </div>
                            </a>
                        </div>
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