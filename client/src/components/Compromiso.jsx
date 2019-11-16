
import React  from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import oneDiamante from '../img/diamante.png'
import moreDiamante from '../img/diamantes.png'

const Compromiso = () => {
  
    return (
       
        <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn"> <Helmet>
        <title>Compromiso - Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
    </Helmet>
     
                <div className="flex-wrap-xs flex mt-5 mb-5rem flexCenter">
                    <Link to="/compromiso/diamantes" className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  >
                        <img src={oneDiamante} alt="un Diamanate"className="w100 h100 box"/>
                        <button className="joya">DIAMANTE</button>
                    </Link>
                    <Link to="/compromiso/diamante" className="w-auto borderBold m-2 mt-3 mb-3 m4-xs" >
                        <img src={moreDiamante}  alt="muchos Diamanates" className="w100 h100 box"/>
                        <button className="joya" ><span>+</span> DIAMANTES</button>
                    </Link>
                </div>
          
        </div>
    )
}
export default Compromiso