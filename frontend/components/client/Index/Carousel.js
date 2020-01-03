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
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-portada">
                        <img className="carousel-item-aver w-100" src="img/slide1.jpg" alt="Firts slide"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft delay-1s">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">CIAM - Alis</h3>
                            <h5 className="animated bounceInRight delay-2s">Nuestro Alcalde junto a nuestros Adultos Mayores.</h5>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-portada">
                        <img className="carousel-item-aver w-100 d-block" src="img/slide2.jpg" alt="Second slide" height="auto"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">Flora y Fauna</h3>
                            <h5 className="animated bounceInRight delay-2s">Alis un pueblo con mucha diversidad natural.</h5>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-portada">
                        <img className="carousel-item-aver w-100 d-block" src="img/slide3.jpg" alt="Third slide" height="auto"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s h4">Laguna Silacocha - Catarata "Caida del Angel"</h3>
                            <h5 className="animated bounceInRight delay-2s">Recursos Turísticos del Distrito de Alis.</h5>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-portada">
                        <img className="carousel-item-aver w-100 d-block" src="img/slide4.jpg" alt="Third slide" height="auto"/>
                        <div className="carousel-caption d-none d-md-block carousel-text-box animated zoomInLeft">
                            <h3 className="animated bounceInRight rotateOutDownLeft delay-5s">Plan de Desarrollo Local Concertado</h3>
                            <h6 className="animated bounceInRight delay-2s">Ciudadanos y Autoridades posterior a una reunión preocupados por el PDLC del Distrito de Alis.</h6>
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