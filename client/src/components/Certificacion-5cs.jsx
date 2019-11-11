import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import blog5 from "../img/certificacionYConfianza.png";
import foto1 from "../img/carats-fondo.png";
import logoGia from "../img/GIA_logo.png"
import claridad from "../img/claridad.png"
import color from "../img/color.png"
import corte from "../img/corte.png"

const Certificacion5cs= () => { 
return (
    <>
    <div className="div-5cs animated fadeIn pb-4">
        <div >
            <img className="img-min-blog " src={blog5} alt="" srcSet=""/>
        </div>
        <div className="div-5cs  flex d-block-xs">
            <article className="container-article vw60 xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-title mb-5 text-white black">
                        <div className="title-article">
                            <h1 className="raleway-semibold mb-4 font-size-2em">LAS 5Cs DE DIAMANTE </h1>
                            <p className=" raleway-regular font-size-1">En DIAMANTE PERÚ trabajamos con las mejores calidades,elegidas rigurosamente por profesionales de la ciencia</p>
                        </div>
                    </div>
                    <div className="container-text raleway-regular font-size-1em p-2 m-5">
                        <p>
                            El valor del diamante está determinado por 4 factores, no interesando el orden de éstos; que
                            son: Corte, Color, Claridad, Carat (unidad de peso). A continuación te explicamos sobre estos
                            factores:
                        </p>
                        <h2 className="mb-4 mt-4 font-size-1 raleway-bold">CERTIFICACIÓN Y CONFIANZA</h2>
                        <p>
                            Existe un quinto factor muy importante: es donde usted compre su Diamante, los Diamantes no tienen marca, vienen en diferentes tamaños y calidades. Si el Diamante está certificado por un Laboratorio de prestigio mundial, 
                            como lo es el instituto GIA (Gemological Insitute of America) Garantizará cada propiedad indicada de su Diamante.
                        </p>
                        <p>
                            En Diamante Perú contamos con dos gemólogos graduados en GIA, altamente capacitados que se encargan de realizar la importación del Diamante perfecto para usted.
                        </p>
                        <hr/>
                        <img src={logoGia} className="w50"></img>
                    </div>
                </div>
            </article>
            <div className="container-another-articles vw40 mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/carats" className="each-article-container option-menu flex mr-5">
                        <img src={foto1} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CARAT (UNIDAD DE PESO)</p>
                        </div>
                    </Link>
                    <Link to="/corte" className="each-article-container option-menu flex mr-5">
                        <img src={corte} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CORTE (TALLADO)</p>
                        </div>
                    </Link>
                    <Link to="/claridad" className="each-article-container option-menu flex mr-5">
                        <img src={claridad} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLARIDAD</p>
                        </div>
                    </Link>
                    <Link to="/color" className="each-article-container option-menu flex mr-5 ">
                        <img src={color} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">COLOR</p>
                        </div>
                    </Link>
                </div>
    
            </div>
        </div>
    </div>  
    </>
    )
};

export default Certificacion5cs;