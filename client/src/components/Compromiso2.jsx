import React from 'react'
import { Helmet } from "react-helmet";

import Carrousel from './Carrousel'
import arrJoyas from '../data';
const Compromiso2 =()=>{
    const CompromisoVarios = arrJoyas.filter(e => e.Categoría==="Con más Diamantes ó Laterales" && e.Sección === "Novios/Anillo de Compromiso");
 
return (
    <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn"> 
        <Helmet>
            <title>Compromiso - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
        </Helmet>
        <div className="">
            <Carrousel arrofJoyas={CompromisoVarios}  title={"DIAMANTES"}></Carrousel>
        </div>
    </div>
)
}
export default Compromiso2;