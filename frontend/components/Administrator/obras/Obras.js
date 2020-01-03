import React,{Component} from 'react';
import axios from 'axios';
const URI='http://localhost:3000';
export default class Obras extends Component{
    state={
        obras:[],
        titulo:'',
        descripcion:'',
        estado_obra:'',
        presupuesto:'',
        avance:'',
        objetivos:''
    }
    async componentDidMount(){
        this.getObras();
    }
    async getObras(){
        const resobras = await axios.get(URI+'/api/obras');
        this.setState({
            obras:resobras.data
        })
    }
    onInputOnChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitObras = async (e) =>{
        e.preventDefault();
        const newObras = ({
            titulo:this.state.titulo,
            descripcion:this.state.descripcion,
            estado_obra:this.state.estado_obra,
            presupuesto:this.state.presupuesto,
            avance:this.state.evance,
            objetivos:this.state.objetivos
        })
        await axios.post(URI+'/api/obras',newObras);
        this.getObras();
    }
    deleteObra = async (id) =>{
        await axios.delete(URI+'/api/obras/'+id);
        this.getObras();
    }
    render(){
        return(
            <div className="row mt-2">
                <div className="col-8">
                    <h2>Registrar una obra</h2>
                    <form className="" onSubmit={this.onSubmitObras}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="titulo" placeholder="NOMBRE DE LA OBRA" onChange={this.onInputOnChange}/>
                        </div>
                        <div className="form-group d-flex">
                            <div>
                                <textarea name="descripcion" cols="102" rows="3" placeholder="DESCRIPCION DE LA OBRA" onChange={this.onInputOnChange} className="mr-3"></textarea><br/>
                            </div>   
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="estado_obra" placeholder="ESTADO DE LA OBRA : Ejecutada, En Avanze." onChange={this.onInputOnChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="presupuesto">Presupuesto: S/</label>
                            <input type="number" id="presupuesto" className="form-control" name="presupuesto" placeholder="PRESUPUESTO: 000,000.00 " onChange={this.onInputOnChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="avance">Avanze: 00 %</label>
                            <input type="number" id="avance" className="form-control" name="avance" placeholder="00" onChange={this.onInputOnChange}/>
                        </div>
                        <div className="form-group d-flex">
                            <div>
                                <label htmlFor="objetivos">Objetivos de la Obra:</label>
                                <textarea name="objetivos" cols="102" rows="4" placeholder="1._ xxxxxxxxxxxxxxx" onChange={this.onInputOnChange} className="mr-3"></textarea><br/>
                            </div>   
                        </div>
                        <button className="btn btn-primary">
                            Guardar Obra
                        </button>
                    </form>
                </div>
                <div className="col-4">
                    <h5>Ultimas publicaciones</h5>
                    {
                        this.state.obras.map(obra => (
                        <div className="card-body" key={obra._id}>
                            <h5 className="card-title text-lowercase">{obra.titulo}</h5>
                            <p className="card-text">{obra.descripcion.slice(0,70)}</p>
                            <button className="btn btn-danger btn-sm" onClick={()=>this.deleteObra(obra._id)}>Eliminar</button>
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}