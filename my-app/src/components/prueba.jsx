import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'
import Footer from "./Footer"

import foto1 from "../img/Clip.png";

const blogPrueba= () => { 
    
    
return (

<>
        <div className="gray vw100 animated fadeIn pb-4">
     
         
           <div >
                <img className="vw100  vh50" src={foto1} alt="" srcset=""/>
           </div>

<div className="vw100 flex">
<article className="container-article vw60 ">
<div className="m-5">
    <div className="container-title mb-5 text-white black">
    <div className="p-3">
    <h1>LAS 5 C DE DIAMANTE </h1>
     <p>En DIAMANTE PERÚ trabajamos con las mejores calidades,elegidas rigurosamente por profesionales de la ciencia</p>

    </div>
     </div>

<div className="container-text ">
<p>
El valor del diamante está determinado por 4 factores, no interesando el orden de éstos que son :Corte, Color, Claridad ,Carat (unidad de peso).A continuación te explicamos spbre estos factores:
</p>
<h2>CORTE (TALLADO)</h2>
<p>Acabado de Tallado: El corte de un diamante es fundamental para brindar máxima dispersión de luz. Un diamante mal tallado no muestra el brillo y destello de luz que lo caracteriza y por ende pierde su encanto.</p>
<p>

Forma: La forma de tallado tradicional de un diamante hoy en día es el corte brillante (redondo), este recibe su nombre porque es el corte que maximiza el brillo y dispersión. Asimismo el diamante puede ser tallado en distintas formas y a estos tipos de cortes se les denomina “fancy cut” que quiere decir corte fascinante. Algunos ejemplos: Princesa, Corazón, Pera, Marquesa, Cojín y Esmeralda.
</p>


<hr/>
<div className="contact">
<a href="" className="">
                <img className="" src=""></img>
             </a>
             <a href=""  className="">
                 
                <img  className="" src=""></img>
             </a></div>
           
</div>

</div>


</article>

<div class="container-another-articles vw40 mt-4 mr-4 mb-4">
    <div class="rel-art m-3 mb-4  ">
        <h3>ARTÍCULOS RELACIONADOS</h3>
        
        <div class="each-article-container  flex mr-5">
            <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                <div class="text-each-rel-art mr-5 mr-5">
                <p class="mb0 mr-5 ml-3">AL AIRE:Los aros de boda de Yaco Y Natalie</p>
                </div>
   </div>
      <div class="each-article-container  flex mr-5">
                    <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
        <div class="text-each-rel-art mr-5 mr-5">
                            <p class="mb0 mr-5 ml-3">Los Diamantes que usan las estrellas</p>
      </div>
        </div>
        <div class="each-article-container  flex mr-5">
                                <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                                    <div class="text-each-rel-art mr-5"><p class="mb0 mr-5 ml-3">Top Diamantes más usados en el Perú</p>
                                    </div>
        </div>
      <div class="each-article-container  flex mr-5">
                                        <img src="/static/media/Clip.9b01f968.png" alt="" class="img-art-rel"/>
                                            <div class="text-each-rel-art mr-5">
                                            <p class="mb0 mr-5 ml-3">Maju Mantilla, siempre Diamante</p></div>
            </div>
     </div>
                                            <div class="popular-art m-3">
                                                <h2>POPULARES</h2>
                                                <ul class="pl-3 pr-5">
                                                    <li class="pt-2 pr-5">
                                                        <a class="pr-5 " href="/">El Perú : Nuevo mercado para los Diamantes </a>
                                                        </li>
                                                        <li class="pt-2 pr-5">
                                                            <a class="pr-5 "href="/">Diamantes para Ellas : Sorprendela en San Valetín</a>
                                                            </li>
                                                            <li class="pt-2 pr-5"> 
                                                            <a href="/">Se incrementa la vista de Diamantes por San Valentín</a> 
                                                            </li><li class="pt-2 pr-5"> 
                                                            <a class="pr-5 " href="/">
                                                               ¿Diamante o Rubí? </a> 
                                                               </li>
                                                               </ul>
                                                               </div>
                                                               </div>

</div>
</div>  
<Footer></Footer>
 </>

    )};

export default blogPrueba;