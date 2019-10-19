import React, {Component} from 'react';
import Noticias from './Noticias';
import Footer from '../Partials/Footer';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom';
import Youtube from '../Partials/Youtube';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default class Seccionprincipal extends Component{

    render(){
        const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        const f= new Date();
        return(
            <div className="container">
                <div className="row mt-2">
                    <div className="col-4">
                        <Link to="/Municipalidad" className="seccion-portada-alcalde">
                            <div className="row-12">
                                <div className="col-12 pr-0 pl-0">
                                    <img className="d-block w-100" src="./img/alcalde.jpg" alt="Alcalde Miguel Espejo Rodriguez" height="220px"/>
                                </div>
                                <div className="col-12 text-alcalde-portada pt-2 pb-2">
                                    <h5 className="text-center">Alcalde Miguel Angel Espejo Rodriguez</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/**HOBRAS, TURISMO, SALUD, EDUCACION */}
                    <div className="col-4">
                        <div className="row d-flex justify-content-between ml-2">
                        <Link to="/obras" className="col-6 enlaces-directos">
                                <div className="img-enlaces-directos p-4">
                                <img src="./img/hobras.svg" className="img-fluid wow jackInTheBox" alt=""/>
                                </div>  
                                <h6 className="ml-4"><strong>OBRAS</strong></h6>
                                
                            </Link>
                            <Link to="/educacion" className="col-6 enlaces-directos">
                                <div className="img-enlaces-directos p-4">
                                <img src="./img/educacion.svg" className="img-fluid wow jackInTheBox" alt=""/>
                                </div>
                                <h6 className="text-center"><strong>EDUCACION</strong></h6>
                            </Link>
                        </div>
                        <div className="row d-flex justify-content-between ml-2">
                        <Link to="/salud" className="col-6 enlaces-directos">
                                <div className="img-enlaces-directos p-4">
                                <img src="./img/salud.svg" className="img-fluid wow jackInTheBox" alt=""/>
                                </div>
                                
                                <h6 className="text-center"><strong>SALUD</strong></h6>
                            </Link>
                            <Link to="/turismo" className="col-6 enlaces-directos">
                                <div className="img-enlaces-directos p-4">
                                <img src="./img/turismo.svg" className="img-fluid wow jackInTheBox" alt=""/>
                                </div>
                                
                                <h6 className="text-center"><strong>TURISMO</strong></h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <a href="">
                            <div className="pt-0">
                                <img className="d-block w-100" src="./img/agenda.jpg" alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
                {/**SECCION REDES SOCIALES */}
                <div className="row mt-2">
                    {/**seccion noticias */}
                    <div className="col-8">
                        <h4 className="etiqueta-noticia p-1">Noticias     Alis</h4>
                        <p className="blockquote-footer p-1">
                            <strong>{f.getDate()+' de '+meses[f.getMonth()]+' del '+f.getFullYear()}</strong>
                            <a className="link-todosnoticias" href="" >Ver todas las Noticias</a>
                        </p>
                        {<Noticias/>}
                    </div>
                    {/**seccion redes sociales*/}
                    <div className="col-4 ml-0">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a href="#tab1" className="nav-link active tab-facebook" data-toggle="tab">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a href="#tab2" className="nav-link tab-youtube" data-toggle="tab">Youtube</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tab1" role="tabpanel">
                                <div id="fb-root">
                                    <div className="fb-page" data-href="https://www.facebook.com/Municipalidad-Distrital-de-Alis-315552995741930/" data-tabs="timeline" data-width="600px" data-height="446px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Municipalidad-Distrital-de-Alis-315552995741930/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Municipalidad-Distrital-de-Alis-315552995741930/">Municipalidad Distrital de Alis</a></blockquote></div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab2" role="tabpanel" aria-expanded="false">
                                {<Youtube/>}
                            </div>
                        </div>
                    </div>
                </div>

                {/**SECCION AREAS TEMATICAS */}
                <div className="row mt-2">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="etiqueta-noticia p-1 h4">Area Temáticas</h4>
                            </div>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src="./img/turismo-alis.jpg" alt="" className="card-img-top img-fluid"/>
                                    <a href="" className="footer-noticiatarjeta">
                                        <div className="card-footer text-center">
                                            <h3>Turismo <i className="fas fa-cat ml-3"></i></h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src="./img/cultura-alis.jpg" alt="" className="card-img-top img-fluid"/>
                                    <a href="" className="footer-culturatarjeta">
                                        <div className="card-footer text-center">
                                            <h3>Cultura <i className="fas fa-cat ml-3"></i></h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src="./img/desarrollo-social.jpg" alt="" className="card-img-top img-fluid"/>
                                    <a href="" className="footer-dsocialtarjeta">
                                        <div className="card-footer text-center">
                                            <h5>Rumbo al centenario <i className="fas fa-cat ml-3"></i></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a href="#tab1" className="nav-link active tab-ubicacion">Ubicación</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="tab1">
                            <div className="tab-pane active">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31188.95638951966!2d-75.78886809891428!3d-12.274005326477496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910f036d79c2fff7%3A0xdf535e537800dba0!2sAlis%2015786!5e0!3m2!1ses!2spe!4v1571328708002!5m2!1ses!2spe" width="100%" height="230px" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <h4 className="etiqueta-noticia p-1 h4">Enlaces de interés</h4>
                    </div>
                    <div className="carousel slide ml-3" data-ride="carousel" id="carouselExampleControls">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="6000">
                                <div className="d-flex flex-row">
                                    <a href="">
                                        <img src="https://seeklogo.com/images/R/reniec-logo-64C752291C-seeklogo.com.png" alt="" width="300px" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://busquedas.elperuano.pe/static/img/logo.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://www.bn.com.pe/imagenes/logo-banco-nacion.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://portal.osce.gob.pe/osce/sites/default/files/LOGO%20OSCE%20ok.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://plataformaanticorrupcion.pe/wp-content/uploads/2017/07/2-3-1-e1501713201959.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeQzcPH3UBR4icSgjyx34-wJKfr0e41XOaaVidrrc_oWmLFig" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://repositoriopncvfs.pe/wp-content/uploads/2018/02/inei.png" alt="" className="d-block w-100"/>
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="20000">
                            <div className="d-flex flex-row">
                                    <a href="">
                                        <img src="https://seeklogo.com/images/R/reniec-logo-64C752291C-seeklogo.com.png" alt="" width="300px" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://busquedas.elperuano.pe/static/img/logo.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://www.bn.com.pe/imagenes/logo-banco-nacion.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://portal.osce.gob.pe/osce/sites/default/files/LOGO%20OSCE%20ok.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://plataformaanticorrupcion.pe/wp-content/uploads/2017/07/2-3-1-e1501713201959.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeQzcPH3UBR4icSgjyx34-wJKfr0e41XOaaVidrrc_oWmLFig" alt="" className="d-block w-100"/>
                                    </a>
                                    
                                    <a href="">
                                        <img src="https://repositoriopncvfs.pe/wp-content/uploads/2018/02/inei.png" alt="" className="d-block w-100"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev prev-color-interes" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" style={{color:"black"}} aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next next-color-interes" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/**SECCION FOOTER */}
            </div>
        )
    }
}