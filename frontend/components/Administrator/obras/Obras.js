import React,{Component} from 'react';
import axios from 'axios';
import {ToastsContainer,ToastsStore, ToastsContainerPosition} from 'react-toasts';
const URI='http://localhost:3000';
export default class Obras extends Component{
    state={
        obras:[],
        titulo:'',
        descripcion:'',
        estado_obra:'',
        presupuesto:'',
        avance:'',
        objetivos:'',
        errortitulo:null,
        errordescripcion:null,
        errorestado:null,
        errorpresupuesto:null,
        erroravance:null,
        errorobjetivos:null
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
    onInputOnChangeTitulo = e =>{
        if(e.target.value === ""){
            ibtitulo.innerHTML="La obra deve contener un título.";
            this.setState({
                errortitulo:false
            })            
        }else{
            ibtitulo.innerHTML="";
            this.setState({
                titulo:e.target.value,
                errortitulo:true
            })
        }
    }
    onInputOnChangeDescripcion = e =>{
        if(e.target.value === ""){
            ibdescripcionobra.innerHTML="La obra deve contener una descripción."
            this.setState({
                errordescripcion:false
            })
        }else{
            ibdescripcionobra.innerHTML="";
            this.setState({
                descripcion:e.target.value,
                errordescripcion:true
            })
        }
    }
    onInputOnChangeEstado = e =>{
        if(e.target.value ===""){
            ibestado.innerHTML="La obra deve contener un estado.";
            this.setState({
                errorestado:false
            })
        }else{
            ibestado.innerHTML="";
            this.setState({
                estado_obra:e.target.value,
                errorestado:true
            })
        }
    }
    onInputOnChangePresupuesto = e =>{
        if(e.target.value === ""){
            ibpresupuesto.innerHTML="La obra deve contener un presupuesto.";
            this.setState({
                errorpresupuesto:false
            })
        }else{
            ibpresupuesto.innerHTML="";
            this.setState({
                presupuesto:e.target.value,
                errorpresupuesto:true
            })
        }
    }
    onInputOnChangeAvance = e =>{
        if(e.target.value === ""){
            ibavance.innerHTML="La obra deve contener un avance.";
            this.setState({
                erroravance:false
            })
        }else{
            ibavance.innerHTML="";
            this.setState({
                avance:e.target.value,
                erroravance:true
            })
        }
    }
    onInputOnChangeObjetivos = e =>{
        if(e.target.value === ""){
            ibobjetivos.innerHTML="La obra deve contener objetivos.";
            this.setState({
                errorobjetivos:false
            })
        }else{
            ibobjetivos.innerHTML="";
            this.setState({
                objetivos:e.target.value,
                errorobjetivos:true
            })
        }
    }
    onSubmitObras = async (e) =>{
        e.preventDefault();
        if(!this.state.errortitulo){
            ibtitulo.innerHTML="La obra deve contener un título.";
            if(!this.state.errordescripcion){
                ibdescripcionobra.innerHTML="La obra deve contener una descripción.";
            }if(!this.state.errorestado){    
                ibestado.innerHTML="La obra deve contener un estado.";
            }if(!this.state.presupuesto){
                ibpresupuesto.innerHTML="La obra deve contener un presupuesto.";
            }if(!this.state.avance){
                ibavance.innerHTML="La obra deve contener un avance."
            }if(!this.state.objetivos){
                ibobjetivos.innerHTML="La obra deve contener objetivos."
            }
        }else if(!this.state.errordescripcion){
            ibdescripcionobra.innerHTML="La obra deve contener una decripción.";
            if(!this.state.errortitulo){
                ibtitulo.innerHTML="La obra deve contener un título.";
            }if(!this.state.errorestado){    
                ibestado.innerHTML="La obra deve contener un estado.";
            }if(!this.state.presupuesto){
                ibpresupuesto.innerHTML="La obra deve contener un presupuesto.";
            }if(!this.state.avance){
                ibavance.innerHTML="La obra deve contener un avance."
            }if(!this.state.objetivos){
                ibobjetivos.innerHTML="La obra deve contener objetivos."
            }
        }else if(!this.state.errorestado){
            ibestado.innerHTML="La obra deve contener un estado.";
            if(!this.state.errortitulo){
                ibtitulo.innerHTML="La obra deve contener un título.";
            }if(!this.state.errordescripcion){    
                ibdescripcionobra.innerHTML="La obra deve contener una descripción.";
            }if(!this.state.presupuesto){
                ibpresupuesto.innerHTML="La obra deve contener un presupuesto.";
            }if(!this.state.avance){
                ibavance.innerHTML="La obra deve contener un avance."
            }if(!this.state.objetivos){
                ibobjetivos.innerHTML="La obra deve contener objetivos."
            }
        }else if(!this.state.errorpresupuesto){
            ibpresupuesto.innerHTML="La obra deve contener un presupuesto.";
            if(!this.state.errortitulo){
                ibtitulo.innerHTML="La obra deve contener un título.";
            }if(!this.state.errordescripcion){    
                ibdescripcionobra.innerHTML="La obra deve contener una descripción.";
            }if(!this.state.errorestado){
                ibestado.innerHTML="La obra deve contener un estado.";
            }if(!this.state.avance){
                ibavance.innerHTML="La obra deve contener un avance."
            }if(!this.state.objetivos){
                ibobjetivos.innerHTML="La obra deve contener objetivos."
            }
        }else if(!this.state.erroravance){
            ibavance.innerHTML="La obra deve contener un avance.";
            if(!this.state.errortitulo){
                ibtitulo.innerHTML="La obra deve contener un título.";
            }if(!this.state.errordescripcion){    
                ibdescripcionobra.innerHTML="La obra deve contener una descripción.";
            }if(!this.state.errorestado){
                ibestado.innerHTML="La obra deve contener un estado.";
            }if(!this.state.errorpresupuesto){
                ibpresupuesto.innerHTML="La obra deve contener un presupuesto."
            }if(!this.state.objetivos){
                ibobjetivos.innerHTML="La obra deve contener objetivos."
            }
        }else if(!this.state.errorobjetivos){
            ibobjetivos.innerHTML="La obra deve contener objetivos.";
            if(!this.state.errortitulo){
                ibtitulo.innerHTML="La obra deve contener un título.";
            }if(!this.state.errordescripcion){    
                ibdescripcionobra.innerHTML="La obra deve contener una descripción.";
            }if(!this.state.errorestado){
                ibestado.innerHTML="La obra deve contener un estado.";
            }if(!this.state.errorpresupuesto){
                ibpresupuesto.innerHTML="La obra deve contener un presupuesto."
            }if(!this.state.erroravance){
                ibavance.innerHTML="La obra deve contener un avance."
            }
        }else{
            const newObras = ({
                titulo:this.state.titulo,
                descripcion:this.state.descripcion,
                estado_obra:this.state.estado_obra,
                presupuesto:this.state.presupuesto,
                avance:this.state.evance,
                objetivos:this.state.objetivos
            })
            var response = await axios.post(URI+'/api/obras',newObras);
            ToastsStore.success(response.data.message);
            this.getObras();
        }
    }
    deleteObra = async (id) =>{
        var response = await axios.delete(URI+'/api/obras/'+id);
        ToastsStore.error(response.data.message);
        this.getObras();
    }
    render(){
        return(
            <div className="row mt-2">
                <div className="col-8">
                    <h2>Registrar una obra</h2>
                    <form className="" onSubmit={this.onSubmitObras}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="titulo" placeholder="NOMBRE DE LA OBRA" onChange={this.onInputOnChangeTitulo}/>
                            <span className="alert-danger-munialis" role="alert" id="ibtitulo"></span>
                        </div>
                        <div className="form-group d-flex">
                            <div>
                                <textarea name="descripcion" cols="102" rows="3" placeholder="DESCRIPCION DE LA OBRA" onChange={this.onInputOnChangeDescripcion} className="mr-3"></textarea><br/>
                                <span className="alert-danger-munialis" role="alert" id="ibdescripcionobra"></span>
                            </div>   
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="estado_obra" placeholder="ESTADO DE LA OBRA : Ejecutada, En Avance." onChange={this.onInputOnChangeEstado}/>
                            <span className="alert-danger-munialis" role="alert" id="ibestado"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="presupuesto">Presupuesto: S/</label>
                            <input type="text" id="presupuesto" className="form-control" name="presupuesto" placeholder="000,000.00 " onChange={this.onInputOnChangePresupuesto}/>
                            <span className="alert-danger-munialis" role="alert" id="ibpresupuesto"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="avance">Avance: 000 %</label>
                            <input type="number" id="avance" className="form-control" name="avance" placeholder="00" onChange={this.onInputOnChangeAvance}/>
                            <span className="alert-danger-munialis" role="alert" id="ibavance"></span>
                        </div>
                        <div className="form-group d-flex">
                            <div>
                                <label htmlFor="objetivos">Objetivos de la Obra:</label>
                                <textarea name="objetivos" cols="102" rows="4" placeholder="" onChange={this.onInputOnChangeObjetivos} className="mr-3"></textarea><br/>
                                <span className="alert-danger-munialis" role="alert" id="ibobjetivos"></span>
                            </div>   
                        </div>
                        <button className="btn btn-primary">
                            Guardar Obra
                        </button>
                    </form>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
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