
import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Carrousel from './Carrousel'

import CarrouselOne from './CarrouselOne'
import oneDiamante from '../img/diamante.png'
import moreDiamante from '../img/diamantes.png'
import arrJoyas from '../data';
const Compromiso = () => {
    const [state, setState] = useState("viewTwo");
    const CompromisoSolo = arrJoyas.filter(e => e.Categoría==="Solitario" && e.Sección === "Novios/Anillo de Compromiso");
    const CompromisoVarios = arrJoyas.filter(e => e.Categoría==="Con más Diamantes ó Laterales" && e.Sección === "Novios/Anillo de Compromiso");
    return (
       
        <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn"> <Helmet>
        <title>Compromiso - Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
    </Helmet>
            {state === "viewTwo" && (
                <div className="flex-wrap-xs flex mt-5 mb-5rem flexCenter">
                    <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  
                        onClick={() => {
                        setState("diamante");
                        }}>
                        <img src={oneDiamante} alt="un Diamanate"className="w100 h100 box"/>
                        <button className="joya">DIAMANTE</button>
                    </div>
                    <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  
                        onClick={() => {
                        setState("diamantes");
                        }} >
                        <img src={moreDiamante}  alt="muchos Diamanates" className="w100 h100 box"/>
                        <button className="joya" ><span>+</span> DIAMANTES</button>
                    </div>
                </div>
            )}
            {state === "diamante" && (
            <div className="">
                
                <CarrouselOne arrofJoyas={CompromisoSolo}  title={"DIAMANTE"}></CarrouselOne>
                    <i onClick={()=>{ setState("viewTwo")}} class="fas fa-chevron-left arrowGoback goBackBlog" aria-hidden="true"></i> 
            </div>
            )}
            {state === "diamantes" && (
            <div className="">
                <Carrousel arrofJoyas={CompromisoVarios}  title={"DIAMANTES"}></Carrousel>
                <i onClick={()=>{ setState("viewTwo")}} class="fas fa-chevron-left arrowGoback goBackBlog" aria-hidden="true"></i> 
            </div>
            )}
        </div>
    )
}
export default Compromiso