import React,{Component} from 'react';
import axios from 'axios';
import { async } from 'q';
const URI='http://localhost:3000';

export default class Createnoticias extends Component{
    
    state={
        noticias:[],
        titulo:'',
        descripcion:'',
        imagenPath:null,
    }
    

    async componentDidMount(){
        this.getNoticias();
    }
    getNoticias = async()=>{
        const res = await axios.get(URI+'/api/noticias');
        this.setState({
            noticias:res.data
        })
    }
    onInputOnChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    onChangeInputFile = (e) =>{
        this.setState({
            imagenPath:e.target.files[0]
        })
    }
    onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('imagen',this.state.imagenPath);
        formData.append('titulo',this.state.titulo);
        formData.append('descripcion',this.state.descripcion);
        await axios.post(URI+'/api/noticias',formData);
        this.getNoticias();
        
    }
    deleteNoticia=async(id)=>{
        await axios.delete(URI+'/api/noticias/'+id);
        this.getNoticias();
    }   
    render(){
        return(
            <div className="container mt-2">
                <div className="row">
                    <div className="col-6">
                        <h2>Agregar nueva noticia</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input className="form-control" name="titulo" onChange={this.onInputOnChange} type="text" placeholder="Titulo de la Noticia"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="descripcion" onChange={this.onInputOnChange} id="" cols="30" rows="10" placeholder="Descripcion de la noticia"></textarea>
                            </div>
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" onChange={this.onChangeInputFile} className="custom-file-input" name="imagen"/>
                                    <label htmlFor="image" className="custom-file-label">Escoge una imagen</label>
                                </div>
                            </div>
                            <button className="btn btn-primary">
                                Guardar Noticia
                            </button>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            
                            {
                                this.state.noticias.map(noticia=>(
                                <div className="col-6" key={noticia._id}>
                                    <div className="card">
                                        <img src={URI+noticia.imagenPath} className="card-img-top" height="150px" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">{noticia.titulo}</h5>
                                            <p className="card-text">{noticia.descripcion}</p>
                                            <a href="#" className="btn btn-danger" onClick={()=>this.deleteNoticia(noticia._id)}>Eliminar</a>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
