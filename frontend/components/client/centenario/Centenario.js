import Navegacion from '../Partials/Navegacion';
import Footer from '../Partials/Footer';
import axios from 'axios';

import React,{Component, PropTypes } from 'react';
const URI='http://localhost:3000';

export default class Centenario extends Component{
    state={

        data:{
            images:[],
            file:[],
        }
    }
    onChangefileupload=async(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        if(file === null){
            ibfile.innerHTML="Seleccione una imagen para la noticia.";
            await this.setState({
                errorfile:false
            })
        }if(file.size >= 2000000){
            ibfile.innerHTML="La imagen no puede exceder el tamaño de 2MB.";
            await this.setState({
                errorfile:false
            })
        }

        reader.readAsDataURL(file)
        reader.onloadend=()=>{

            this.setState((state)=>{
                state.data.images.push({
                    name:file.name,
                    image:reader.result
                });
                return {
                    "data.images":state.data.images,
                }
            })
        }
    }
    onChangefileuploadPdf=async(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        if(file === null){
            ibfile.innerHTML="Seleccione una imagen para la noticia.";
            await this.setState({
                errorfile:false
            })
        }if(file.size >= 2000000){
            ibfile.innerHTML="La imagen no puede exceder el tamaño de 2MB.";
            await this.setState({
                errorfile:false
            })
        }

        reader.readAsDataURL(file)
        reader.onloadend=()=>{

            this.setState((state)=>{
                state.data.file.push({
                    name:file.name,
                    image:reader.result
                });
                return {
                    "data.file":state.data.images,
                }
            })
        }
    }
    removeImg(i){
        this.setState((state)=>{
            state.data.images.splice(i,1);
            return {
                "data.images":state.data.images,
            }
        })
    }
    onUploadImg(){
        exampleFormControlFile1.click()
    }
    componentDidMount(){
        document.title = `Rumbo al Centenario - Municipalidad Distrital de Alis`
    }
    onSubmit=async (e)=>{
        console.log("=========0");
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <Navegacion/>
                    <div className="container">
                        <h1>Alis Rumbo al centenario</h1>
                        <p className="h4">Este es un espacio donde usted Ciudadano Alisino podra colaborar con materiales históricos de nuestro Distrito(Fotos hitóricas, Documentos históricos, Anecdotas, Datos curisos, etc).</p>
                        <form onSubmit={this.onSubmit} className="" id="formularionoticia">
                            <div className="form-group">
                                <input type="text" id="titulonoticia" className="form-control" name="titulo" placeholder="Nombres y Apellidos del Colaborador" onChange={this.onInputOnChangeTitulo}/>
                                <span className="alert-danger-munialis" role="alert" id="ibtitulonoticia"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" id="titulonoticia" className="form-control" name="titulo" placeholder="Descripcion de la informacion Brindada" onChange={this.onInputOnChangeTitulo}/>
                                <span className="alert-danger-munialis" role="alert" id="ibtitulonoticia"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1"><i className="fas fa-images fa-2x mr-2" style={{color:"#011D35"}}></i>Seleccione imagenes:</label>
                                <input style={{display: "none"}} onChange={this.onChangefileupload} type="file" name="imagen" className="form-control-file" id="exampleFormControlFile1" ref="uploadImg"/>
                                <span className="alert-danger-munialis" role="alert" id="ibfile"></span>
                            </div>
                            <div className="img-container">
                                
                                <div className="img-content">
                                    <div className="img-upload"  onClick={this.onUploadImg}>
                                        <i className="fas fa-plus fa-2x mr-2" style={{color:"#011D35"}}></i>
                                    </div>
                                    {
                                        this.state.data.images.map((img,i)=>(
                                            <div key={i+1} className="img-view" onClick={()=>this.removeImg(i)}>
                                                <i className="fas fa-times fa-2x mr-2" ></i>
                                                <img title={img.name} src={img.image}/>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                            </div>


                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1pdf"><i className="fas fa-file-pdf fa-2x mr-2" style={{color:"#011D35"}}></i>Seleccione archivos Formato PDF:</label>
                                <input type="file" onChange={this.onChangefileuploadPdf} name="pdf" className="form-control-file" id="exampleFormControlFile1pdf"/>
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