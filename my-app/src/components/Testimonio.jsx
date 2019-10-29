import React from "react";
import { Helmet } from "react-helmet";
const Testimonio = () => {
    return (
        <>
           <Helmet>
    <title>Testimonios - Diamante Perú</title>
    <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
    <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Bodas,Testimonios,novios" />
  </Helmet>
        <div className="w100 pt-5 animated fadeIn fondo-testimonios ">
            <div class="flex around position-relative">
              <a class="btn-floating position-absolute left3" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left arrow"></i></a>
              <a class="btn-floating position-absolute  right3" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right arrow"></i></a>
          </div>
          <span className="p-4 flex flexCenter text-size27"><b>TESTIMONIOS</b></span>
            <div class="container my-4">
              <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-2 flexWrap">
                          <div class="card-body pl-3 center p-eleccion">
                            <p class="card-text interline1">Por tu compra en Diamante Perú obtienes:</p>
                            <p className="interline1 ">
                              Luis Riva
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-2  flex flexWrap">
                          <div class="card-body pl-3 center">
                            <p class="card-text text-size18">Por tu compra en Diamante Perú obtienes:</p>
                            <p className="interline1 text-size12">
                                Juan Soto
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