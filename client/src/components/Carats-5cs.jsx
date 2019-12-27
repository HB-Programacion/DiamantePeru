import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import foto1 from "../img/5C-cover/COVER.png";
import blog5 from "../img/certificacionYConfianza.png"
import color from "../img/color.png"
import claridad from "../img/claridad.png";
import corte from "../img/corte.png"
import { Helmet } from "react-helmet";
import carats1 from "../img/DIAMANTE_carats.png";
const Carats= () => { 
return (
    <>
     <Helmet>
    <title>Carats - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
    <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
</Helmet>
    <div className="div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={foto1} alt="" srcSet=""/>
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
                        <h2 className="mb-4 mt-4 font-size-1 raleway-bold">CARAT (UNIDAD DE PESO)</h2>
                        <p>
                            El Diamante tiene su propia unidad de peso y ésta tiene como nombre: Carat. Un (1) Carat es una unidad de peso que equivale a 0.2 décimas de gramo. (No confundir Carat con Karats que
                            es la medida de pureza del oro en el idioma ingles). La palabra Carat viene de la palabra carob (que es una semilla muy uniforme en su tamaño de una planta de la India) que en la antigüedad se usaba como medida de peso. 
                            En 1913, el peso se estandarizo internacionalmente y fue adaptado al sistema métrico. Siendo un Carat la quinta parte de un  gramo en otras palabras 1 carat equivale a 0.20 décimas de gramo.
                        </p>
                        <p>
                            Carat es la unidad de un diamante; 1 carat tiene 100 puntos, un diamante de 3/4 de carat tiene 0.75 puntos, uno de 1/2 carat tiene 0.50 puntos, el de 1/4 de carat tiene 0.25 puntos y así sucesivamente.
                        </p>
                        <hr/>
                        <img className="w100"src={carats1} alt=""/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/corte" className="each-article-container  option-menu flex mr-5">
                        <img src={corte} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CORTE (TALLADO)</p>
                        </div>
                    </Link>
                    <Link to="/color" className="each-article-container  option-menu flex mr-5">
                        <img src={color} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">COLOR</p>
                        </div>
                    </Link>
                    <Link to="/claridad" className="each-article-container  option-menu flex mr-5">
                        <img src={claridad} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLARIDAD</p>
                        </div>
                    </Link>
                    <Link to="/certificacion-y-confianza" className="each-article-container  option-menu flex mr-5">
                        <img src={blog5} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CERTIFICACIÓN Y CONFIANZA</p>
                        </div>
                    </Link>
                </div>
                {/* <div className="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">DESTACADOS</h2>
                    <ul className="pl-3 pr-5 p-0-xs">
                        <li className="pt-2 pr-5">
                            <a className="pr-5 " href="/">El Perú : Nuevo mercado para los Diamantes </a>
                        </li>
                        <li className="pt-2 pr-5">
                            <a className="pr-5 "href="/">Diamantes para Ellas : Sorprendela en San Valetín</a>
                        </li>
                        <li className="pt-2 pr-5"> 
                            <a href="/">Se incrementa la vista de Diamantes por San Valentín</a> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <a className="pr-5 " href="/">¿Diamante o Rubí? </a> 
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </div>  
    </>
    )
};

export default Carats;