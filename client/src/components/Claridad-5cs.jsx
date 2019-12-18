import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import foto1 from "../img/carats-fondo.png";
import claridad from "../img/claridad.png";
import color from "../img/color.png";
import corte from "../img/corte.png"
import certificacion from "../img/certificacionYConfianza.png"
import { Helmet } from "react-helmet";
import claridad1 from "../img/DIAMANTE_corte.png";

const Clarity= () => { 
return (
    <>
            <Helmet>
    <title>Claridad - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
    <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
</Helmet>
    <div className=" div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={claridad} alt="" srcSet=""/>
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
                        <h2 className="mb-4 mt-4 font-size-1 raleway-bold">CLARIDAD</h2>
                        <p>
                            Los diamantes son carbón puro cristalizado. Para que el carbón se cristalice en forma de diamante éste tiene que estar a una profundidad aproximada de 200 km; 
                            a ésta profundidad se encuentran todos los metales y minerales derretidos en una gran masa llamada magma. Es extremadamente común que al cristalizarse el carbón en diamante atrape a otros minerales y
                            cristales, a los cuales se les llama INCLUSIONES. Los mismos que erróneamente en el mercado son denominados carbones o imperfecciones. 
                            Vemos entonces que la mayoría de los diamantes contienen inclusiones (cristales, nubes, plumas etc.).
                        </p>
                        <p>
                            Los cristales son depósitos de mineral atrapados dentro de los diamantes, las nubes son pequeñas zonas de inclusiones que le dan un aspecto lechoso y las plumas son pequeñas rajaduras internas o 
                            clivajes que tiene la forma de una pluma. El tamaño, el relieve, la cantidad y la localización de estas inclusiones determinaran el grado de claridad del diamante y puede tener una incidencia sustancial en el valor de este. 
                            Naturalmente las inclusiones que no impiden el paso de la luz a través del diamante o que su visibilidad no afecte su belleza no tendrán un efecto sustancial en el precio.
                        </p>
                        <p>
                            Cada diamante debe ser examinado por lo menos por cinco gemólogos expertos y tres de ellos tienen que haber coincidido con este dictamen para que sea certificado y obtenga el grado de claridad.
                        </p>
                        <p>
                            La escala de grado de claridad es la siguiente:
                        </p>
                        <p>
                            <b>IF</b><br/>
                            Esta significa Internally Flawless (libre de inclusiones). Estas piedras son extremadamente escasas y raras de encontrar con su correspondiente certificado emitido por laboratorios reconocidos en el mercado mundial.
                        </p>
                        <p>
                            <b>VVS1; VVS2</b><br/>
                            Esto significa very very small inclusions (muy, muy pequeñas inclusiones). Para dar esta clasificación al diamante, los gemólogos expertos han tenido muchísima dificultad para ver las inclusiones con un microscopio binocular con un aumento de 10x . 
                            Estas inclusiones son imposibles de verlas a simple vista. Estas piedras son muy escasas y raras de encontrar con su
                            correspondiente certificado emitido por laboratorios reconocidos en el mercado mundial
                        </p>
                        <p>
                            <b>VS1; VS2</b><br/>
                            Esto significa very small inclusions (muy pequeñas inclusiones). Para dar esta clasificación al diamante, los gemólogos expertos han tenido cierta dificultad para ver las inclusiones con un microscopio binocular con un aumento de 10x.
                        </p>
                        <p>
                            Estas inclusiones son imposibles de verla a simple vista. Estas piedras son escasas y raras de encontrar con su correspondiente certificado emitido por laboratorios reconocidos en el mercado mundial.
                        </p>
                        <p>
                            <b>SI1; SI2</b><br/>
                            Esto significa slightly included (pocas inclusiones). Para dar esta clasificación al diamante, losgemólogos expertos han tenido cierta facilidad para ver las inclusiones con un microscopio binocular con un aumento de 10x . 
                            En algunos casos estas inclusiones podrán ser apreciadas a simple vista solo a través del cono, y en otros casos se pueden ver por la corona. 
                            Estas piedras se encuentran con mayor facilidad convirtiéndose en las más comerciales, porque muchas veces las inclusiones no se pueden apreciar a simple vista y por ende no afecta a la belleza del diamante
                        </p>
                        <p>
                            <b>I1; I2; I3</b><br/>
                            Esto significa Included (inclusiones). Para dar esta clasificación al diamante, para los gemólogos expertos han sido notorias las inclusiones con un microscopio binocular con un aumento de
                            10x. Las inclusiones de estos diamantes mayormente se podrán ver a simple vista. Estas piedras se encuentran con bastante facilidad, convirtiéndose en las más comunes.
                        </p>
                        <hr/>
                        <img className="w100"src={claridad1} alt=""/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">ARTÍCULOS RELACIONADOS</h3>
                    <Link to="/carats" className="each-article-container flex mr-5  option-menu">
                        <img src={foto1} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CARAT (UNIDAD DE PESO)</p>
                        </div>
                    </Link>
                    <Link to="/color" className="each-article-container  option-menu flex mr-5">
                        <img src={color} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">COLOR</p>
                        </div>
                    </Link>
                    <Link to="/corte"className="each-article-container  option-menu flex mr-5">
                        <img src={corte} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CORTE (TALLADO)</p>
                        </div>
                    </Link>
                    <Link to="/certificacion-y-confianza"className="each-article-container  option-menu  flex mr-5">
                        <img src={certificacion} alt="" className="img-art-rel"/>
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

export default Clarity;