import React,{Component} from 'react';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';
export default class Municipalidad extends Component{
    componentDidMount(){
        document.title = "Saludo del Alcalde - Municipalidad Distrital de Alis";
    }
    render(){
        return(
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="saludo-alcalde p-2">SALUDO DEL ALCALDE</h4>
                                </div>
                                <div className="col-12 mt-2">
                                    <img src="./img/saludo-alcalde.jpg" className="img-fluid" alt="" width="100%" height="auto" alt="Saludo del Alcalde"/>
                                </div>
                                <div className="col-12 mt-2">
                                    <p className="h4 text-justify">Alis te da la bienvenida a travez de este espacio digital, un medio de comunicación de carácter abierto en el que cada dia podrás encontrar información del trabajo que venimos realizando para hacer de nuestro  distrito de Alis un lugar más seguro, ordenado, limpio, inclusivo, transparente y participativo.</p>
                                    <p className="h4 text-justify">Nuestro querido Alis, es un pequeño pueblo dinámico, solidario de gente humilde, turístico por sus diversos atractivos paisajísticos y diversos servicios que cada día el ciudadano alisino se esmera en brindar al turista, es por eso que nuestro compromiso es repotenciar esas características, pero sobre todo que se convierta Alis mucho más acogedora para ti y para los cientos de visitantes que recibimos.</p>
                                    <p className="h4 text-justify">Estamos trabajando con mucha ilusión como una gestión joven con responsabilidad y con absoluta transparencia, esta última será el motor de la presente gestión y que nos impulsará a ofrecerte más y mejores servicios, para optimizar la calidad de vida y la de tu familia.</p>
                                    <p className="h3 font-weight-bold">¡Gracias por visitarnos!</p>
                                    <p className="h4 font-weight-bold font-italic text-right">Econ. Miguel Ángel Espejo Rodriguez</p>
                                    <p className="h4 font-weight-bold font-italic text-right">Alcalde del Distrito de Alis</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-lg-3 d-sm-inline">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}