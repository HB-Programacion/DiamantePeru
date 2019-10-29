import React from "react";
import { Helmet } from "react-helmet";

import historia from "../img/foto-historia.png"
import Footer from "./Footer"

const Historia = () =>{
    return (
        <>
   <Helmet>
    <title>Testimonios - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Bodas,Testimonios,novios" />
  </Helmet>
        <div className="w100 gray flex responsive-certificacion animated fadeIn mb-5">
            <div className="w50 allCenter wResponsive100">
                <div className="mt-3">
                    <span className=" text-1-5 mt-0 raleway-light"><b>HISTORIA <br/>DIAMANTE PERÚ</b></span>
                    <div class="container ">
                        <div id="carouselContent" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner mb-2" role="listbox">
                                <div class="interline1 carousel-item active text-center p-2 pl-3 pr-3">
                                    <p  className="geosansLight">DIAMANTE PERÚ E.I.R.L. es un negocio familiar el cual fue fundado por el Sr. Gerardo Zela Salame
                                    Córdova quién en 1982 se Graduó como primer Gemólogo Peruano en el Gemological Institute of
                                    America (GIA). A lo largo de sus 14 años de instituida, la empresa siempre tuvo como objetivo principal
                                    el educar a las personas sobre este fascinante mundo de los diamantes para de esta forma evitar que
                                    pasen experiencias negativas.
                                    El Sr. Zela se inició en el mundo de la joyería influenciado por la relación comercial que tuvo su padre
                                    por muchos años con una joyería muy importante en nuestro país. Junto con su padre en el año 1976
                                    inició un negocio familiar donde se desempeñó como gerente general y gemólogo hasta 1992,
                                    posteriormente fue fundador de la escuela de joyería Asociación Cultural Benvenuto Cellini. Haciéndose
                                    cargo en el año 2004 de DIAMANTE PERÚ EIRL.
                                    </p>
                                </div>
                                <div class="interline1 carousel-item text-center p-2 pl-3 pr-3">
                                    <p className="geosansLight">En Julio del 2012 su hijo Adrián Zela Terry se graduó también como Gemólogo en el Gemological
                                    Institute of America (GIA). Acto que los convierte en la primera familia con dos generaciones de
                                    Gemólogos Peruanos.
                                    Debido a la creciente demanda en el mercado de diamantes de las mejores calidades en el país el Sr.
                                    Zela y su hijo Adrián viajaron a la Bolsa y Club de Diamantes de Israel en el año 2013 para firmar un
                                    acuerdo comercial, para poder comprar diamantes en bruto y tallarlos en una de las fábricas más
                                    modernas con lo último en tecnología de Israel, acto que nos permite adquirir diamantes de corte
                                    Excelente a un menor precio.
                                    Acto posterior en el año 2014 Diamante Perú comenzó una alianza comercial con una de las
                                    exportadoras más grandes de diamantes del mundo con sede principal en la India. Esta es una de las
                                    pocas empresas que tienen el privilegio de comprar diamantes directamente de las mineras más
                                    grandes del mundo (De Beers, Al Rosa, Rio Tinto).
                                    </p>
                                </div>
                                <div class="interline1 carousel-item text-center p-2 pl-3 pr-3">
                                    <p className="geosansLight">Luego en el año 2016 y siguiendo con el legado familiar, Gino Zela Terry, primer hijo del Sr. Gerardo Zela
                                    se graduó en el Gemological Institute of America (GIA) como maestro joyero y diseñador de joyas con
                                    tecnología 3D.
                                    Con el fin de brindarles el mejor producto a nuestros clientes, elegimos de manera personalizada cada
                                    diamante verificando su calidad rigurosamente, con la profesionalidad que nos avala. Representamos a
                                    los más grandes Sightholders (empresas que compran diamantes directamente de las minas) a nivel
                                    mundial.
                                    Todos los diamantes con los que contamos son libres de conflicto, explotación de personas o compra de
                                    armas, ya que nos regimos bajo el tratado Kimberley Process Scheme, tratado que fue creado en el año
                                    2000.
                                    Diamante Perú te acompaña en los momentos más importantes de tu vida. Contamos con los joyeros
                                    artesanos con mayor experiencia a nivel nacional que crearán las joyas con diamantes de tus sueños.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <a class="" href="#carouselContent" role="button" data-slide="prev">
                                    <span class="" aria-hidden="true"><i class="fas fa-chevron-left arrow"></i></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="" href="#carouselContent" role="button" data-slide="next">
                                    <span class="" aria-hidden="true"><i class="fas fa-chevron-right arrow"></i></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w50 allCenter wResponsive100">
                <img  className="w100" src={historia} />
            </div>
        </div>
        {/* <Footer></Footer> */}
        </>
    )
}
export default Historia;