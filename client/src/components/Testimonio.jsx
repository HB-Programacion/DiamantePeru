import React from "react";
import { Helmet } from "react-helmet";
import personM1 from "../img/personas/DIAMANTE_personas-fotos_06.png";
import personM2 from "../img/personas/DIAMANTE_personas-fotos_05.png";
import personM3 from "../img/personas/DIAMANTE_personas-fotos_04.png";
import personF1 from "../img/personas/DIAMANTE_personas-fotos_03.png";
import personF2 from "../img/personas/DIAMANTE_personas-fotos_02.png";
import personF3 from "../img/personas/DIAMANTE_personas-fotos_01.png";

const Testimonio = () => {
    return (
        <>
           <Helmet>
    <title>Testimonios - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Bodas,Testimonios,novios" />
  </Helmet>
        <div className="w100 pb-pt-4rem pb-9 pt-5 animated fadeIn fondo-testimonios ">
            <div className="flex position-relative">
              <a className="btn-floating position-absolute left3" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
              <a className="btn-floating position-absolute  right3" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
            </div>
          <span className="p-4 flex flexCenter text-size27"><b>TESTIMONIOS</b></span>
            <div className="container my-4">
              <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flex flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                        
                            {/* <img src={personM1}  alt="persona"className="foto-testimonio"/> */}

                            <p className="card-text interline1">"Tienen una atención de primera, la explicación es completísima, me encantó su página web".</p>
                            <p className="interline1 ">
                              Carlos
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2  flex flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">

                            {/* <img src={personM2} alt="persona" className="foto-testimonio"/> */}

                            <p className="card-text interline1">"Muy buen trabajo, el modelo  es tal cual lo solicite en el tiempo justo, dedicándole toda la atención necesaria, Gracias".</p>
                            <p className="interline1">
                                Felipe
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM3} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Excelente trabajo y atención considero que es una empresa de calidad y garantía, que tanto  yo  como cualquier otra persona estaría complacido de adquirir la sortija de compromiso en DIAMANTE PERÚ".</p>
                            <p className="interline1 ">
                              Ricardo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM1} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Estoy contento con el servicio brindado, puntualidad y directo en el trato, provoca una garantía y confianza única. Nos hace saber que estamos hablando con profesionales en el tema de diamantes".</p>
                            <p className="interline1 ">
                              José Antonio
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM2}  alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Tienen sin lugar a dudas productos de calidad, un excelente servicio y asesoría, me encanto su presentación me dejo sin palabras, estoy seguro que a mi novia le va a encantar!".</p>
                            <p className="interline1 ">
                              German
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img  src={personF1} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Vine un poco preocupada porque no hice el mantenimiento correspondiente a mi sortija tal como indican,no sabía cómo iba a quedar pero cuando me la entregaron estaba más que perfecta".</p>
                            <p className="interline1 ">
                              Antonella
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio ">
                            {/* <img src={personM3} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Ví los modelos en facebook, me encantaron e hice el trato vía correo electrónico, y todo quedo mejor de lo que  pensaba, muchas gracias".</p>
                            <p className="interline1 ">
                              Augusto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img  src={personM1}  alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"A mi esposa le encanto su página de facebook y me etiquetó en varios modelos así que fui a la oficina y le compre unos aretes por nuestro aniversario, ni se lo espera, muchas gracias, la atención y presentación es de primera".</p>
                            <p className="interline1 ">
                              Julio
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img  src={personM2} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Averigüé en varias casas joyeras y me gustó mucho DIAMANTE PERÚ, sentí más confianza. Los modelos me gustaron mucho son más finos y delicados, me gustó mucho su trabajo, los felicito".</p>
                            <p className="interline1 ">
                              Roberto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM3} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Mi anillo es perfecto! La experiencia se refleja en los detalles y acabaos de sus piezas,  Muchas Gracias".</p>
                            <p className="interline1 ">
                              José Manuel
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img  src={personF2} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Buena descripción de las joyas y excelente trato personalizado. Gracias DIAMANTE PERÚ, el dije que escogí para mi mamá quedo precioso".</p>
                            <p className="interline1 ">
                              Lucia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM3} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Nunca pensé que el proceso de tener un anillo de compromiso fuera tan especial, escoger la piedra, el modelo  del anillo, me han atendido muy  bien, Muchas Gracias".</p>
                            <p className="interline1 ">
                              Renato
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM1} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Quiero  agradecer por la paciencia que tuvieron ante mi desconocimiento sobre el tema y ante mi indecisión , hicieron que me sintiera muy bien atendid y cuando me decidí por el modelo de mi agrado fueron muy profesionales y puntuales".</p>
                            <p className="interline1 ">
                              Juan Pablo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM2} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Los elegí porque demostraron credibilidad y confianza al momento de la compra y al orientarme al escoger el brillante en base al presupuesto indicado, estoy muy contento".</p>
                            <p className="interline1 ">
                              Oscar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap testimonio-center-foto">
                          <div className="card-body pl-3 center mt-testimonio">
                            {/* <img src={personM3} alt="persona" className="foto-testimonio"/> */}
                            <p className="card-text interline1">"Buen servicio, buen trato, todo es muy transparente y buenos precios. El anillo esta precioso, la presentación impecable, todo perfecto".</p>
                            <p className="interline1 ">
                              Ramón
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
        </>
    )
}
export default Testimonio;