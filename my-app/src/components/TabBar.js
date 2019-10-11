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
import Compromiso from './Compromiso'
import menu from "../img/menu.svg";
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'


const TabBar= () => {
  return (
 <Route>
    <header>
      <nav class="navbar navbar-expand-lg p-0 navbar-light d-block">
      <div class="d-flex flex-grow-1">
      <div className='w100 flex around pt-1 pb-1 raleway-light bd-bottom'>
      <div className="allCenter cel">
      <a className=""><img src={ubicacion} className="h13px" /> CONTACTO
        </a>
      </div>
      <div className="flex ml-5 mr-5 img-logo">
      <Link to="/"><img src={logo} alt="logo" className="center m-auto w50 pt-2 pb-2 logoCenter logo" /></Link>
      </div>
      <div className="allCenter cel">
        <a className="pr-4">TESTIMONIOS</a>
        <a className="pl-4">BLOG</a>
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
          <ul class="navbar-nav burger-rigth menuRigth raleway-light ">
            <li class="nav-item pl-3 pr-3">
              <Link to="/" class="nav-link">HOME <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item dropdown pl-3 pr-3">
              <a class="nav-link dropdown-toggle" href="#diamantePeru" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              DIAMANTE PERU
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="historia" class="dropdown-item">Historia</Link>
              <Link to="motivos" class="dropdown-item">Motivos</Link>
              <Link to="premios" class="dropdown-item">Premios</Link>
              <Link to="convenios" class="dropdown-item">Convenios</Link>
            </div>
            </li>
            <li class="nav-item dropdown pl-3 pr-3">
              <a class="nav-link dropdown-toggle" href="#diamantes" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              DIAMANTES
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="eleccion" class="dropdown-item ">ELECCION</Link>
              <Link to="5cs" class="dropdown-item">5CS</Link>
              <Link to="certificaciones" class="dropdown-item">CERTIFICACIONES</Link>
              <Link to="mantenimiento" class="dropdown-item">MANTENIMIENTO</Link>
            </div>
            </li>
            <li class="nav-item dropdown pl-3 pr-3">
              <a class="nav-link dropdown-toggle" href="#novios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              NOVIOS
            </a>
            <div class="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown">
              <Link to="compromiso" class="dropdown-item">COMPROMISO</Link>
              <Link to="matrimonio" class="dropdown-item">MATRIMONIO</Link>
            </div>
            </li>
            <li class="nav-item mb-4 pl-3 pr-3">
              <Link to="joyas" class="nav-link">JOYAS<span class="sr-only">(current)</span></Link>
            </li>
            <hr class="my-2"/>
            <li  className="dest mt-4 mb-2 pl-3 pr-3"><Link to="blog" class="nav-link">BLOG</Link></li>
            <li  className="dest mb-2 pl-3 pr-3" ><Link to="testimonio" class="nav-link">TESTIMONIO</Link></li>
            <li  className="dest mb-2 pl-3 pr-3"><Link to="contacto" class="nav-link">CONTACTO</Link></li>
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
      {/* <Route path="/mantenimiento" exact component={Mantenimiento} /> */}
      <Route path="/compromiso" exact component={Compromiso} />
      {/* <Route path="/matrimonio" exact component={Matrimonio} /> */}
      {/* {/* <Route path="/joyas" exact component={joyas} /> */}
      </div>
    </header>
</Route>
  );
}
export default TabBar;
