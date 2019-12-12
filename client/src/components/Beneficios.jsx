import React from "react";

import imgconvenio1 from "../img/beneficios/D01.png";

import imgconvenio2 from "../img/beneficios/D02.png";
import imgconvenio3 from "../img/beneficios/D03.png";
import imgconvenio4 from "../img/beneficios/D04.png";
import { Helmet } from "react-helmet";
const Beneficios = () => {
    return(
        <div className="w100 pb-pt-4rem pt-5-xs animated fadeIn pb-9 gray fondo-icon">
          <Helmet>
            <title>Beneficios - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
          </Helmet>
          <div className="flex around position-relative">
              <a className="btn-floating position-absolute top50vh left3" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
              <a className="btn-floating position-absolute top50vh right3" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
          </div>
          <span className="p-4 flex flexCenter text-size27"><b>BENEFICIOS</b></span>
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
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle  ben-round" src={imgconvenio1} alt="Beneficio 2"/>
                          </figure>
                       <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">SOCIOS </h4>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 ml-4 font-size-1rem">
                              <li>10% de dscto en vestidos de novia a medida.</li>
                              <li>15% de dscto en vestidos de fiesta a medida.</li>
                              <li>15% de dscto en accesorios a pedido (zapatos, vanites, velo de novia)</li>
                              <li>15% de dscto en vestidos de stock seleccionados</li>
                              <li>15% de dscto en ternos a medida para caballeros</li>
                            </ul>
                            <hr className="my-4"/>
                            <p className="interline1 text-size12 justify">
                                Términos y Condiciones:
                                Descuentos exclusivos para clientes de DIAMANTE PERÚ,
                                La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ. Promoción no acumulable con otros descuentos, vales, cupones y/o promociones vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta promoción es válida con pago en efectivo o depósito en cuenta. Local ubicado en: Av. Javier Prado Este 2456, 3er. Piso - San Borja. Horario de atención*: De Lunes a Viernes de 10am a 7pm / Sábados: 10am a 1pm. Teléfono de contacto: 2268364 / PÁGINA WEB: www.carmenseminario.com
                                contacto: atelier@carmenseminario.com
                            </p>
                          </div>
                      
                    
                     </div>
                      </div>
                    </div>
                  </div>
                   <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12  cont-ben">
                        <div className="mb-2  flex flexWrap">
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle  ben-round" src={imgconvenio1} alt="Beneficio 2"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">CARMEN SEMINARIO LA ATELIER</h4>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 ml-4 font-size-1rem">
                              <li>10% de dscto en vestidos de novia a medida.</li>
                              <li>15% de dscto en vestidos de fiesta a medida.</li>
                              <li>15% de dscto en accesorios a pedido (zapatos, vanites, velo de novia)</li>
                              <li>15% de dscto en vestidos de stock seleccionados</li>
                              <li>15% de dscto en ternos a medida para caballeros</li>
                            </ul>
                            <hr className="my-4"/>
                            <p className="interline1 text-size12 justify">
                                Términos y Condiciones:
                                Descuentos exclusivos para clientes de DIAMANTE PERÚ,
                                La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ. Promoción no acumulable con otros descuentos, vales, cupones y/o promociones vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta promoción es válida con pago en efectivo o depósito en cuenta. Local ubicado en: Av. Javier Prado Este 2456, 3er. Piso - San Borja. Horario de atención*: De Lunes a Viernes de 10am a 7pm / Sábados: 10am a 1pm. Teléfono de contacto: 2268364 / PÁGINA WEB: www.carmenseminario.com
                                contacto: atelier@carmenseminario.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12  cont-ben">
                        <div className="mb-2  flex flexWrap">
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle  ben-round" src={imgconvenio3} alt="Beneficio 2"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                          <h4 className="card-title"> 
                          EL TALLER BY CARMEN SEMINARIO <br/>
                          ALIANZA COMERCIAL - CARMEN SEMINARIO y CLUB DIAMOND DE DIAMANTE PERÚ:</h4>

                            <h3 className="card-title">VIGENCIA: DEL 30 DE ABRIL 2019 AL 30 DE ABRIL 2020</h3>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 ml-4 font-size-1rem">
                              <li>vale por S/. 500 de descuento en vestidos de novia a medida *</li>
                              <li>vale por S/. 300 de descuento en vestidos de novia a medida **</li>
                              <li>vale por S/. 200 de descuento en vestidos de fiesta a medida ***
</li>
                              <li>15% de descuento en accesorios a pedido (zapatos, vanite,velo de novia).</li>
                              <li>15% de descuento en vestidos de stock seleccionados.
</li>
<li>
15% de descuento en ternos amedida para caballeros. ****</li>
                            </ul>
                            <hr className="my-4"/>
                            <p className="interline1 text-size12 justify">
                             
CONDICIONES LEGALES:<br></br>
Descuento exclusivamente a clientes del CLUB DIAMOND, valido del 30 de abril 2019
al 30 de abril 2020.
El descuento no es acumulable o valido con otras promociones.
Los descuentos son en efectivo o en tarjeta de crédito (+ 5%).
No hay un límite de compras por el cliente.<br></br>
* Los S/.500 de descuento en vestidos de novia serán para los vestidos que tengan un
valor entre S/.6000 a S/10000<br></br>
** Los S/300 de descuento en vestidos de novia serán para los vestidos que tengan un
valor entre S/.3200 a S/. 5999<br></br>
*** Los S/.200 de descuento en vestidos de fiesta serán para aquellos que su valor sea
de S/1900 en adelante<br></br>
**** El descuento del 15% en ternos, aplica solo para las telas italianas y para los
sacos y pantalones.<br></br>
DATOS<br></br>
EL ATELIER DE CARMEN SEMINARIO<br></br>
CAISEM EIRL.<br></br>
RUC: 20492756173<br></br>
AV. JAVIER PRADO ESTE 2456 - 3ER. PISO - SAN BORJA
                            </p>
                          </div>



                         




                       
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12  cont-ben">
                        <div className="mb-2  flex flexWrap">
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle  ben-round" src={imgconvenio2} alt="Beneficio 2"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">AGENCIA DE VIAJES GLOBAL NET</h4>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 ml-4 font-size-1rem">
  
                              <li>10% De Descuento En servicios de alojamiento y traslados a los Destinos del Caribe.</li>
                              <li>15% De Descuento En tarjetas de asistencia al viajero.</li>
                             
                            </ul>
                            <hr className="my-4"/>
                            <p className="interline1 text-size12 justify">
                                                        Términos y Condiciones:
                            Descuentos exclusivos para clientes de DIAMANTE PERÚ, válido del viernes 30 de
                            agosto 2019 al martes 31 de diciembre del 2019.
                            La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá
                            y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder
                            al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando
                            en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ.
                            Promoción no acumulable con otros descuentos, vales, cupones y/o promociones
                            vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta
                            promoción es válida con pago en efectivo o depósito en cuenta. Horario de atención*:
                            De Lunes a Viernes de 09:30am a 6pm / Sábados: 09:30am a 12:30pm. <br></br> Teléfono de
                            contacto: 981396725 <br></br>
                            <a className="option-menu" href=" https://facebook.com/viajesglobalnet">FAN PAGE: www.facebook.com/viajesglobalnet</a><br></br>
                            <a  className="option-menu" href=" www.viajesglobalnet.com">PÁGINA WEB: www.viajesglobalnet.com</a>   <br></br>
                            contacto: asesor@viajesglobalnet.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                 


              <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12  cont-ben">
                        <div className="mb-2  flex flexWrap">
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle  ben-round" src={imgconvenio4} alt="Beneficio 2"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">PAGOS SIN INTERESES</h4>
                            <p className="card-text font-size-1"> BBVA: Compra la joya perfecta hasta en 03 meses sin intereses.</p>
                            
                      
                            <p className="interline1 text-size12 justify">
                            Beneficio aplicable con todas las tarjetas de crédito del Banco BBVA. Aplica para realizar compras de
                            piezas listas y por confección. Horario de atención*: De Lunes a Viernes de 10:00am a 7pm / Sábados:
                            10:00am a 05:00pm. (Refrigerio 2:00 – 3:00pm)  <br></br>Teléfonos de contacto: 241-8536 ó 445-6139  <br></br>
                            <a  className="option-menu" href="http:///facebook.com/DiamantePeruOficial">  FANPAGE: www.facebook.com/DiamantePeruOficial</a>
                            <br></br> <a  className="option-menu" href="http://diamanteperu.com">WEB: www.diamanteperu.com</a>  <br></br>
                            Contacto: info@diamanteperu.com
                            </p>
                      
                                    <hr className="my-4"/>
                            <p className="card-text font-size-1">      BBVA: Compra la joya perfecta hasta en 06 meses sin intereses.</p>
                        
         
                         
                         
                            <p className="interline1 text-size12 justify">
                               

                            Beneficio aplicable con todas las tarjetas de crédito Diners Club. Aplica para realizar compras de
                            piezas listas y por confección. Horario de atención*: De Lunes a Viernes de 10:00am a 7pm / Sábados:
                            10:00am a 05:00pm. (Refrigerio 2:00 – 3:00pm)  <br></br>Teléfonos de contacto: 241-8536 ó 445-6139  <br></br>
                            <a  className="option-menu" href="http:///facebook.com/DiamantePeruOficial">  FANPAGE: www.facebook.com/DiamantePeruOficial</a>
                            <br></br> <a  className="option-menu" href="http://diamanteperu.com">WEB: www.diamanteperu.com</a>  <br></br>
                            Contacto: info@diamanteperu.com
                            </p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                </div>
            </div>
        </div>
      )};
export default Beneficios;




