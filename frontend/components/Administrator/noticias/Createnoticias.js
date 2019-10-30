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
        selectedFile:null
    }
    onChangefileupload = (e) => {
		this.setState({
			selectedFile: e.target.files[0]
		})
		console.log(this.state.selectedFile)
	}
   
    onInputOnChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   
    onSubmit = async e =>{
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('profileImage',this.state.selectedFile,this.state.selectedFile.name);
        // formData.append('titulo',this.state.titulo);
        // formData.append('descripcion',this.state.descripcion);
        const newNoticia= {
            titulo:this.state.titulo,
            descripcion:this.state.descripcion,
            profileImage:this.state.selectedFile
        }
        await axios.post(URI+'/api/noticias',newNoticia,{
			headers: {
				'accept': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			   }});
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
                                <input type="file" onChange={this.onChangefileupload}/>   
                            </div>
                            <button className="btn btn-primary">
                                Guardar Noticia
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
