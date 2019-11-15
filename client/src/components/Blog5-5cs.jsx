import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import blog3 from "../img/blog3.png";
import blog2 from "../img/blog2.png";
import blog1 from "../img/blog1.png";
import blog4 from "../img/blog4.png";
import blog5 from "../img/blog5.png";
import color from "../img/color.png"
import claridad from "../img/claridad.png";
import corte from "../img/corte.png"

import blog6 from "../img/certificacionYConfianza.png";

import { Helmet } from "react-helmet";
const Blog3= () => { 
return (
    <>
       <Helmet>
    <title>5CS Blog - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
</Helmet>
    <div className="div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={blog5} alt="" srcSet=""/>
        </div>
        <div className="container-title text-white black-blog">
            <div className="title-article">
                <h1 className="raleway-semibold mb-4 font-size-2em">Las 5 Cs de Diamante Perú:</h1>
                <p className=" raleway-regular font-size-1">Aquí te contamos todo lo que debes saber para comprar un diamante correctamente</p>
            </div>
        </div>
        <div className="div-5cs article-content flex d-block-xs">
            <article className="container-article w60rem xs-100">
                <div className="m-5 m-0-xs">
                    <div className="container-text raleway-regular font-size-1em p-2 m-5">
                    <div className="container p-4 mt-3 mt4-xs">
                    <div className="row flexCenter ">

                        <Link to="/color" className="col-sm-6 col-md-6 mb-5 text-dec-black">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={color} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>COLOR</b></h5>
                                    <hr className="my-3"/>
                                    <p className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/claridad" className="col-sm-6 col-md-6 mb-5 text-dec-black">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={claridad} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>CLARIDAD</b></h5>
                                    <hr className="my-3"/>
                                    <p className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/certificacion-y-confianza"  className="col-sm-6 col-md-6 mb-5 text-dec-black">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={blog6} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>CERTIFICACIÓN Y CONFIANZA</b></h5>
                                    <hr className="my-3"/>
                                    <p to="/certificacion-y-confianza" className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/corte"  className="col-sm-6 col-md-6 mb-5 text-dec-black">
                            <div className="card" style={{width: "18 rem"}}>
                                <img src={corte} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>CORTE</b></h5>
                                    <hr className="my-3"/>
                                    <p to="/corte" className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/carats" className="col-sm-6 col-md-6 mb-5 text-dec-black">
                            <div className="card " style={{width: "18 rem"}}>
                                <img src={blog5} className="w100" alt="..."/>
                                <div className="card-body p-3">
                                    <h5 className="card-title"><b>CARATS</b></h5>
                                    <hr className="my-3"/>
                                    <p className="option-menu ">LEER MÁS<i className="fas fa-chevron-right arrow"></i></p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/blog-club-diamante" className="each-article-container flex mr-5 option-menu">
                        <img src={blog2} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog1} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">SORTEO APERTURA CLUB DIAMANTE</p>
                        </div>
                    </Link>
                    <Link to="blog-historia-sortija"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog4}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">HISTORIA DE LA SORTIJA DE COMPROMISO</p>
                        </div>
                    </Link>
                    <Link to="/blog-evitar-estafa"className="each-article-container  flex mr-5 option-menu">
                        <img src={blog3}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?</p>
                        </div>
                    </Link>
                </div>
                {/* <div className="popular-art m-3">
                    <h2 className="font-size-2em raleway-semibold-italic">DESTACADOS</h2>
                    <ul className="pl-3 pr-5 p-0-xs">
                        <li className="pt-2 pr-5">
                            <Link to="/color"className="pr-5 option-menu " href="/">COLOR</Link>
                        </li>
                        <li className="pt-2 pr-5">
                            <Link to="/claridad" className="pr-5 option-menu" href="/">CLARIDAD</Link>
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link className=" option-menu" to="/certificacion-y-confianza">CERTIFICACIÓN Y CONFIANZA</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/corte"className=" option-menu" href="/">CORTE</Link> 
                        </li>
                        <li className="pt-2 pr-5"> 
                            <Link to="/carats"className=" option-menu" href="/">CARATS</Link> 
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </div>  
    </>
    )
};

export default Blog3;
