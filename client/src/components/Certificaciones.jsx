import React from "react";
import { Helmet } from "react-helmet";

import gia from "../img/GIA_logo.png"
import giaInst from "../img/GIA_PNG.png"
import giaInstSpace from "../img/DIAMANTE_GIA-img1.png"

import diamante from '../img/CERTIFICACIONES_gia.png'
import diamante1 from '../img/diplomas/CERTIFICACIONES_gerardo.png'
import diamante2 from '../img/diplomas/CERTIFICACIONES_gino.png'
import diamante3 from '../img/diplomas/CERTIFICACIONES_adrian.png'
const Certificaciones = () => {
    return (
        <div className="w100 pb-pt-4rem fndo-certificaciones  fondo-shine animated fadeIn">
               <Helmet>
            <title>Certificación - GIA - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,certificacion,sortijas de compromiso, sortijas, sortijas para compromiso, adrian zela,gino zela gemologos en peru, sortijas peru, gia,certificacion,sortijas en peru, sortijas lima, anillos en lima, sortijas de compromiso peru, anillos compromiso peru, anillo de compromiso, sortija compromiso, sortijas compromiso, compromiso sortijas, anillos peru, compromiso peru, bodas, matrimonio, pedida de mano, sortijas de matrimonio, aros de bodas, aros de compromiso, brillantes de compromiso peru, brillantes compromiso, brillantes peru, diamantes en el Peru, diamantes peru, diamante peru, perubrillante, peru brillante, brillantes de compromiso, anillos en lima, anillos en trujillo, sortijas en arequipa, aros de matrimonio, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, jewellery shop peru, joyeria, gemologist peru, diamantes de compromiso peru, brillantes de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, gemologia peru, piedras preciosas, Peru Brillante, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio sortija de matrimonio, gemas, gemologia peru, piedras preciosas, diamantes en el peru, diamonds peru, diamantes peru, jewellery shop peru, gemologist peru, diamantes certificados en peru, anillos para novia con diamantes, anillos para novia con brillantes, sortijas para novia con diamantes, sortijas para novia con brillantes, sortijas con diamantes, sortijas con brillantes, aros de novios con diamantes, brillantes en el peru, anillos con diamantes, anillos con brillantes, gemologo en el peru, brillantes certificados en el peru, como comprar un diamante correctamente, como comprar un anillo de compromiso, como comprar un brillante correctamente, diamante peru, diamantes en el peru, diamantes peru, joyerias peru, joyas, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, piedras preciosas, diamantes en el peru, joyerias peru, joyeria, brillantes de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, diamantes en el peru, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, anillos de brillante, sortijas de brillante,  brillantes, aros de matrimonio, piedras preciosas, videos diamantes, joyas y diamantes, diamante bolivia, diamante colombia, diamante peru, diamantes bolivia, diamantes chile, diamantes en peru, peru diamante, diamantes bolivia, diamantes colombia, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia"></meta>
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
        </Helmet>
        <div className="flex around position-relative">
<a className="btn-floating position-absolute top50vh left3" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
<a className="btn-floating position-absolute top50vh right3" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
</div>

<div className="container my-4">
<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
  <ol className="carousel-indicators cind-ben">
    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
    <li data-target="#multi-item-example" data-slide-to="3"></li>
    <li data-target="#multi-item-example" data-slide-to="4"></li>
    
  </ol>
  <div className="carousel-inner" role="listbox">
 
  <div className="carousel-item active">
      <div className="row">
        <div className="col-md-12  cont-ben">
          <div className="mb-2  flex flexWrap">
           <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
            <img src={gia} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
                <p>Diamante Perú trabaja con las mejores calidades de diamantes, estos son certificados por el
                prestigioso instituto GIA, con inscripción láser de seguridad y verificación en línea.</p>
              
            </div>
                  
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={diamante} className='w100' alt="diamante"/>
            </figure>
          
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="row">
        <div className="col-md-12  cont-ben">
          <div className="mb-2  flex flexWrap">
           <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
         
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
                
                <p>Contamos con profesionales altamente calificados Graduados también en este mismo Instituto
                GIA, ellos nos respaldan.</p>
            </div>
                  
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={giaInstSpace} className='w100' alt="diamante"/>
            </figure>
          
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="row">
        <div className="col-md-12  cont-ben">
          <div className="mb-2  flex flexWrap">
           <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
            <img src={giaInst} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
        
              <p>Gerardo Zela Gerente General y Fundador de Diamante Perú</p>
              <p>Es el Primer Gemólogo peruano especialista en diamantes</p>
              <p>Graduado en el prestigioso Instituto GIA (Gemological Institute of America).</p>
          </div>
           
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={diamante1} className='w100' alt="diamante"/>
            </figure>
          
          </div>
        </div>
      </div>
    </div>


 

    <div className="carousel-item ">
      <div className="row">
        <div className="col-md-12  cont-ben">
          <div className="mb-2  flex flexWrap">
           <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
            <img src={giaInst} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
              <p>Gino Zela, Jefe de Producción y control de calidad de Diamante Perú</p>
              <p>Diseñador y Joyero especialista en diamantes</p>
              <p>Graduado en el prestigioso Instituto GIA (Gemological Institute of America).</p>
           </div>
           
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={diamante2} className='w100' alt="diamante"/>
            </figure>
          
          </div>
        </div>
      </div>
    </div>


 


 
    <div className="carousel-item ">
      <div className="row">
        <div className="col-md-12  cont-ben">
          <div className="mb-2  flex flexWrap">
           <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
            <img src={giaInst} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
           
              <p> Adrián Zela, Subgerente de Diamante Perú</p>
              <p>Primera segunda generación del Perú como Gemólogo, especialista en diamantes</p>
              <p>Graduado en el prestigioso Instituto GIA (Gemological Institute of America).</p>
            </div>
                  
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={diamante3} className='w100' alt="diamante"/>
            </figure>
          
          </div>
        </div>
      </div>
    </div>


 



 
</div>
</div></div>
        </div>
    )
}
export default Certificaciones;



