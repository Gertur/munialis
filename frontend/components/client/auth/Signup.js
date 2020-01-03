 
import React,{Component} from 'react'
import axios from 'axios';
import { async } from 'q';
const URI='http://localhost:3000';
export default class Signup extends Component{
    state={
        email:'',
        password:'',
        confirmar_password:'',
        signupMessage:null,
        errors:{}
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({
              errors: nextProps.errors
            });
          }
        console.log(this.state.errors);
    }
    onChangeInput =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSumitRegister = async(e)=>{
        e.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password,
            confirmar_password:this.state.confirmar_password
        }
        await axios.post(URI+'/api/auth/signup',user)
    }
    render(){
        return(
            <div className="">
                <div className="row">
                    <div className="col-md-4 mr-auto ml-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4>Registrar Cuenta</h4>
                            </div>
                            <div className="card body">
                                <form onSubmit={this.onSumitRegister}>
                                    <div className="form-group">
                                        <input type="email" placeholder="Ingrese su correo" className="form-control" name="email" onChange={this.onChangeInput}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Ingre su contraseña" className="form-control" name="password" onChange={this.onChangeInput}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Confirmar contraseña" className="form-control" name="confirmar_password" onChange={this.onChangeInput}/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Registrarme</button>  
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}