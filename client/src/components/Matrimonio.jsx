import React from "react";
import { Helmet } from "react-helmet";
import arrJoyas from '../data';
import CarrouselMatri from './CarrouselMatri'
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";



const Matrimonio = () => {
  return (
    <div className="fondo-item">
    <Helmet>
    <title>Matrimonio - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Bodas,Matrimonio,novios" />
    <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>  </Helmet>
    <CarrouselMatri 
      arrofJoyas={arrJoyas.filter(e =>  e .Sección === "Novios / Matrimonio")}  
      title={"AROS DE MATRIMONIO"}>
    </CarrouselMatri>
    </div>
  )
}
export default Matrimonio