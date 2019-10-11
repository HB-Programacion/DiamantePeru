import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Nav from "./Nav";
import historia from "../img/historia.svg"

const Historia = () =>{
    return (
        <div className="w100 flex gray responsive-certificacion animated fadeIn">
            <div className="w50 allCenter wResponsive100">
                <div className="mt-3">
                    <span className=" tex-size18 mt-0"> <b>HISTORIA <br/>DIAMANTE PERU</b></span>
                    <div class="container ">
                        <div id="carouselContent" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="interline1 carousel-item active text-center p-2 pl-3 pr-3">
                                    <p>DIAMANTE PERÚ E.I.R.L es un negocio familiar el cual fue fundado por el Sr. Gerardo Zela Salame
                                        Córdova quién en 1982 se Graduó como primer Gemólogo Peruano en el Gemological Institute of
                                        America (GIA). A lo largo de sus 14 años de instituida, la empresa siempre tuvo como objetivo principal
                                        el educar a las personas sobre este fascinante mundo de los diamantes para de esta forma evitar que
                                        pasen experiencias negativas.
                                        El Sr. Zela se inició en el mundo de la joyería influenciado por la relación comercial que tuvo su padre
                                        por muchos años con una joyería muy importante en nuestro país. Junto con su padre en el año 1976
                                        inició un negocio familiar donde se desempeñó como gerente general y gemólogo hasta 1992,
                                        posteriormente fue fundador de la escuela de joyería Asociación Cultural Benvenuto Cellini. Haciéndose
                                        cargo en el año 2004 de DIAMANTE PERÚ EIRL
                                        </p>
                                </div>
                                <div class="interline1 carousel-item text-center p-2 pl-3 pr-3">
                                    <p>inició un negocio familiar donde se desempeñó como gerente general y gemólogo hasta 1992,
                                        posteriormente fue fundador de la escuela de joyería Asociación Cultural Benvenuto Cellini. Haciéndose
                                        cargo en el año 2004 de DIAMANTE PERÚ EIRL.
                                        En Julio del 2012 su hijo Adrián Zela Terry se graduó también como Gemólogo en el Gemological
                                        Institute of America (GIA). Acto que los convierte en la primera familia con dos generaciones de
                                        Gemólogos Peruanos.
                                        En Julio del 2012 su hijo Adrián Zela Terry se graduó también como Gemólogo en el Gemological
                                        Institute of America (GIA). Acto que los convierte en la primera familia con dos generaciones de
                                        Gemólogos Peruanos.
                                        Acto que los convierte en la primera familia con dos generaciones de
                                        Gemólogos Peruanos</p>
                                </div>
                            </div>
                            <div className="">
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
            <div className="w50 bg-b1b6ba pt-3 pb-3 allCenter wResponsive100">
                <img  className="w100" src={historia} />
            </div>
        </div>
    )
}
export default Historia;