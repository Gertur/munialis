import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Createnoticias from '../noticias/Createnoticias';

export default class Navegacion extends Component{

    render(){
        return(
            <div>
                {<Createnoticias/>}
            </div>
        )
    }
}