import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import foto1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";
import blog4 from "../img/blog4.png";
import blog5 from "../img/blog5.png";


const Blog1= () => { 
return (
    <>
    <div className="div-5cs animated fadeIn pb-4">
        <div >
            <img className="img-min-blog " src={foto1} alt="" srcSet=""/>
        </div>
        <div className="div-5cs  flex d-block-xs">
            <article className="container-article vw60 xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-title mb-5 text-white black">
                        <div className="title-article">
                            <h1 className="raleway-semibold mb-4 font-size-2em">SORTEO APERTURA CLUB DIAMANTE:</h1>
                            <p className=" raleway-regular font-size-1">¡Inauguramos Club Diamante, conoce más sobre el sorteo por apertura!</p>
                        </div>
                    </div>
                    <div className="container-text raleway-regular font-size-1em p-2 m-5">
                        <p>
                            <b className="font-size-1">DIAMANTE PERÚ:</b> Sorteo de aros de matrimonio.
                        </p>
                        <p>Característica de Aros:</p>
                        <ul className="pl-3">
                            <li>Peso: 8 gramos</li>
                            <li>Color de oro: Oro amarillo u oro blanco de 18k</li>
                            <li> Modelo: Clásicos** (Cinta o Media caña)</li>
                        </ul>
                        <p>Términos y condiciones: Solo para la confección de aros clásicos (Media caña o cinta). 
                            Válidos durante el mes en curso.</p>
                        <p>
                            <b className="font-size-1">CARMEN SEMINARIO:</b>
                        </p>
                        <ul className="pl-3">
                            <li>1 Terno de novio: Incluye saco y pantalón de tela italiana Súper 120s con forro de seda, hecho a medida* + 1 giftcard para vestido de novia equivalente a 500 soles</li>
                        </ul>
                        <p>Términos y condiciones: Tiempo de confección: 3 semanas a partir de la primera prueba. Vigencia de la promoción: Desde Mayo 2019 hasta enero 2020 en función al stock. Aplicable para vestidos a partir de los S/ 5,000 nuevos soles.</p>
                        <p>
                            <b className="font-size-1">GLOBALNET TRAVEL:</b>
                        </p>
                        <ul className="pl-3">
                            <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmt, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
                        </ul>
                        <p>exercitut atur aut odit aut  dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        
                        <hr/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles vw40 mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/blog-club-diamante" className="each-article-container flex mr-5  option-menu">
                        <img src={blog2} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5  option-menu">
                        <img src={blog3} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?</p>
                        </div>
                    </Link>
                    <Link to="blog-historia-sortija"className="each-article-container  flex mr-5  option-menu ">
                        <img src={blog4}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">HISTORIA DE LA SORTIJA DE COMPROMISO</p>
                        </div>
                    </Link>
                    <Link to="/carats"className="each-article-container  flex mr-5  option-menu">
                        <img src={blog5}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">LAS 5CS DIAMANTE PERÚ</p>
                        </div>
                    </Link>
                </div>
                <div className="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">DESTACADOS</h2>
                    <ul className="pl-3 pr-5 p-0-xs">
                        <li className="pt-2 pr-5">
                            <Link to="/color"className="pr-5  option-menu" href="/">COLOR</Link>
                        </li>
                        <li className="pt-2 pr-5">
                            <Link to="/claridad" className="pr-5  option-menu " href="/">CLARIDAD</Link>
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/certificacion-y-confianza" className="pr-5  option-menu ">CERTIFICACIÓN Y CONFIANZA</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/corte" className="pr-5  option-menu " href="/">CORTE</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
    </>
    )
};

export default Blog1;