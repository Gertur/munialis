import React, {Component} from 'react';
import Noticias from './Noticias';
import Footer from '../Partials/Footer';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default class Seccionprincipal extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
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
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat commodi odio, numquam, repellendus ex laboriosam provident eum dolorem, reiciendis at dicta eos distinctio voluptatum! Reiciendis nulla nobis aspernatur dolore?</h2>
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
                                <a href="" className="nav-link active">ubicación</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="map" width="400px" height="500px">
                            <GoogleMapReact
                                bootstrapURLKeys={"AIzaSyC3Wn3l_CTFv7zCUVpRs1N9vqrA7AKJEQ8"}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
                {/**SECCION FOOTER */}
            </div>
        )
    }
}