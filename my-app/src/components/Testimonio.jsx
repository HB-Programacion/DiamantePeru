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
        <div className="w100 pb-pt-4rem pb-9 pt-5 animated fadeIn fondo-testimonios ">
            <div className="flex around position-relative">
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
                        <div className="mb-2 flexWrap">
                          <div className="card-body pl-3 center p-eleccion">
                            <p className="card-text interline1">Por tu compra en Diamante Perú obtienes:</p>
                            <p className="interline1 ">
                              Luis Riva
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2  flex flexWrap">
                          <div className="card-body pl-3 center">
                            <p className="card-text text-size18">Por tu compra en Diamante Perú obtienes:</p>
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