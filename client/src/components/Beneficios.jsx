import React from "react";

import imgconvenio1 from "../img/beneficios/D01.png";

import imgconvenio2 from "../img/beneficios/D02.png";
import imgconvenio3 from "../img/beneficios/D03.png";
import imgconvenio4 from "../img/beneficios/D04.png";
import imgconvenio5 from "../img/beneficios/D05.png";
import imgconvenio6 from "../img/beneficios/D06.png";

import { Helmet } from "react-helmet";
const Beneficios = () => {
    return(
        <div className="w100 pb-pt-4rem pt-5-xs animated fadeIn pb-9 gray fondo-shine">
          <Helmet>
            <title>Beneficios - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,beneficios,sortijas de compromiso, sortijas, sortijas para compromiso, adrian zela,gino zela, gemologos en peru, sortijas peru, gia,certificacion,sortijas en peru, sortijas lima, anillos en lima, sortijas de compromiso peru, anillos compromiso peru, anillo de compromiso, sortija compromiso, sortijas compromiso, compromiso sortijas, anillos peru, compromiso peru, bodas, matrimonio, pedida de mano, sortijas de matrimonio, aros de bodas, aros de compromiso, brillantes de compromiso peru, brillantes compromiso, brillantes peru, diamantes en el Peru, diamantes peru, diamante peru, perubrillante, peru brillante, brillantes de compromiso, anillos en lima, anillos en trujillo, sortijas en arequipa, aros de matrimonio, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, jewellery shop peru, joyeria, gemologist peru, diamantes de compromiso peru, brillantes de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, gemologia peru, piedras preciosas, Peru Brillante, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio sortija de matrimonio, gemas, gemologia peru, piedras preciosas, diamantes en el peru, diamonds peru, diamantes peru, jewellery shop peru, gemologist peru, diamantes certificados en peru, anillos para novia con diamantes, anillos para novia con brillantes, sortijas para novia con diamantes, sortijas para novia con brillantes, sortijas con diamantes, sortijas con brillantes, aros de novios con diamantes, brillantes en el peru, anillos con diamantes, anillos con brillantes, gemologo en el peru, brillantes certificados en el peru, como comprar un diamante correctamente, como comprar un anillo de compromiso, como comprar un brillante correctamente, diamante peru, diamantes en el peru, diamantes peru, joyerias peru, joyas, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, piedras preciosas, diamantes en el peru, joyerias peru, joyeria, brillantes de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, diamantes en el peru, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, anillos de brillante, sortijas de brillante,  brillantes, aros de matrimonio, piedras preciosas, videos diamantes, joyas y diamantes, diamante bolivia, diamante colombia, diamante peru, diamantes bolivia, diamantes chile, diamantes en peru, peru diamante, diamantes bolivia, diamantes colombia, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia"></meta>
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
            <meta name="distribution" content="global"/>
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
                	<div className="carousel-inner carousel-inner1 " role="listbox">
                  		<div className="carousel-item active">
                    		<div className="row">
                      			<div className="col-md-12 cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter align-items-baseline  convenioResImg">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio5} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3  convenioRes geosansLight">
                            				<h4 className="card-title">SOCIOS CLUB DIAMANTE </h4>
                            				<p className="card-text font-size-1rem">Por tu compra en Diamante Perú obtienes:</p>
                            				<p className="interline1 font-size-1rem justify">
                              					Forma parte del Club Diamante y descubre todos
                              					los beneficios, sólo debes realizar una compra en Diamante Perú e inscribirte en nuestro
                              					formulario web con tu DNI en el siguiente link : <a className="text-center option-menu nav-link raleway-medium-italic" href=" http://bit.ly/2XxDMLA">Click Aquí</a>
                            				</p>
                            				<hr className="my-4"/>
                            				<p className="interline1 text-size07 geosansLight justify">
                                				Términos y Condiciones:<br></br>
                                				Descuentos exclusivos para clientes de DIAMANTE PERÚ,
                                				La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder al beneficio, el cliente y/o beneficiario debe registrarse en el formulario antes para solicitar la cita dando en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ. Esta promoción es válida con pago en efectivo o depósito en cuenta.
                            				</p>
                          				</div> 
                        			</div>
                      			</div>
                    		</div>
                  		</div>
                   		<div className="carousel-item">
                    		<div className="row">
                      			<div className="col-md-12  cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter align-items-baseline  convenioResImg">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio1} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3  convenioRes geosansLight">
                            				<h4 className="card-title">CARMEN SEMINARIO LA ATELIER</h4>
                            				<p className="card-text font-size-1rem">Por tu compra en Diamante Perú obtienes:</p>
                            				<ul className="interline1 ml-4 font-size-1rem">
                              					<li>10% de dscto en vestidos de novia a medida.</li>
                              					<li>15% de dscto en vestidos de fiesta a medida.</li>
                              					<li>15% de dscto en accesorios a pedido (zapatos, vanites, velo de novia)</li>
                              					<li>15% de dscto en vestidos de stock seleccionados</li>
                              					<li>15% de dscto en ternos a medida para caballeros</li>
                            				</ul>
                            				<hr className="my-4"/>
                            				<p className="interline1 text-size07 geosansLight justify">
                                				Términos y Condiciones:
												<br></br>Descuentos exclusivos para clientes de DIAMANTE PERÚ,
                                				La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ.<br></br>
                                 				Para acceder al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ.
                                 				<br></br>Promoción no acumulable con otros descuentos, vales, cupones y/o promociones vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta promoción es válida con pago en efectivo o depósito en cuenta.<br></br>
                                 				Local ubicado en: Av. Javier Prado Este 2456, 3er. Piso - San Borja.
												 <br></br>Horario de atención*: De Lunes a Viernes de 10am a 7pm / Sábados: 10am a 1pm. 
												<br></br>Teléfono de contacto: 2268364 
                                 				<br></br>PÁGINA WEB: www.carmenseminario.com
                                 				<br></br>contacto: atelier@carmenseminario.com
                            				</p>
                          				</div>
                        			</div>
                      			</div>
                    		</div>
                  		</div>
                  		<div className="carousel-item">
                    		<div className="row">
                      			<div className="col-md-12  cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter align-items-baseline  convenioResImg">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio3} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3 convenioRes geosansLight">
                            				<h4 className="card-title">EL TALLER BY CARMEN SEMINARIO 
												<br/>Alianza comercial - Carmen Seminario y Club Diamante Perú
                            				</h4>
                            				<h3 className="interline1 font-size-1rem">
                            					Datos de la alianza  
												<br/>Vigencia: Del 30 de abril 2019 al 30 de abril 2020
											</h3>
                            				<p className="card-text font-size-1rem">El establecimiento ofrece:</p>
                            				<ul className="interline1 ml-4 font-size-1rem">
                              					<li>15% de descuento en ternos amedida para caballeros. **</li>
                            				</ul>
                            				<hr className="my-4"/>
                            				{/* <p className="interline1 text-size12 geosansLight justify"></p> */}
                              				<p className="mb-0 interline1 text-size07 geosansLight justify" >
                              					Términos y Condiciones:<br></br>
                                				Descuento exclusivamente a clientes del CLUB DIAMOND, valido del 30 de abril 2019
                              					al 30 de abril 2020.</p>
                              				<p className="mb-0 interline1 text-size07 geosansLight justify" >El descuento no es acumulable o valido con otras promociones.
                              					Los descuentos son en efectivo o en tarjeta de crédito (+ 5%).
                              					No hay un límite de compras por el cliente.</p>
                              				<p className="mb-0 interline1 text-size07 geosansLight justify" >** El descuento del 15% en ternos, aplica solo para las telas italianas y para los sacos y pantalones.</p>
                              				<p className="mb-0 interline1 text-size07 geosansLight justify" >DATOS 
											  	<br/>EL ATELIER DE CARMEN SEMINARIO
												<br/>CAISEM EIRL.
												<br/>RUC: 20492756173
												<br/>AV. JAVIER PRADO ESTE 2456 - 3ER. PISO - SAN BORJA
											</p>  
                          				</div>
                         			</div>
                      			</div>
                    		</div>
                  		</div>
                  		<div className="carousel-item">
                    		<div className="row">
                      			<div className="col-md-12  cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter convenioResImg align-items-baseline ">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio2} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3 convenioRes geosansLight">
                            				<h4 className="card-title">AGENCIA DE VIAJES GLOBAL NET</h4>
                            				<p className="card-text font-size-1rem">Por tu compra en Diamante Perú obtienes:</p>
                            				<ul className="interline1 ml-4 font-size-1rem">
                              					<li>10% De Descuento En servicios de alojamiento y traslados a los Destinos del Caribe.</li>
                              					<li>15% De Descuento En tarjetas de asistencia al viajero.</li>                             
                            				</ul>
                            				<hr className="my-4"/>
                            				<p className="interline1 text-size07 geosansLight justify">
                                                Términos y Condiciones:
												<br></br>Descuentos exclusivos para clientes de DIAMANTE PERÚ, válido del viernes 30 de
                            					agosto 2019 al martes 31 de diciembre del 2019.
                            					La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá
                            					y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder
                            					al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando
                            					en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERÚ.
                            					Promoción no acumulable con otros descuentos, vales, cupones y/o promociones
                            					vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta
                            					promoción es válida con pago en efectivo o depósito en cuenta. Horario de atención*:
                            					De Lunes a Viernes de 09:30am a 6pm / Sábados: 09:30am a 12:30pm. 
												<br></br> Teléfono de
                            					contacto: 981396725 
												<br></br>
                        						<a className="option-menu" href=" https://facebook.com/viajesglobalnet">FAN PAGE: www.facebook.com/viajesglobalnet</a><br></br>
                            					<a  className="option-menu" href=" www.viajesglobalnet.com">PÁGINA WEB: www.viajesglobalnet.com</a>   
												<br></br>contacto: asesor@viajesglobalnet.com
                            				</p>
                          				</div>
                        			</div>
                      			</div>
                    		</div>
                  		</div>
              			<div className="carousel-item">
                    		<div className="row">
                      			<div className="col-md-12  cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter align-items-baseline  convenioResImg">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio4} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3  convenioRes geosansLight">
                            				<h4 className="card-title">PAGOS SIN INTERESES - BBVA</h4>
                            				<p className="card-text font-size-1rem"> BBVA: Compra la joya perfecta hasta en 03 meses sin intereses.</p>
                            				<p className="interline1 text-size12  justify">
                            					<ul className="interline1 ml-4 font-size-1rem">
                              						<li> Beneficio aplicable con todas las tarjetas de crédito del Banco BBVA. Aplica para realizar compras de
                              						piezas listas y por confección.</li>
                            					</ul>
												<hr className="my-4"/>
                           						<p class="mb-0 interline1 text-size07 geosansLight justify">  
											   		Horario de atención*: De Lunes a Viernes de 10:00am a 7pm / Sábados:10:00am a 05:00pm. (Refrigerio 2:00 – 3:00pm)  
													<br></br>Teléfonos de contacto: 241-8536 ó 445-6139  
													<br></br>
                            						<a className="option-menu" href="http:///facebook.com/DiamantePeruOficial">  FANPAGE: www.facebook.com/DiamantePeruOficial</a>
                            						<br></br> <a  className="option-menu" href="http://diamanteperu.com">WEB: www.diamanteperu.com</a>  
													<br></br>Contacto: info@diamanteperu.com
                            					</p>   
                              				</p>
                           				</div>
                        			</div>
                      			</div>
                    		</div>
                  		</div>
						<div className="carousel-item">
                    		<div className="row">
                      			<div className="col-md-12  cont-ben">
                        			<div className="mb-2  flex flexWrap adap-width">
                          				<figure className="w50 allCenter align-items-baseline  convenioResImg">
                            				<img className=" w70 rounded-circle  ben-round" src={imgconvenio6} alt="Beneficio 2"/>
                          				</figure>
                          				<div className="card-body w50 p-3  convenioRes geosansLight">
                            				<h4 className="card-title">PAGOS SIN INTERESES - DINERS CLUB</h4>
                              				<p className="card-text font-size-1rem">Compra la joya perfecta hasta en 06 meses sin intereses.</p>
                            				<p className="interline1 text-size12 justify ">
                                                <ul className="interline1 ml-4 font-size-1rem">
                              						<li>Beneficio aplicable con todas las tarjetas de crédito Diners Club. Aplica para realizar compras de
                                  						piezas listas y por confección.</li>
                              						<li>Beneficio aplicable con todas las tarjetas de crédito Diners Club. Aplica para realizar compras de
                                  						piezas listas y por confección.</li>
                              					</ul>
												<hr className="my-4"/>
                          						<p class="mb-0 interline1 text-size07 geosansLight justify">Horario de atención*: De Lunes a Viernes de 10:00am a 7pm / Sábados:
                            						10:00am a 05:00pm. (Refrigerio 2:00 – 3:00pm)  
													<br/>Teléfonos de contacto: 241-8536 ó 445-6139  
													<br/><a className="option-menu " href="http:///facebook.com/DiamantePeruOficial">FANPAGE: www.facebook.com/DiamantePeruOficial</a>
                            						<br/><a className="option-menu" href="http://diamanteperu.com">WEB: www.diamanteperu.com</a>  
													<br/>Contacto: info@diamanteperu.com
                           						</p>
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




