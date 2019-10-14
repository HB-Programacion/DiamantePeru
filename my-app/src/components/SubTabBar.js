

import React,{useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



 const SubTabBar= (stateIndividual) => {

return(
<div className={`dropdown-menu center grayNav border-0 rounded-0 ${stateIndividual}`} aria-labelledby="navbarDropdown"
>
    <Link to="historia" className={"dropdown-item"}>Historia</Link>
    <Link to="motivos" className={"dropdown-item"}>Motivos</Link>
    <Link to="premios" className={"dropdown-item"}>Premios</Link>
    <Link to="convenios" className={"dropdown-item"}>Convenios</Link>
  </div>)
  }

 export default  SubTabBar;