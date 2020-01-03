import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';

import React,{Component} from 'react';
export default class Centenario extends Component{
    componentDidMount(){
        document.title = `Rumbo al Centenario - Municipalidad Distrital de Alis`
    }
    render(){
        return(
            <div>
                <Navegacion/>
                    <div className="container">
                        <h1>Alis Rumbo al centenario</h1>
                        <p className="h4">Este es un espacio donde usted Ciudadano Alisino podra colaborar con materiales históricos de nuestro Distrito(Fotos hitóricas, Documentos históricos, Anecdotas, Datos curisos, etc).</p>
                        <form onSubmit=''className="" id="formularionoticia">
                            <div className="form-group">
                                <input type="text" id="titulonoticia" className="form-control" name="titulo" placeholder="Nombres y Apellidos del Colaborador" onChange={this.onInputOnChangeTitulo}/>
                                <span className="alert-danger-munialis" role="alert" id="ibtitulonoticia"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" id="titulonoticia" className="form-control" name="titulo" placeholder="Descripcion de la informacion Brindada" onChange={this.onInputOnChangeTitulo}/>
                                <span className="alert-danger-munialis" role="alert" id="ibtitulonoticia"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1"><i class="fas fa-images fa-2x mr-2" style={{color:"#011D35"}}></i>Seleccione imagenes:</label>
                                <input type="file" onChange='' name="imagen" className="form-control-file" id="exampleFormControlFile1"/>
                                <span className="alert-danger-munialis" role="alert" id="ibfile"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1pdf"><i class="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>Seleccione archivos Formato PDF:</label>
                                <input type="file" onChange='' name="pdf" className="form-control-file" id="exampleFormControlFile1pdf"/>
                            </div>
                            <button className="btn btn-primary" id="enviarnoticia">
                                Enviar
                            </button>
                        </form>
                    </div>
                <Footer/>
            </div>
        )
    }
}