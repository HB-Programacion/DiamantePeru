import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../img/LogoDiamante.svg';
import Historia from "./Historia"
import Home from './Home';
import Motivos from './Motivos';
import Premios from './Premios';
import ConveniosTab from './ConveniosTab';
import Eleccion from './Eleccion'
import Cs from './Cs';
import Certificaciones from './Certificaciones';
import menu from "../img/menu.svg";
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'


const TabBar= () => {
  return (
 <Route>
    <header>
      
      
      <nav class="navbar navbar-expand-lg p-0 navbar-light bg-light d-block">
      <div class="d-flex flex-grow-1">
      <div className='flexWrap'>
      <div className="allCenter text-size12 mr-5 cel">
        <a className="ml-5"><img src={ubicacion} className="h13px" /> CONTACTO
        </a>
      </div>
      <div className="flex ml-5 mr-5 img-logo">
        <img src={logo} alt="logo" className="center pb-2 pt-1 m-auto w50" />
      </div>
      <div className="allCenter text-size12 ml-5 cel">
        <a>TESTIMONIOS</a>
        <a className="ml-5">BLOG</a>
      </div>
      </div>
      {/* <hr class="my-1 d-block"/> */}
      <div className="burger-text-right flex flex-end">
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      </div>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav burger-rigth menuRigth">
            <li class="nav-item ">
              <Link to="/" class="nav-link">HOME <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#diamantePeru" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              DIAMANTE PERU
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="historia" class="dropdown-item buttonOfNavStyleGray">Historia</Link>
              <Link to="motivos" class="dropdown-item buttonOfNavStyleGray">Motivos</Link>
              <Link to="premios" class="dropdown-item buttonOfNavStyleGray">Premios</Link>
              <Link to="convenios" class="dropdown-item buttonOfNavStyleGray">Convenios</Link>
            </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#diamantes" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              DIAMANTES
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="eleccion" class="dropdown-item buttonOfNavStyleGray">ELECCION</Link>
              <Link to="5cs" class="dropdown-item buttonOfNavStyleGray">5CS</Link>
              <Link to="certificaciones" class="dropdown-item buttonOfNavStyleGray">CERTIFICACIONES</Link>
              <Link to="mantenimiento" class="dropdown-item buttonOfNavStyleGray">MANTENIMIENTO</Link>
            </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#novios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              NOVIOS
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="compromiso" class="dropdown-item buttonOfNavStyleGray">COMPROMISO</Link>
              <Link to="matrimonio" class="dropdown-item buttonOfNavStyleGray">MATRIMONIO</Link>
            </div>
            </li>
            <li class="nav-item">
              <Link to="joyas" class="nav-link">JOYAS<span class="sr-only">(current)</span></Link>
            </li>
            <hr class="my-2"/>
            <li  className="dest"><Link to="blog" class="nav-link">BLOG</Link></li>
            <li  className="dest"><Link to="testimonio" class="nav-link">TESTIMONIO</Link></li>
            <li  className="dest"><Link to="contacto" class="nav-link">CONTACTO</Link></li>
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
      {/* <Route path="/mantenimiento" exact component={Mantenimiento} />
      <Route path="/compromiso" exact component={Compromiso} />
      <Route path="/matrimonio" exact component={Matrimonio} /> */}
      {/* <Route path="/joyas" exact component={joyas} /> */}
      </div>
    </header>
</Route>
  );
}
export default TabBar;
