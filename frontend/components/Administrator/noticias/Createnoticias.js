import React,{Component} from 'react';
import axios from 'axios';
import {async} from 'q';
import {Link} from 'react-router-dom';
const URI='http://localhost:3000';
export default class Createnoticias extends Component{
    state={
        noticias:[],
        imagenseleccionada:null,
        titulo:'',
        descripcion:'',
        segundadescripcion:'',
        imagenombre:'',
        errortitulo:null,
        errordescripcion:null,
        errorsegundadescripcion:null,
        errorfile:null,
        pdfseleccionado:null
    }
    async componentDidMount(){
        this.getNoticias();
    }
    async getNoticias(){
        const resnoticia = await axios.get(URI+'/api/noticias');
        this.setState({
            noticias:resnoticia.data
        })
    }
    onChangefileupload = async(e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        //console.log(file.size);
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
        }else{
            ibfile.innerHTML="";    
            reader.readAsDataURL(file);
            reader.onloadend = () =>{
                this.setState({
                    imagenseleccionada:reader.result,
                    imagenombre:file.name,
                    errorfile:true
                })
            }
            
        }
        
    }
    onChangefileuploadpdf = e =>{
        const filepdf = e.target.files[0];
        const readerdpf = new FileReader();
        readerdpf.readAsDataURL(filepdf);
        readerdpf.onloadend = ()=>{
            this.setState({
                pdfseleccionado:readerdpf.result
            })
            console.log(this.state.pdfseleccionado);
        }
    }
    onInputOnChangeTitulo = (e) =>{
        const titulo = e.target.value;
        if(titulo === ""){
            ibtitulonoticia.innerHTML="La noticia deve contener un título.";
            this.setState({
                errortitulo:false
            })
            
        }else{
            ibtitulonoticia.innerHTML ="";
            this.setState({
                errortitulo:true,
                titulo:e.target.value
            })
        }
    }
    onInputOnChangeDescripcion = (e) =>{
        const descripcion = e.target.value;
        if(descripcion === ""){
            ibdescripcion.innerHTML="La noticia deve contener una descripción.";
            this.setState({
                errordescripcion:false
            })
        }else{
            ibdescripcion.innerHTML ="";
            this.setState({
                errordescripcion:true,
                descripcion:e.target.value
            })
        }
    }
    onInputOnChangeSegundaDescripcion = (e) =>{
        const segundadescripcion = e.target.value;
        if(segundadescripcion === ""){
            ibsegundadescripcion.innerHTML="La noticia deve contener una segunda descripción.";
            this.setState({
                errorsegundadescripcion:false
            })
        }else{
            ibsegundadescripcion.innerHTML ="";
            this.setState({
                errorsegundadescripcion:true,
                segundadescripcion:e.target.value
            })
        }
    }
    onSubmit = async e =>{
        e.preventDefault();
        if(!this.state.errortitulo){
            ibtitulonoticia.innerHTML="La noticia deve contener un título correcto.";
            if(!this.state.errordescripcion){
                ibdescripcion.innerHTML="La noticia deve contener una descripción correcta.";
            }if(!this.state.errorsegundadescripcion){
                ibsegundadescripcion.innerHTML="La noticia deve contener un segunda descripción correcta.";
            }if(!this.state.errorfile){
                ibfile.innerHTML="La noticia deve contener una imagen correcta.";
            }
        }else if(!this.state.errordescripcion){
            ibdescripcion.innerHTML="La noticia deve contener una descripción correcta.";
            if(!this.state.errortitulo){
                ibtitulonoticia.innerHTML="La noticia deve contener un título correcto.";
            }if(!this.state.errorsegundadescripcion){
                ibsegundadescripcion.innerHTML="La noticia deve contener un segunda descripción correcta."
            }if(!this.state.errorfile){
                ibfile.innerHTML="La noticia deve contener una imagen correcta.";
            }
        }else if(!this.state.errorsegundadescripcion){
            ibsegundadescripcion.innerHTML="La noticia deve contener un segunda descripción correcta."
            if(!this.state.errortitulo){
                ibtitulonoticia.innerHTML="La noticia deve contener un título correcto.";
            }if(!this.state.errordescripcion){
                ibdescripcion.innerHTML="La noticia deve contener una descripción correcta.";
            }
            if(!this.state.errorfile){
                ibfile.innerHTML="La noticia deve contener una imagen correcta."; 
            }
        }else if(!this.state.errorfile){
            ibfile.innerHTML="La noticia deve contener una imagen correcta.";
            if(!this.state.errortitulo){
                ibtitulonoticia.innerHTML="La noticia deve contener un título correcto.";
            }if(!this.state.errordescripcion){
                ibdescripcion.innerHTML="La noticia deve contener una descripción correcta.";
            }if(!this.state.errorsegundadescripcion){
                ibsegundadescripcion.innerHTML="La noticia deve contener un segunda descripción correcta.";}
        }else{     
            await axios.post('http://localhost:3000/api/noticias',{'imagen':this.state.imagenseleccionada,
            'titulo':this.state.titulo,
            'descripcion':this.state.descripcion,
            'segundadescripcion':this.state.descripcion,
            'pdf':this.state.pdfseleccionado})
            await this.getNoticias();
        }
        

    }
    deleteNoticia = async(id)=>{
        await axios.delete(URI+'/api/noticias/'+id);
        this.getNoticias();
    }
    render(){
       return(
            <div>
                <div className="row mt-2">
                    <div className="col-8">
                        <h2>Registrar una nueva Noticia</h2>
                        <form onSubmit={this.onSubmit} className="card-body" id="formularionoticia">
                            <div className="form-group">
                                <input type="text" id="titulonoticia" className="form-control" name="titulo" placeholder="TITULO DE LA NOTICIA" onChange={this.onInputOnChangeTitulo}/>
                                <span className="alert-danger-munialis" role="alert" id="ibtitulonoticia"></span>
                            </div>
                            <div className="form-group d-flex">
                                <div>
                                    <textarea name="descripcion" cols="41" rows="12" placeholder="1RA DESCRIPCION DE LA NOTICIA" onChange={this.onInputOnChangeDescripcion} className="mr-3"></textarea><br/>
                                    <span className="alert-danger-munialis" role="alert" id="ibdescripcion"></span>
                                </div>
                                <div>
                                    <textarea name="segundadescripcion"cols="41" rows="12" placeholder="2dA DESCRIPCION DE LA NOTICIA" onChange={this.onInputOnChangeSegundaDescripcion}></textarea><br/>
                                    <span className="alert-danger-munialis" role="alert" id="ibsegundadescripcion"></span>
                                </div>    
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Seleccione una imagen</label>
                                <input type="file" onChange={this.onChangefileupload} name="imagen" className="form-control-file" id="exampleFormControlFile1"/>
                                <span className="alert-danger-munialis" role="alert" id="ibfile"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1pdf">Seleccione un archivo PDF</label>
                                <input type="file" onChange={this.onChangefileuploadpdf} name="pdf" className="form-control-file" id="exampleFormControlFile1pdf"/>
                            </div>
                            <button className="btn btn-primary" id="enviarnoticia">
                                Guardar Noticias
                            </button>
                        </form>
                    </div>
                    <div className="col-4">
                        <h5><strong>Todas las Noticias</strong></h5>
                        {
                            this.state.noticias.map(noticia=>(
                                <div className="card-body" key={noticia._id}>
                                    <h5 className="card-title text-lowercase">{noticia.titulo}</h5>
                                    <p className="card-text">{noticia.descripcion.slice(0,70)}</p>
                                    <button className="btn btn-danger btn-sm" onClick={()=>this.deleteNoticia(noticia._id)}>Eliminar</button>
                                </div>
                            ))
                        }
                    </div>
                </div>              
            </div>
        )
    }
}