import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import foto1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/evitar-estafa.png";
import blog4 from "../img/blog4.png";

import blog5 from "../img/5C-cover/COVER.png";
import { Helmet } from "react-helmet";
import foto2 from "../img/carats-fondo.png";
import claridad from "../img/claridad.png";
import color from "../img/color.png";
import corte from "../img/corte.png";
import certificacion from "../img/certificacionYConfianza.png";

const Blog1= () => { 
return (
    <>   <Helmet>
    <title>Sorteo Club Diamante - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,blog,mantenimiento,5cs,4cs,sortijas de compromiso, sortijas, sortijas para compromiso, adrian zela,gino zela, gemologos en peru, sortijas peru, gia,certificacion,sortijas en peru, sortijas lima, anillos en lima, sortijas de compromiso peru, anillos compromiso peru, anillo de compromiso, sortija compromiso, sortijas compromiso, compromiso sortijas, anillos peru, compromiso peru, bodas, matrimonio, pedida de mano, sortijas de matrimonio, aros de bodas, aros de compromiso, brillantes de compromiso peru, brillantes compromiso, brillantes peru, diamantes en el Peru, diamantes peru, diamante peru, perubrillante, peru brillante, brillantes de compromiso, anillos en lima, anillos en trujillo, sortijas en arequipa, aros de matrimonio, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, jewellery shop peru, joyeria, gemologist peru, diamantes de compromiso peru, brillantes de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, gemologia peru, piedras preciosas, Peru Brillante, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio sortija de matrimonio, gemas, gemologia peru, piedras preciosas, diamantes en el peru, diamonds peru, diamantes peru, jewellery shop peru, gemologist peru, diamantes certificados en peru, anillos para novia con diamantes, anillos para novia con brillantes, sortijas para novia con diamantes, sortijas para novia con brillantes, sortijas con diamantes, sortijas con brillantes, aros de novios con diamantes, brillantes en el peru, anillos con diamantes, anillos con brillantes, gemologo en el peru, brillantes certificados en el peru, como comprar un diamante correctamente, como comprar un anillo de compromiso, como comprar un brillante correctamente, diamante peru, diamantes en el peru, diamantes peru, joyerias peru, joyas, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, piedras preciosas, diamantes en el peru, joyerias peru, joyeria, brillantes de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, diamantes en el peru, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, anillos de brillante, sortijas de brillante,  brillantes, aros de matrimonio, piedras preciosas, videos diamantes, joyas y diamantes, diamante bolivia, diamante colombia, diamante peru, diamantes bolivia, diamantes chile, diamantes en peru, peru diamante, diamantes bolivia, diamantes colombia, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia"></meta>
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
                <h1 className="raleway-semibold mb-4 font-size-2em">SORTEO APERTURA CLUB DIAMANTE:</h1>
                <p className=" raleway-regular font-size-1">¡ Inauguramos Club Diamante, conoce más sobre el sorteo por apertura !</p>
            </div>
        </div>
        <div className="div-5cs article-content flex d-block-xs">
            <article className="container-article w60rem xs-100">
                <div className="m-5 m-0-xs">
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
                            <li> 10% De Descuento En servicios de alojamiento y traslados a los Destinos del Caribe.</li>
                            <li>15% De Descuento En tarjetas de asistencia al viajero.</li>
                        </ul>
                        <p>         Términos y Condiciones:
                            Descuentos exclusivos para clientes de DIAMANTE PERÚ, válido del viernes 30 de
                            agosto 2019 al martes 31 de diciembre del 2019.
                            La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá
                            y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder
                            al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando
                            en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ.
                            Promoción no acumulable con otros descuentos, vales, cupones y/o promociones
                            vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta
                            promoción es válida con pago en efectivo o depósito en cuenta.</p>
                        
                        <hr/>
                    </div>
                </div>
            </article>
            <div className="container-another-articles w40rem mt-4 mt-4-xs mr-4 mb-4 p-2">
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
                    <Link to="/blog-historia-sortija"className="each-article-container  flex mr-5  option-menu ">
                        <img src={blog4}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">HISTORIA DE LA SORTIJA DE COMPROMISO</p>
                        </div>
                    </Link>
                    <Link to="/blog-5cs"className="each-article-container  flex mr-5  option-menu">
                        <img src={blog5}  alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">LAS 5CS DIAMANTE PERÚ</p>
                        </div>
                    </Link>
                </div>
                <div className="rel-art m-3 mb-4  ">
                    <h3 className="font-size-2em raleway-semibold-italic">DESTACADOS</h3>
                    <Link to="/carats" className="each-article-container flex mr-5  option-menu">
                        <img src={foto2} alt="" className="img-art-rel"/>
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


                    <Link to="/claridad"className="each-article-container  option-menu  flex mr-5" href="/"> <img src={claridad} alt="" className="img-art-rel"/>
                        <div className="text-each-rel-art">
                            <p className="mb0 ml-3">CLARIDAD</p>
                        </div></Link>
                </div>
                </div>
              
              
              
        </div>
    </div>  
    </>
    )
};

export default Blog1;