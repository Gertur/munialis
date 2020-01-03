import React,{Component} from 'react';
import axios from 'axios';
import {async} from 'q';
import {Link} from 'react-router-dom';
const URI='http://localhost:3000';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es',es);

import {format,register} from 'timeago.js';
import { isDate } from 'date-fns/esm';
const localeFunc = (number, index, total_sec) => {
    // number: the timeago / timein number;
    // index: the index of array below;
    // total_sec: total seconds between date to be formatted and today's date;
    return [
        ['justo ahora', 'en un rato'],
        ['hace %s segundos', 'en %s segundos'],
        ['hace 1 minuto', 'en 1 minuto'],
        ['hace %s minutos', 'en %s minutos'],
        ['hace 1 hora', 'en 1 hora'],
        ['hace %s horas', 'en %s horas'],
        ['hace 1 día', 'en 1 día'],
        ['hace %s días', 'en %s días'],
        ['hace 1 semana', 'en 1 semana'],
        ['hace %s semanas', 'en %s semanas'],
        ['hace 1 mes', 'en 1 mes'],
        ['hace %s meses', 'en %s meses'],
        ['hace 1 año', 'en 1 año'],
        ['hace %s años', 'en %s años']
    ][index];
  };
  // register your locale with timeago
  register('es_ES', localeFunc);
export default class Createactividades extends Component{
    state ={
        actividades:[],
        titulo:'',
        lugardesarrollo:'',
        descripcion:'',
        imagenseleccionada:null,
        fechadesarrollo: new Date(),
        horadesarrollo:'10:00'
    }
    async componentDidMount(){
        this.getActividades();
    }
    async getActividades(){
        const actividades = await axios.get(URI+'/api/actividades');
        this.setState({
            actividades:actividades.data
        })
    }

    onSubmitActividad = async (e) =>{
        e.preventDefault();
        const newActividad ={
            titulo:this.state.titulo,
            lugardesarrollo:this.state.lugardesarrollo,
            descripcion:this.state.descripcion,
            fechadesarrollo:this.state.fechadesarrollo,
            horadesarrollo:this.state.horadesarrollo,
            imagen:this.state.imagenseleccionada
        }
        await axios.post(URI+'/api/actividades',newActividad);
        this.getActividades();
    }

    onInputOnChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onChangeDate = date =>{
        this.setState({
            fechadesarrollo:date
        })
    }
    onChangeHora = hora =>{
        this.setState({
            horadesarrollo:hora
        })
        console.log(this.state.horadesarrollo);
    }
    onChangefileupload = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            this.setState({
                imagenseleccionada:reader.result,
                imagenombre:file.name
            })
            console.log(this.state.imagenseleccionada)
        }   
    }
    deleteActividad = async (id)=>{
        await axios.delete(URI+'/api/actividades/'+id);
        this.getActividades();
    }
    render(){
        const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        return(
            <div>
                <div className="row mt-2">
                    <div className="col-8">
                        <h2>Registrar una nueva Actividad</h2>
                        <form onSubmit={this.onSubmitActividad} className="card-body">
                            <div className="form-group">
                                <input type="text" className="form-control" name="titulo" placeholder="Titulo de la Actividad" onChange={this.onInputOnChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="lugardesarrollo" placeholder="Lugar de Desarrollo de la Actividad" onChange={this.onInputOnChange}/>
                            </div>
                            <div className="form-group">
                            <textarea name="descripcion" cols="85" rows="3" placeholder="Descripcion de la Actividad que se llevara a cabo." onChange={this.onInputOnChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label className="mr-3" htmlFor="fechadesarrollo">Seleccione la Fecha en que se llevara a cabo la Actividad:</label>
                                <DatePicker locale="es" id="fechadesarrollo" selected={this.state.fechadesarrollo} className="form-control" onChange={this.onChangeDate} value={this.state.fechadesarrollo}/>
                            </div>
                            <div className="form-group">
                                <label className="mr-3" htmlFor="fechadesarrollo">Seleccione la hora de la actividad:</label>
                                <TimePicker onChange={this.onChangeHora} className="input-timepicker" value={this.state.horadesarrollo}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="image_ferente">Seleccione una imagen referente a la actividad a desarrollarse:</label>
                                <input type="file" onChange={this.onChangefileupload} name="imagen" className="form-control-file" id="image_ferente"/>
                            </div>

                            <button className="btn btn-primary">
                                Guardar Actividad
                            </button>
                        </form>
                    </div>
                    <div className="col-4">
                        <h5><strong>Todas las Actividades</strong></h5>
                        {
                            this.state.actividades.map(actividad=>(
                                <div className="card-body" key={actividad._id}>
                                    <h6 id="titulo" className="card-title text-lowercase">Titulo: <strong>{actividad.titulo}</strong></h6>
                                    <p className="card-text">Lugar: {actividad.lugardesarrollo.slice(0,70)}</p>
                                    <label htmlFor="">Fecha de desarrollo:</label>
                                    <strong> {new Date(actividad.fechadesarrollo).getDate()} de {meses[new Date(actividad.fechadesarrollo).getMonth()]} del {new Date(actividad.fechadesarrollo).getFullYear()}</strong>
                                    <p className="card-text">Hora de desarrollo de la Actividad: <strong>{actividad.horadesarrollo}</strong></p>
                                    <button className="btn btn-danger btn-sm" onClick={()=>this.deleteActividad(actividad._id)}>Eliminar</button>
                                </div>
                            ))
                        }
                    </div>
                </div>              
            </div>
        )
    }
}