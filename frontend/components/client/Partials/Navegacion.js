import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navegacion extends Component{
    render(){
        return(
            <div>
                <div className="redes-sociales">
                    <ul>
                        <li><a href="" className="link-facebook"><i className="fab fa-facebook float-right mt-1 mr-1"></i></a></li>
                        <li><a href="" className="link-gmail"><i className="fas fa-at float-right mt-1 mr-1"></i></a></li>
                        <li><a href="" className="link-youtube"><i className="fab fa-youtube float-right mt-1 mr-1"></i></a></li>
                    </ul>
                </div>
                {/**
                <div className="informacion-alis">
                    <div className="container">
                        <div className="row-12">
                            <div className="col-xl-12 p-1 d-flex justify-content-between">
                                <img src="./img/paraiso_natural.svg" alt="Paraiso Natural" className="animated infinite pulse" width="130px" />
                                <img src="" alt="Portal de Transparencia" />
                            </div>
                        </div>
                    </div>
                </div>
                */}
                <header className="estilo-menu">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light mt-0">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a href="/" className="navbar-brand"><img src="https://munialisstatic.s3-sa-east-1.amazonaws.com/logo2.png" alt="" width="180px"/></a>
                                <a href="">
                                    <img src="https://munialisstatic.s3-sa-east-1.amazonaws.com/marca-alis.png" width="100px" alt="" className="ml-3"/>
                                </a>
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item dropdown mr-3">
                                        <a href="" className="nav-link dropdown-toggle removealfeter active hvr-icon-hang" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <p className="text-center mb-0">
                                                <i className="fas fa-landmark fa-2x"></i>
                                            </p>
                                            Municipalidad <i className="fas fa-angle-down hvr-icon ml-1"></i>
                                        </a>
                                        <div className="dropdown-menu animate slideIn submenu-municipalidad">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/Municipalidad'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>La municipalidad</Link>
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/regidores'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Concejo Municipal</Link>
                                                    {/* <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/organigrama'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Organigrama</Link> */}
                                                </div>
                                                <div className="col-6">
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/noticias'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Noticias</Link>
                                                    {/* <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/presupuesto-participativo'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Presupuesto Participativo</Link> */}
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/transparencia'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Transparencia</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mr-3">
                                        <a className="nav-link dropdown-toggle removealfeter active hvr-icon-hang" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="">
                                            <p className="text-center mb-0">
                                                <i className="fas fa-id-badge fa-2x"></i>
                                            </p>
                                            Trámites<i className="fas fa-angle-down hvr-icon ml-1"></i>
                                        </a>
                                        <div className="dropdown-menu animate slideIn submenu-tramites">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/tupa'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>TUPA</Link> */}
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/registro-civil'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Registro Civil</Link>
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/rumbo_centenario'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Rumbo al Centenario</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mr-3">
                                        <a className="nav-link dropdown-toggle removealfeter active hvr-icon-hang" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="">
                                            <p className="text-center mb-0">
                                                <i className="fas fa-users fa-2x"></i>
                                            </p>
                                            Servicios<i className="fas fa-angle-down hvr-icon ml-1"></i>
                                        </a>
                                        <div className="dropdown-menu animate slideIn submenu-servicios">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/desarrollo-social'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Desarrollo Social</Link>
                                                    {/* <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/salud'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Salud</Link> */}
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/turismo'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Turismo</Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/cultura'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Cultura</Link>
                                                    {/* <Link className="dropdown-item hvr-underline-from-center p-2 pl-4 hvr-icon-wobble-horizontal" to='/Admin'><i className="mr-3 fa fa-arrow-right hvr-icon"></i>Admin</Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <form className="form-inline contenedor-bloque-buscar">
                                    <input className="input-buscar" type="search" name="" id="" placeholder="Buscar..." aria-label="Search"/>
                                    <input type="submit" className="input-submit-buscar" value="Buscar"/>
                                </form>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}