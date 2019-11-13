import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import foto1 from "../img/evitar-estafa.png";
import blog2 from "../img/blog2.png";
import blog1 from "../img/blog1.png";
import blog4 from "../img/blog4.png";
import blog5 from "../img/blog5.png";


const Blog3= () => { 
return (
    <>
    <div className="div-5cs animated fadeIn gray fondo-icon">
        <div >
            <img className="img-min-blog " src={foto1} alt="" srcSet=""/>
        </div>
        <div className="container-title text-white black-blog">
            <div className="title-article">
                <h1 className="raleway-semibold  font-size-2em">¿CÓMO EVITAR QUE LO ESTAFEN EN LA COMPRA DE UN DIAMANTE?:</h1>
                <p className=" raleway-regular font-size-1">Aquí te contamos todo lo que debes saber para comprar un diamante correctamente</p>
            </div>
        </div>
        <div className="div-5cs article-content flex d-block-xs">
            <article className="container-article w60rem xs-100">
                <div className="m-5 m-0-xs">
                    
                    <div className="container-text raleway-regular font-size-1em p-2 m-5">
                        <p>
                            Los fraudes comunes de los que debe cuidarse al adquirir un Diamante son los siguientes:
                        </p>
                        <p>
                            <b className="font-size-1">PESO TOTAL EN CARATS:</b>
                        </p>
                        <p>
                            Muchas veces la joyerías solo les mencionan cual es el peso de todos los diamantes juntos, sin embargo no detallan cuánto pesa el diamante central por separado. Esto impide que puedan
                            comparar precios con otras joyerías y genera que los clientes piensen que están adquiriendo un diamante mucho más grande y valioso. Esto es crucial porque un solo diamante cuesta más
                            que varios diamantes que pesen los mismo juntos. Por ejemplo, un diamante de 1.00 carats VS2/G cuesta muchos más que cuatro diamantes de 0.25 carats VS2/G. Es por ello que siempre
                            deben pedir que les detallen los pesos de los diamantes por separado.
                        </p>
                        <p>
                            <b className="font-size-1">PAGAS POR UN DIAMANTE Y TE DAN OTRO:</b>
                        </p>
                        <p>
                            Esta común estafa consta de que vas a una joyería, eliges un diamante que te gusta al precio que te acomoda, pero al momento que van a engastar el diamante en la sortija te lo 
                            cambian por otro de menor valor. Lamentablemente la mayoría de las personas no son expertas en la materia como para poder reconocer si es el mismo diamante o no. Esto genera que estés
                            pagando por un diamante pero te lleves uno de menor calidad y valor.
                        </p>
                        <p>
                            <b className="font-size-1">ESCONDIENDO FALLAS:</b>
                        </p>
                        <p>
                            Es recomendable ser muy cuidadoso al adquirir una sortija con el diamante ya engastado, esto se debe a que la mayoría de las veces los joyeros esconden las inclusiones por debajo de las
                            uñas de la sortija. Entonces te enseñan la sortija con el diamante pero lo que no sabes es que tiene una inclusión escondida. Esto genera que pienses que te estás comprando un diamante de mejor calidad de lo que realmente es.
                        </p>
                        <p>
                            <b className="font-size-1">DIAMANTE O ZIRCÓN:</b>
                        </p>
                        <p>
                            Hay muchas tiendas comerciales que venden joyas con piedras engastadas que ellos ofrecen como diamantes, 
                            sin embargo no son más que una imitación. Si uno no es experto en la materia es muy difícil detectar las diferencias entre un diamante y sus imitaciones.
                        </p>
                        <p>
                            <b className="font-size-1">CERTIFICACIÓN FRAUDULENTA:</b>
                        </p>
                        <p>
                            Existen en el mercado peruano muchos diamantes que vienen acompañados de supuestos certificados, sin embargo estos certificados son fraudulentos 
                            ya que son emitidos por personas inescrupulosas que intentan engañar al público adjudicándole al diamante una calidad que no es cierta. 
                            Estas tarjetas son impresas por personas que no son expertas en la materia y solo les ponen la calidad dependiendo de cuanto paguen por esa tarjeta. 
                            De igual manera no acepten certificados de supuestos laboratorios con nombres casi idénticos a los institutos de reconocimiento mundial, como sucede en el siguiente ejemplo: Gemological Institutions of America" (en vez de Gemological Institute of America).
                        </p>
                        <p>
                            <b className="font-size-1">CERTIFICADOS EMITIDOS POR LAS MISMAS JOYERÍAS:</b>
                        </p>
                        <p>
                            Es muy común que algunas joyerías vendan diamantes con certificados emitidos por las mismas casas comerciales. 
                            Es probable que incluso cuenten con un gemólogo que firme el documento, sin embargo esto no te garantiza que tu diamante es de la calidad que te están diciendo. 
                            Esto se debe a que en el Perú nadie cuenta con los equipos necesarios como para garantizar al 100% un certificado. Un gemólogo puede dar una opinión gemológica, que puede ser muy respetada o muy cuestionada. Asimismo no es considerado ético que las joyerías
                            actúen como juez y parte, ya que cuando evalúen el diamante vas a ser más probable que su criterio los lleve a ser mucho más generosos con el diamante.
                        </p>
                        <p>
                            <b className="font-size-1">SOLUCIÓN:</b>
                        </p>
                        <p>
                            Para protegerse contra las estafas comunes en el comercio de los Diamantes se recomienda hacer lo siguiente:
                        </p>
                        <p>
                            En primer lugar siempre pedir que su diamante venga acompañado de un certificado emitido por un laboratorio de reconocimiento mundial, En Diamante Perú únicamente brindamos la certificación por éste laboratorio. 
                            Gemological Institute of America o GIA es La autoridad máxima en lo que a investigación y certificación de diamantes se refiere.
                        </p>
                        <p>
                            En segundo lugar todos los diamantes certificados por este instituto tienen en la cintura del diamante grabado con láser el número del certificado. Esto sirve como medida de seguridad
                            para que los clientes sepan que el documento le corresponde al diamante. De igual manera todos cuentan con un servicio de verificación en línea. Esto consta de ingresar a la página web
                            respectiva en introducir algunos datos del certificado y verificar que los datos que aparecen en el certificado físico concuerdan con los datos del certificado en línea. 
                            Esto impide que sean engañados con un certificado emitido de manera fraudulenta.
                        </p>
                        <p>
                            Por último lo más recomendable es ir a un lugar donde le ofrezcan todo lo que se menciona en la parte superior y que sea un lugar en el que usted confíe. 
                            Lo principal es que se sienta cómodo, que sean transparentes y que se muestren voluntariosos ante todas las preguntas que usted tenga. 
                            Si en algún momento siente que se le está ocultando algo sospeche que algo no anda bien y retírese. Al fin y al cabo comprar un diamante para esa persona especial debe ser una experiencia cautivante e inolvidable.
                        </p>
                        <hr/>
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
                    <Link to="/carats"className="each-article-container  flex mr-5 option-menu">
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
                </div>
            </div>
        </div>
    </div>  
    </>
    )
};

export default Blog3;
