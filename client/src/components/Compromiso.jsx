
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
        <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn">
            {state === "viewTwo" && (
                <div className="flex-wrap-xs flex mt-5 mb-5rem flexCenter">
                    <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  
                        onClick={() => {
                        setState("diamante");
                        }}>
                        <img src={oneDiamante} className="w100 h100 box"/>
                        <button className="joya">DIAMANTE</button>
                    </div>
                    <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  
                        onClick={() => {
                        setState("diamantes");
                        }} >
                        <img src={moreDiamante} className="w100 h100 box"/>
                        <button className="joya" ><span>+</span> DIAMANTES</button>
                    </div>
                </div>
            )}
            {state === "diamante" && (
            <div className="">
                
                <CarrouselOne arrofJoyas={CompromisoSolo}  title={"DIAMANTE"}></CarrouselOne>
            </div>
            )}
            {state === "diamantes" && (
            <div className="">
                <Carrousel arrofJoyas={CompromisoVarios}  title={"DIAMANTES"}></Carrousel>
            </div>
            )}
        </div>
    )
}
export default Compromiso