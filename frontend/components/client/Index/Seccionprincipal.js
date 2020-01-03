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
                            <Link to="/" className="col-6 enlaces-directos">
                                <div className="img-enlaces-directos p-4">
                                <img src="./img/educacion.svg" className="img-fluid wow jackInTheBox" alt=""/>
                                </div>
                                <h6 className="text-center"><strong>EDUCACION</strong></h6>
                            </Link>
                        </div>
                        <div className="row d-flex justify-content-between ml-2">
                        <Link to="/" className="col-6 enlaces-directos">
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
                        <Link to="/todas-actividades">
                            <div className="pt-0">
                                <img className="d-block w-100" src="./img/agenda.jpg" alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
                {/**SECCION REDES SOCIALES */}
                <div className="row mt-2">
                    {/**seccion noticias */}
                    <div className="col-8">
                        <h4 className="etiqueta-noticia p-1">Noticias     Alis</h4>
                        <p className="blockquote-footer p-1">
                            <strong>{f.getDate()+' de '+meses[f.getMonth()]+' del '+f.getFullYear()}</strong>
                            <Link className="link-todosnoticias" to="/noticias" >Ver todas las Noticias</Link>
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
                                    <Link to="/turismo" className="footer-noticiatarjeta">
                                        <div className="card-footer text-center">
                                            <h3>Turismo <i className="fas fa-cat ml-3"></i></h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src="./img/cultura-alis.jpg" alt="" className="card-img-top img-fluid"/>
                                    <Link to="/cultura" className="footer-culturatarjeta">
                                        <div className="card-footer text-center">
                                            <h3>Cultura <i className="fas fa-cat ml-3"></i></h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 mt-2">
                                <div className="card">
                                    <img src="./img/desarrollo-social.jpg" alt="" className="card-img-top img-fluid"/>
                                    <Link to="/rumbo_centenario" className="footer-dsocialtarjeta">
                                        <div className="card-footer text-center">
                                            <h5>Rumbo al centenario <i className="fas fa-cat ml-3"></i></h5>
                                        </div>
                                    </Link>
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
                                <div className="d-flex flex-row align-items-center">
                                    <a href="" target="_blank">
                                        <img src="https://seeklogo.com/images/R/reniec-logo-64C752291C-seeklogo.com.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://elperuano.pe/" target="_blank">
                                        <img src="https://busquedas.elperuano.pe/static/img/logo.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.bn.com.pe" target="_blank" width="200px" className="p-2">
                                        <img src="https://www.bn.com.pe/imagenes/logo-banco-nacion.png" alt="" className="d-block"/>
                                    </a>
                                    <a href="https://portal.osce.gob.pe/osce/" target="_blank">
                                        <img src="https://portal.osce.gob.pe/osce/sites/default/files/LOGO%20OSCE%20ok.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="http://www.pcm.gob.pe/inicio/" target="_blank">
                                        <img src="https://plataformaanticorrupcion.pe/wp-content/uploads/2017/07/2-3-1-e1501713201959.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="http://www.contraloria.gob.pe/wps/wcm/connect/cgrnew/as_contraloria/as_portal" target="_blank">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeQzcPH3UBR4icSgjyx34-wJKfr0e41XOaaVidrrc_oWmLFig" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.inei.gob.pe/" target="_blank">
                                        <img src="https://repositoriopncvfs.pe/wp-content/uploads/2018/02/inei.png" alt="" className="d-block w-100"/>
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="20000">
                            <div className="d-flex flex-row align-items-center">
                                    <a href="https://www.sunarp.gob.pe/index.asp" target="_blank">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACICAMAAAAmsyvzAAABLFBMVEX///8yPDcvOTSssK4iLigsNzH/sQD/rwD6+volMSubn50dKiTW2Nfq6+q8v70tNzLIysjrMRgApaX09fRTW1dla2hMVFDi4+NaYl6OwyRGT0rqIgCFioiipqQ9SELqJgB8gn+0t7WNk5D+8/LHycjR09LrLBD719L96udtdHDc3dz+9vXyfG32pJn4urP/3J//zHWv1GmGvwDuVUL0+en6zMf/9+X72dQQIRn1m4///PP/6b7/vET/68rs9dvvXUzxcWLb677/1Yv/89ntQSaR09O+5OTb8/Pzkob/uCjR5q3yiH32r6fm8c7sRDD/4a2Wxze/3YyhzUzzhHTK4p+42X7/xV3/1nyj3NxHu7tpx8fvXEr/xUz/1pKm0F3/vzT/67rh6vbAyNPQ3/LxsgTkAAAQbklEQVR4nO1dC3uayhZFRiIgoBYVo4AwASuoaV4mrWlObNI0aZu+T9P2nJzm3Hv//3+4ewZR8jLNsy2Z9bUGZgYc12zX7L2BkeMYGBgYGBgYGBgYGBgYGBgYfiI6P7sD9wyd/t7cVY8dvHo1uMm+3As8fP28tX/Vg9/Mzi6+ucnepB+d3ttWq7W5dl79u6eArfNqB4uzs7PvPzAzvwzmm6VS63wjf5QDLJxX+2YJGJ/9cDs9Syvmus3mcP7cuXM649yzxdmljyu30rH0oj/stc+vfTQDOJ9xbuXVx1c336d0ozOFb45b3QBsT2vxx812h4HhljC317vsIc8+MwG/Mubmlxtvp6rLaawsLs2+YpxfDeCvtEqt1+KlDnoFfuHSIlPxK2FuCE55Y/MsI19fALw7o2KwSHzx78zIr4Z+qdn41E7Y+FpvGG2c74+vfFgCWbmDzqUSYm/zYWJ3WGo0G326+Sg3M3NeBLSyuHj7XUsrjsecmy2I/PfoJmH8/AiIacp1Mcra9hqlVmNIN7cfATZONWS5q5tBvxtNng8bz4f7D6c0XPnABPwG0P70vNGlW52H7enXKP5cmmV+4bUx3wD1Ls3/SNM374kv/udt9yjtWCtBFFR68iNNn5Gs+Ptnt92j1KPXaG4mE+Udsk1nznWyuzqpGTyD8Oczmz2vi3YyUd6ef9IlHvk4Ato42Ho3ydquvPrILm9eH3OToHN/+W2rsddJREBfcrmZlwnHfOSKD5ilXx9ETPaJqC+3Ezb+MjeTy3052XZl8T3zWa6J9hPiIT5cbjVbz9dATBYWFr68A1t+SagnodCHD5NIk2Rs37PA8zqY29+kGZXOcPn1fj/plK8/Wjic4YhnuPRxnBb/k+QPPzIrvwa6LaImoCtra6dioME2mPjgM/EMF0eU/0FTtkk38XI5dgbuSaNUajamBPh/fASOl8b3BIGsLCUD/q/fdm+zeylEZ7lZ6k6N8AcfQFYmOrKymCD8xbcHD/5iVn459If9yU67Hd89sbo68QL/oCSvfDgt3zsPAC/uoJepQhx0imv93vDv2Dv8cvjP+saY9AGVk++nKBcJ4w/urKupQoebe1tqtBrtKAJaPYT452hjkhYnbuFskvKv9PUFEP6NycoVQLQFvJZSYz+y8Y0ZiH9ebrz5Hrslg+9kAn0ftwcBp5Tr8Ff/KT3+vdEeNpvPO12Svf3079Hh4dHWOzD03MHqYiIt/hHcwtGkKRL9jpwUkfF9Baw1yb0Ue/3lbm88i27/s/D0EblDZXZpZOaDxfdjL4WIyYOdu+9pWtDZhCio2eVO3L6yuvonYfzjykpk5iuTwEf8a2zkDFdBv9HYnD/DKR+8+U5ufFtMzJgv/qI87wLhTMCvgddPzrkHceXV5zeLEydlF2x7h7omOzuM79vCh0TyiojJAyYmt4wVmsqKNJxGPMz/vm1A8ANeShTLfyWMMz25bax8frW7E6VPxG8Pdpiq3D5Wvn6LxWR3l2nKXeDeRDyiruqXFc1bMUE9EfGIu7tfUyosoSY7joNRUY0LFEAYV+tk16cDopIKgx6CLKT5x0fJ8DUXIc1LFCvxAYanaZqeOIOokBJPOTHQxMgjAdd3QGG+3vyn/flQ5ZogCYIgZe3AjQzXKQOCuIFfgb26TzYRbFWxqMMhWSkr1R1vcp4irtQLWQBfdbT4C1ClB3CqVcnks4+BabdKCnSuaJYzUl6yy6Z7vDs7EGvukmGgAX4aBUav8EImAi/YDjW5isTzUi1uUawXeD5fJJtyocBLjhoIhegAqa7Fp8F1ocCPz4NHppsX4EyO7mTIAYRxlKcFVl2ip+ALku2oyf6IX8G2qZGTvOFfKZSVmkQ+eaFA+RrxXIExKEwYr0LNiHHYKphBIRNDiGyfC2sSOZwvCAJPhwJHx+ZJmwDT98jkCeNZOIODBX58CnjPMNmhb7Fpv0hn3IkIGXymEgQVW8gItkUKpzKeqUOlJPASJU1yqID4NQHs1S5Xgko5QyoeRyNBGM/UBWL3QuHxiHH6jrwgSZGdZ6SKkejRThz7gEv+LYU+eWSviMxpWpCtR6I6nXFShy2EbWrN5YhapZa1TTcUOV2xSEUhmgaysc5UAyeoTxjPwByAZVzJUEWT5ITjszs27RdpvJSs1wrkWx7tGPJIlS9gXHKoDLgR5aNjwooWux1ulhgx3cxH2lNFiqoaxIcZMZ51fFBv0XDLZMR5O2nk6RSTGGo5wTgnjkxtOuO8HVErUnnOWvGpxicVyQECJTEbET5xaSLGszhuTeQocRKCna+76SU8svGMgI97xdMZz6K44pQijAaNSJVAD4hsPMEnZVyoTIZHI98UoZw4xVqv16OPsLTJBrnnor3f6+2TxHpnHopohr0PG9Oe4Pp1YUZCKlUs3xjTPp1xKZYApcwnGNdD16xV7Xq54lAbp2pD+OWrifGkjPNJHzwgPcgnhq3XaEQPIPZh42/C78PlRmOZ8NseNhotOhp7ULd3YyzcJUI78sYLUt523BGXUxnn7XFoSr4gI8ZF38nkJXDciYdIxiViPPIOE+9HGOfLSqLEoownHMT9Rqk1JBv9VqlFH+lfW261/qaMd1ul5xHjzVLzh54s+vXgVbNx4CIJlWganM54PWbcqIwZ15EtTVzszDHGJTPxdtQfD5ITpUcZTwSvaWccPBQ7DzFmRJNNeaKMj6V1CuNCzLibiQKf/GNAfmLj2bMZT0aZpxjvNVqxqjQbI8YnqtIsjVSl1fhdGSeKgKsQv0SOMykgTPLVuNqrX8h4WI+cPNNTRVEt2vxUGxeOBZmIMu5PCvrdT126Zt9at9t9Qq78t/e63T1C/Vyv2/1EJ8x5qPuhJ0R/WagoiCJxQhRhMsPHVS4tn8o4oj7JOEFyfOY8xXgmoyVKHDJY+cTkOv9w7n4sdxu51zQhUqF5JzUuFy5iXHckIvyx5erCdB2HEGpCsE++QZMvFKDVeDu85DpPvxf82HHQH8f0ULOLk1E+sdgLGCcenhCMY878BYwnPHQ14E9EQG2yPAVlfC2dvHv12DaNfMyzTNNbNp3NPBojXcR4IWHjRn0yc0pnM87bo+EMg2j3hHO4SdS7M9z8tJ8+0rWMINgWcTfC8thpCPNRfq+CzVomcmOmMh4JkkB1XNSqhYl3SFyYs2ycL9RNpKEKzZtnJCsRAA2JF0KEvP+22Xz7e8aVU6CR5B2fzZZrdp58+EKdFteisEiQJAE01r5w5vSpcyhlAjOw8zxvX8g48SSz2Wx0DaNw7JpEr7v5nN552yuBX05svL33ZK2dliv7YRDbXPTZIyXhfHt80YG3ZTKRTmdcxyPfEqLOjBTQvMr5jPP1WiYRLknHAqL9/Xa7T7XkdRzk9J83zl5O7reEiiVhTG62HLttbj26bJMp8HJYEXg+ClFkCOMLScZ5PksjINWMT8PnA8MhV+3oqaABf5rxmiYL8ZAKWZwkHIKdzX169+3cXqkRRTvzTVB2ojOd+X4K/Ea9GGTzEiD7uGpNPrvvZPPZbP5x2RPVwLbtKBVowZZdHjNOKjJRXkXXqo+zcJK8bamcQ5rRIaqTFjjxdhHjoehXyPnhnQMvmbfs7LVKzeVIvNvt+SdrtAwYf01LWsvDT7dFxF1C1WTTlF3juFTqHrI0WiYS0DJxsnlqVwwRxpY/9YCYcYXcIlNEllU8cfNEn6yTcCIn2F5utpqRsTdazdJ1P+19w5jxMzHYf9tq0QQtNzcW7k7/yXCZCs0QvgCv76CTqcJUxgdb6/1PkTl3usvzicky+jWKRqvU6J95JMO5mMb4YCF3tD4XLe8032y1hiefX9nbbDVT47PcFaYwDoTP5F6uRztvQc+fn3RMOu21flr88jvDFMa3csD4TLTKZ69RYgJyMziP8cH6P/8e5nJHo2VV+5ulxusU+N6/AM5mfLANirK+cfRyvI5tZ7977m83MVwG5E5PoXyC8cEjsjrZIV1KiOzSP/fkssRUXPqm/ghiMk/l2tVqPQhPNNki61DkRpMmtxBPn2mEiKvH8kijUucsbkWkHds34hxr6KhwyLjcs7jj7ZzEzqkglGL1aS738t/RzgHMoOml3HJEXxUpEdSCyYuocxbdDWUYDFWHSp3kB1VgPKqnL6KqgfkS8oqSKer10cGqGGpREz164Yzgol5w3LujrXiFlQNi7zO3+Jl/LrTA1zlN5ZCCZKyJviX7qox1WbdkM7RqSHdlpHoWRqKPZcczLEtTkWwqOsKyqumuhYDyYgW7wLhiyYZuYdfXRBdqVSzLumHJyo8wzo2XUd1+CpJ+lF4b113HNHDIBVqgKYFmYqvmBxpXVQPNMn1H8WrIQdj0Tc/RfMc1MQrcwHNNz1Q8BQPjxO0oOoajVIHxwHIdxdew74SWGVbCQDEsB4c/wvgE20dpJpwjmW2EDWDcVDkTO5aLPKwD41j1HRXrQLDlY0+UUSByMnIshDSsq46GQJ+xj4tOkTDOIdPmZFeWMZR72LW4sGZgDvuWhWTlhxkfkDU+uY3DNBMOFlzzZROXvYpp1UKMkRlOGA9QWEW4KAPjRdO0qp7sIFPBquooFcvxsetoZcJ4wInmYzFADlbKlgwjWLEqKCSMBzI2f5hx8BEPJ4s0DxZSSbyoWSGna54C9CGYIzUk6qHIeWIo6j4HiqxaRS5UyT/NhRcPwcwoij5noKKuwK4Brp/qkxw7FPkGFyJFDTkV+RxUh7qOiqHuX9wPjqoJKPg/8e5gYeIuphKhqV7c6FaxekDWaD4cLf++StJaKXYSiY3+9IUe/oXAcytWFRoTvTz94zUpwi+QBT043B4ve0g1JtWE/wo4tqr+9lFqCTfkkZ7oSZ9C9FwtEf7r0bP2p74IGm2leiIil+6Lll68fodGvG+vTm/2+8IwY8aTjz+pjmxVJgknwyITq148SXkG4cDgXJezSM5Fw+GJnMrlMVg/mPrjy789NAuC+qLlkhRIDcJGS9c1WSGBkaEHRQMB00UZaaoPxRqqWRxCqg+RP4T/JOVqc0bgeboRImwh3cOiR5rr5Dxi1OKS2FiYyW3d+Kf8heA5EP94OESIMK6aGkQ4DhUKJwiQgYs+7HsIYiOtpvjQWrc1L4BQ0nWKRHTqTmBBAOQhVPFlS8OqE0Jz+G+ZMBSns5IX4R35UYlUuyiyxoVYLjsVmaxC4cNrNXTKHrXxsq/UgiCwQCiAccOsuQbWQeyRDErkOTUi2baocxBTFhEMWYgRjuJ/D5OaoHZ5UV8nCwen2shdx7BMzVTJIjN6zXB8L1AVFBAbV5WKYvqGrziKC4wrvh/4jgKM+4HhYsVwyURrc+S5ZwODjatIJjZO0l8GHOLoPjIv73KCH/70rJ8CTg1EZMqaqJkkEy5anGeaqoFNnyQVdQ4pCsZFsFironoKNsEjMUUXtN+UVdglKi2Tk8A5fKBXVkNNd6EWq0X4b5j4Cjq+fbB17395yUCehS9udlNIrU/449A16skw3CHuPgEw+HJw5+95nzF4Bx7Lvz+7F/cIA3IxP3fABP3uQDO1R2kOg341bD/N5b6s3nsn8S7x6CjdySwGBgYGBgYGBgYGBgYGBgaGu4Dyn//87C7cM/z3f4xxBgYGBgYGBgaGn47/A0BT2g59wzW0AAAAAElFTkSuQmCC" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.mef.gob.pe/es/" target="_blank">
                                        <img src="http://prointsac.com.pe/wp-content/uploads/2019/02/mef.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.pronabec.gob.pe/beca18/" target="_blank">
                                        <img src="https://dbdiseno.com/wp-content/uploads/2016/05/beca18.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.indeci.gob.pe/" target="_blank">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdU5_BpCz9TOspVeIKn_-KSUN-luyBEW2HxF47V7HsjbTwqbbqw" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="http://sgp.pcm.gob.pe/" target="_blank">
                                        <img src="data:image/jpeg;base64,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" alt="" target="_blank" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.mef.gob.pe/es/portal-de-transparencia-economica/270-transf-a-gobiernos-nacional-regionales-y-locales/457-consulta-de-transferencias-a-los-gobiernos-nacional" target="_blank">
                                        <img src="http://www.municiudadnueva.gob.pe/webmdcn/img/icoco8.png" alt="" className="d-block w-100"/>
                                    </a>
                                    <a href="https://www.qaliwarma.gob.pe/" target="_blank">
                                        <img src="https://3.bp.blogspot.com/-03EL4Mhb7lw/VfHFtApZouI/AAAAAAAAAZo/I1EJzEogbh8/s1600/173%2BQALIWARMA.jpg" alt="" className="d-block w-100"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev prev-color-interes" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" style={{color:"black"}} aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next next-color-interes" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/**SECCION FOOTER */}
            </div>
        )
    }
}