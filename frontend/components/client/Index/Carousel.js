import React,{Component} from 'react';
import $ from 'jquery';
export default class Carousel extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel carousel-fade slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-portada">
                        <img className="carousel-item-aver w-100" src="img/slide1.jpg" alt="Firts slide"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft delay-1s">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">Laguna Silacocha</h3>
                            <h5 className="animated bounceInRight delay-2s">Recurso natural de nuestro distrito de Alis</h5>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-portada">
                        <img className="carousel-item-aver w-100 d-block" src="img/slide2.jpg" alt="Second slide" height="auto"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">Alis</h3>
                            <h5 className="animated bounceInRight delay-2s">Vista panoramica de nuestro distrito de Alis</h5>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-portada">
                        <img className="carousel-item-aver w-100 d-block" src="img/slide3.jpg" alt="Third slide" height="auto"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">Alis</h3>
                            <h5 className="animated bounceInRight delay-2s">Plaza principal de nuestro distrito de Alis</h5>
                        </div>
                    </div>
                    <a className="carousel-control-prev iconos-personalizados" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fas fa-arrow-circle-left iconos-personalizados"></i>
                        <span className="sr-only">Prev</span>
                    </a>
                    <a className="carousel-control-next iconos-personalizados" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fas fa-arrow-circle-right iconos-personalizados"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}