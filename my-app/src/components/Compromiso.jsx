
import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Carrousel from './Carrousel'
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
                <div className="w90 flex-wrap-xs flex flexCenter">
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
                        <button className="joya" >+ DIAMANTES</button>
                    </div>
                </div>
            )}
            {state === "diamante" && (
            <div>
                
                <Carrousel arrofJoyas={CompromisoSolo}  title={"DIAMANTE"}></Carrousel>
            </div>
            )}
            {state === "diamantes" && (
            <div>
                <Carrousel arrofJoyas={CompromisoVarios}  title={"DIAMANTES"}></Carrousel>
            </div>
            )}
        </div>
    )
}
export default Compromiso