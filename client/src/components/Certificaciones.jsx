import React from "react";
import { Helmet } from "react-helmet";

import gia from "../img/GIA_logo.png"
import diamante from '../img/fondo-certificaciones-diamante.png'
import diamante1 from '../img/diplomas/CERTIFICACIONES_zela.png'
const Certificaciones = () => {
    return (
        <div className="w100 pb-pt-4rem fndo-certificaciones animated fadeIn">
               <Helmet>
            <title>Certificación - GIA - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
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
            <img src={gia} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
            <div className='interline1 pb-2 ml-15 pad-l-responsive'>
        <p>Contamos con profesionales altamente calificados Graduados también en este mismo Instituto
GIA, ellos nos respaldan.</p>
    </div>
           
            </div>   <figure className="w50 allCenter convenioResImg">
            <img src={diamante1} className='w100' alt="diamante"/>
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








//  <div className="flex p-4 responsive-certificacion">
// <div className="w50 flex flex-column alignSelCenter wResponsive100">
//     <img src={gia} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
//     <div className='interline1 pb-2 ml-15 pad-l-responsive'>
//         <p>Diamante Perú trabaja con las mejores calidades de diamantes, estos son certificados por el
// prestigioso instituto GIA, con inscripción láser de seguridad y verificación en línea.
// <br/>
// Contamos con profesionales altamente calificados Graduados también en este mismo Instituto
// GIA, ellos nos respaldan.</p>
//     </div>
// </div>
// <figure className="w50 flex flexCenter wResponsive100">
//     <img src={diamante} className='w70' alt="diamante"/>
// </figure>
// </div> 
