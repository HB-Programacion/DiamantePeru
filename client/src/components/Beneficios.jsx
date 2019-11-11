import React from "react";

import imgconvenio from "../img/logo-carmenSeminara.png";

const Beneficios = () => {
    return(
        <div className="w100 pb-pt-4rem pt-5-xs animated fadeIn pb-9 gray fondo-icon">
          <div className="flex around position-relative">
              <a className="btn-floating position-absolute top50vh left3" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
              <a className="btn-floating position-absolute top50vh right3" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
          </div>
          <span className="p-4 flex flexCenter text-size27"><b>BENEFICIOS</b></span>
            <div className="container my-4">
              <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                  <li data-target="#multi-item-example" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2 flexWrap">
                          <figure className="w50 allCenter">
                            <img className=" w70 rounded-circle" src={imgconvenio} alt="Card image cap"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">CARMEN SEMINARIO ATELIER</h4>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 ml-4 font-size-1">
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
                      <div className="col-md-12">
                        <div className="mb-2  flex flexWrap">
                          <figure className="w50 allCenter convenioResImg">
                            <img className=" w70 rounded-circle" src={imgconvenio} alt="Card image cap"/>
                          </figure>
                          <div className="card-body w50 pl-3 convenioRes geosansLight">
                            <h4 className="card-title">CARMEN SEMINARIO ATELIER</h4>
                            <p className="card-text font-size-1">Por tu compra en Diamante Perú obtienes:</p>
                            <ul className="interline1 font-size-1">
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
                                La promoción puede ser transferible a un familiar directo (hijo, hija, hermana, papá y mamá), solo presentando el voucher de compra en DIAMANTE PERÚ. Para acceder al beneficio, el cliente y/o beneficiario debe llamar antes para solicitar la cita dando en referencia su nombre para poder corroborar que son clientes de DIAMANTE PERU. Promoción no acumulable con otros descuentos, vales, cupones y/o promociones vigentes. Máximo 2 compras por cliente durante la vigencia de la promoción. Esta promoción es válida con pago en efectivo o depósito en cuenta. Local ubicado en: Av. Javier Prado Este 2456, 3er. Piso - San Borja. Horario de atención*: De Lunes a Viernes de 10am a 7pm / Sábados: 10am a 1pm. Teléfono de contacto: 2268364 / PÁGINA WEB: www.carmenseminario.com
                                contacto: atelier@carmenseminario.com
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