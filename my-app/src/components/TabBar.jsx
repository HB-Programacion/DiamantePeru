import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './../img/LogoDiamante.svg';
import Historia from "./Historia"
import Home from './Home';
import Motivos from './Motivos';
import Premios from './Premios';
import ConveniosTab from './ConveniosTab';
import Eleccion from './Eleccion'
import Cs from './Cs';
import Certificaciones from './Certificaciones';
import Compromiso from './Compromiso'
import Mantenimiento from './Mantenimiento'
// import blogPrueba from './prueba'
import Blog from './Blog'

import menu from "../img/menu.svg";
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'


const TabBar= () => { 
    
  return (
 <Route>
    <header className="">
      <nav className={"navbar navbar-expand-lg p-0 navbar-light d-block"}>
      <div className={"d-flex flex-grow-1"}>
      <div className={'w100 flex around pt-1 pb-1 raleway-light bd-bottom'}>
      <div className={"allCenter cel"}>
      <a className={""}><img src={ubicacion} className="h13px" /> CONTACTO
        </a>
      </div>
      <div className="flex ml-5 mr-5 img-logo">
      <Link to="/"><img src={logo} alt="logo" className="center m-auto w50 pt-2 pb-2 logoCenter logo" /></Link>
      </div>
      <div className="allCenter cel">
        <a className="pr-4">TESTIMONIOS</a>
        <Link to="/blogprueba" className="pl-4">BLOG</Link>
      </div>
      </div>
      {/* <hr className={"my-1 d-block"/> */}
      <div className="burger-text-right flex flex-end">
        <button className={"navbar-toggler border-0"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={"navbar-toggler-icon"}></span>
        </button>
      </div>
      </div>
        <div className={"collapse navbar-collapse justify-content-center  bd-bottom"} id="navbarSupportedContent">
          <ul className={"navbar-nav burger-rigth menuRigth raleway-light "}>
            <li className={"nav-item pl-3 pr-3 principal-text-navbar"}>
              <Link to="/" className={"nav-link"}>HOME <span className={"sr-only"}>(current)</span></Link>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar" } >
              <a className={"nav-link dropdown-toggle"} href="#diamantePeru" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >
              DIAMANTE PERÚ
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown"
          >
              <Link to="historia" className={"dropdown-item"}>Historia</Link>
              <Link to="motivos" className={"dropdown-item"}>Motivos</Link>
              <Link to="premios" className={"dropdown-item"}>Premios</Link>
              <Link to="convenios" className={"dropdown-item"}>Convenios</Link>
            </div>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar"}>
              <a  className={"nav-link dropdown-toggle"}  href="#diamantes" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              DIAMANTES 
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0 "  aria-labelledby="navbarDropdown">
              <Link to="eleccion" className={"dropdown-item "}>Elección</Link>
              <Link to="5cs" className={"dropdown-item"}>5CS</Link>
              <Link to="certificaciones" className={"dropdown-item"}>Certificaciones</Link>
              <Link to="mantenimiento" className={"dropdown-item"}>Mantenimiento</Link>
            </div>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar"}>
              <a   className={"nav-link dropdown-toggle"} href="#novios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              NOVIOS
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0 "  aria-labelledby="navbarDropdown">
              <Link to="compromiso" className={"dropdown-item"}>Compromiso</Link>
              <Link to="matrimonio" className={"dropdown-item"}>Matrimonio</Link>
            </div>
            </li>
            <li className={"nav-item mb-4 pl-3 pr-3 principal-text-navbar"}>
              <Link to="joyas" className={"nav-link"}>JOYAS<span className={"sr-only"}>(current)</span></Link>
            </li>
            <hr className={"my-2"}/>
            <li  className={"dest mt-4 mb-2 pl-3 pr-3"}><Link to="/blogprueba" className={"nav-link"}>BLOG</Link></li>
            <li  className={"dest mb-2 pl-3 pr-3"} ><Link to="testimonio" className={"nav-link"}>TESTIMONIO</Link></li>
            <li  className={"dest mb-2 pl-3 pr-3"}><Link to="contacto" className={"nav-link"}>CONTACTO</Link></li>
          </ul>
        </div>
      </nav>
      <div>

      <Route path="/" exact component={Home} />
      <Route path="/historia" exact component={Historia} />
      <Route path="/motivos" exact component={Motivos} />
      <Route path="/premios" exact component={Premios} />
      <Route path="/convenios" exact component={ConveniosTab} />
      <Route path="/eleccion" exact component={Eleccion} />
      <Route path="/5cs" exact component={Cs} />
      <Route path="/certificaciones" exact component={Certificaciones} />
      <Route path="/mantenimiento" exact component={Mantenimiento} />
      <Route path="/compromiso" exact component={Compromiso} />
      {/* <Route path="/matrimonio" exact component={Matrimonio} /> */}
      {/* {/* <Route path="/joyas" exact component={joyas} /> */}
      <Route path="/blogprueba" exact component={Blog} />
      </div>
    </header>
</Route>
  );
}
export default TabBar;