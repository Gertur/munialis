import React,{Component} from 'react';
import Carousel from './Carousel';
import  Seccionprincipal from './Seccionprincipal';
import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import WOW from 'wow.js/dist/wow'

export default class Index extends Component{
    componentDidMount(){
        new WOW().init();
        document.title = "HOME - Municipalidad Distrital de Alis";
    }
     
    render(){
        return(
            <div>
                <Navegacion/>
                <Carousel/>
                <Seccionprincipal/>
                <Footer/>
            </div>
        )
    }
} 