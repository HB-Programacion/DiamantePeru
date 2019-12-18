import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import blog5 from "../img/certificacionYConfianza.png";
import foto1 from "../img/carats-fondo.png";

import claridad from "../img/claridad.png"
import color from "../img/color.png"
import corte from "../img/corte.png"
import certificacion from "../img/certificacion.png"
const Certificacion5cs= () => { 
return (
    <>
       <Helmet>
            <title>Certificación - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
        </Helmet>
    <div className="div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={blog5} alt="certificacion" srcSet=""/>
        </div>
        <div className="container-title text-white black-blog">
            <div className="title-article">
                <h1 className="raleway-semibold mb-4 font-size-2em">LAS 5Cs DE DIAMANTE </h1>
                <p className=" raleway-regular font-size-1">En DIAMANTE PERÚ trabajamos con las mejores calidades,elegidas rigurosamente por profesionales de la ciencia</p>
            </div>
        </div>
        <div className="div-5cs article-content flex d-block-xs">
            <article className="container-article w60rem xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-text raleway-regular font-size-1em p-2 m-5">
                    <p>
                        El valor del diamante está determinado por 4 factores que son: Corte, Color, Claridad y Carat (unidad de peso). A estos factores  le sumamos un quinto valor que es
                        <span className="raleway-bold"> Certificación y Confianza</span>. A continuación te explicamos sobre estos factores:
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
                        <img src={certificacion} alt="gia" className="w100"></img>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/carats" className="each-article-container option-menu flex mr-5">
                        <img src={foto1} alt="cart" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CARAT (UNIDAD DE PESO)</p>
                        </div>
                    </Link>
                    <Link to="/corte" className="each-article-container option-menu flex mr-5">
                        <img src={corte} alt="corte" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CORTE (TALLADO)</p>
                        </div>
                    </Link>
                    <Link to="/claridad" className="each-article-container option-menu flex mr-5">
                        <img src={claridad} alt="claridad" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLARIDAD</p>
                        </div>
                    </Link>
                    <Link to="/color" className="each-article-container option-menu flex mr-5 ">
                        <img src={color} alt="color" className="img-art-rel"/>
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