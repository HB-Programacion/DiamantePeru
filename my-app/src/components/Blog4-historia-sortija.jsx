import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import foto1 from "../img/blog4.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";
import blog1 from "../img/blog1.png";
import blog5 from "../img/blog5.png";

const Blog4= () => { 
    return (
    <>
    <div className="div-5cs animated fadeIn pb-4">
        <div >
            <img className="img-min-blog " src={foto1} alt="" srcset=""/>
        </div>
        <div className="div-5cs  flex d-block-xs">
            <article className="container-article vw60 xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-title mb-5 text-white black">
                        <div className="title-article">
                            <h1 className="raleway-semibold mb-4 font-size-2em">HISTORIA DE LA SORTIJA DE COMPROMISO:</h1>
                            <p className=" raleway-regular font-size-1">¿Sabías la historia de cómo se instituyó la tradición del anillo de compromiso?, aquí te la contamos</p>
                        </div>
                    </div>
                    <div className="container-text raleway-regular font-size-1em p-2">
                        <p>
                            Fue en Inglaterra donde comenzó la tradición de la sortija de compromiso.
                        </p>
                        <p>
                            En el siglo XV un Lord ingles de quien todas las doncellas estaban enamoradas, en contra de las costumbres de su época se enamoró de una plebeya y deseaba que ella sea aceptada por la nobleza de ese entonces.
                        </p>
                        <p>
                            En su desesperación consultó con su consejero (sabio de esa época) y le preguntó qué podía hacer para que su amada sea vista en el mismo nivel social. 
                            El sabio le dijo que consiguiera un diamante y lo engastara en una sortija de oro y que se lo ponga en el dedo anular de la mano izquierda. 
                            Dicha sortija tenía que ser entregada en una fiesta donde estuviesen todos los nobles.</p>
                        <p>
                            El Lord Ingles siguió las indicaciones y en la primera ocasión se acercó donde su amada y le dijo:  “te entrego esta sortija de compromiso como promesa de amor, pues el diamante es eterno, y no hay nada en este mundo que lo pueda desgastar, 
                            y te lo pongo en el dedo anular de la mano izquierda porque hay una vena que va directamente a tu corazón".
                        </p>
                        <p>
                            Ante tan romántico acto todas las doncellas exigieron a sus pretendientes que siguieran este lindo gesto. Instituyéndose de esta manera la hermosa tradición que se perpetua hasta nuestros días.
                        </p>
                        <hr/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles vw40 mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/blog-club-diamante" className="each-article-container flex mr-5">
                        <img src={blog2} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5">
                        <img src={blog3} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?</p>
                        </div>
                    </Link>
                    <Link to="blog-historia-sortija"className="each-article-container  flex mr-5">
                        <img src={blog1}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">SORTEO APERTURA CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="/carats"className="each-article-container  flex mr-5">
                        <img src={blog5}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">LAS 5CS DIAMANTE PERÚ</p>
                        </div>
                    </Link>
                </div>
                <div className="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">POPULARES</h2>
                    <ul className="pl-3 pr-5 p-0-xs">
                        <li className="pt-2 pr-5">
                            <Link to="/color"className="pr-5 " href="/">COLOR</Link>
                        </li>
                        <li className="pt-2 pr-5">
                            <Link to="/claridad"className="pr-5 "href="/">CLARIDAD</Link>
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/certificacion-y-confianza">CERTIFICACIÓN Y CONFIANZA</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/corte"className="pr-5 " href="/">CORTE</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/carats"className="pr-5 " href="/">CARATS</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
    </>
    )
    
};

export default Blog4;
