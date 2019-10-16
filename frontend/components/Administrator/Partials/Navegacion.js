import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Createnoticias from '../noticias/Createnoticias';
import Uploadfile from '../Uploadfile';
export default class Navegacion extends Component{

    render(){
        return(
            <div>
                {<Uploadfile/>}
            </div>
        )
    }
}