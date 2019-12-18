import React from 'react'
import { Helmet } from "react-helmet";
import arrJoyas from '../data';

import CarrouselOne from './CarrouselOne';
const Compromiso1 =()=>{
    const CompromisoSolo = arrJoyas.filter(e => e.Categoría==="Solitario" && e.Sección === "Novios/Anillo de Compromiso");
return (
    <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn fondoCompromiso "> 
        <Helmet>
            <title>Compromiso - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
        </Helmet>
        <div className="">
            <CarrouselOne arrofJoyas={CompromisoSolo}  title={"SOLITARIO"}></CarrouselOne>
        </div>
    </div>
    )
}
export default Compromiso1;