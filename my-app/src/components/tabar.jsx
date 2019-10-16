import React,{useState} from "react";
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
import menu from "../img/menu.svg";
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'


const TabBar= () => { 
  
  const [NavBarState, NavBarSetState] = useState("");



  return (
 <Route>
    <header>
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
        <a className="pl-4">BLOG</a>
      </div>
      </div>
      {/* <hr className={"my-1 d-block"/> */}
      <div className="burger-text-right flex flex-end">
        <button className={"navbar-toggler border-0"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={"navbar-toggler-icon"}></span>
        </button>
      </div>
      </div>
        <div className={"collapse navbar-collapse justify-content-center"} id="navbarSupportedContent">
        <ul class="navbar-nav raleway-light">
      <li class="allCenter active">
        <Link class="nav-link" to="/" >HOME  &#43; <span class="sr-only">(current)</span> </Link>
       
      </li>
      <li class="allCenter"  onClick={() => {
           NavBarSetState("diamantePeru");
         }}> 
        <a class="nav-link" href="#">DIAMANTE PERÚ</a>
        {NavBarState === "diamantePeru" && (
         <div className={"collapse navbar-collapse justify-content-center grayNav" } id="navbarSupportedContent">
         <ul class="navbar-nav raleway-light">
           <li class="allCenter active">
             <Link class="nav-link"  to="/historia">Historia</Link>
           
           </li>
            <li class="allCenter">
            <Link class="nav-link"  to="/motivos">Motivos</Link>
            
            </li>
            <li class="nav-item">
            <Link class="nav-link"  to="/premios">Premios</Link>
             
            </li>
            <li class="nav-item">
            <Link class="nav-link " to="/convenios">Convenios</Link>
              
            </li>
       
     </ul>
 
     
           </div>
        )}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
        onClick={()=>{
          NavBarSetState("diamantes")
        }}
        >DIAMANTES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#"onClick={() => {
           NavBarSetState("novios");
         }} >NOVIOS</a>
         
      </li>
      <li class="nav-item">
        <Link></Link>
        <a class="nav-link " href="#" >JOYAS</a>
      </li>
    </ul>

    
          </div>

          

{NavBarState === "diamantes" && (
         <div className={"collapse navbar-collapse justify-content-center grayNav" } id="navbarSupportedContent">
         <ul class="navbar-nav raleway-light">
           <li class="allCenter active">
           <Link class="nav-link" to="/eleccion">Elección <span class="sr-only">(current)</span></Link>
        
           </li>
            <li class="allCenter">
            <Link class="nav-link" to="/5cs">5Cs</Link>
            
            </li>
            <li class="nav-item">
            <Link class="nav-link"  to="/certificaciones">Certificaciones</Link>
            
            </li>
            <li class="nav-item">
            <Link class="nav-link " to="/mantenimiento">Mantenimiento</Link>
            
            </li>
       
     </ul>
 
     
           </div>
        )}


{NavBarState === "novios" && (
         <div className={"collapse navbar-collapse justify-content-center grayNav" } id="navbarSupportedContent">
         <ul class="navbar-nav raleway-light">
           <li class="allCenter active">
           <Link class="nav-link" to="/compromiso">Compromiso</Link>
            
           </li>
            <li class="allCenter">
            <Link class="nav-link" to="/matrimonio">Matrimonio</Link>
         
            </li>
            
       
     </ul>
 
     
           </div>
        )}
          
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
      </div>
    </header>
</Route>
  );
}
export default TabBar;
