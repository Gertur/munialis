import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class Uploadfile extends Component{
    state ={
		selectedFile: null
	}
	onChangefileupload = (e) => {
		this.setState({
			selectedFile: e.target.files[0]
		})
		console.log(this.state.selectedFile)
	}
	singleFileUpload = () => {
		const data = new FormData();
		data.append('profileImage',this.state.selectedFile,this.state.selectedFile.name);
		axios.post('http://localhost:3000/api/profile', data,{
			headers: {
				'accept': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			   }
		})
	}
    render(){
        return(
            <div className="container">
				<div className="card">
					<div className="card-header">
						Subir Imagen
					</div>
					<div className="card-body">
						<p>Seleccione una imagen</p>
						<input type="file" onChange={this.onChangefileupload}/>
						<div className="mt-4">
							<button className="btn btn-info" onClick={this.singleFileUpload}>
								Subir!
							</button>
						</div>
					</div>
				</div>
			</div>
        )
    }
}