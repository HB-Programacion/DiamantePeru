import React from "react";
import Slide from "./Slide";
import Carrousel from "./Carrousel";
import Convenio from "./Convenio";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import foto1 from "../img/Clip.png";
import foto1 from "../img/diamante_cover-01.png";
import foto2 from "../img/foto01.png";
import foto3 from "../img/foto3.png";
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"



const Home = () => {
    return(
      <>
      <Helmet>
        <title>Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Home,Perú,anillos,aretes,dijes,oro" />
      </Helmet>
        <div className="w100 animated fadeIn ">
          <div className="portada "></div>
            <div id="carouselExampleSlidesOnly" className="carousel slide noPortada" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <Link to="/compromiso"><img src={foto1} className="d-block w-100 h-50-rem" alt="Bodegon joyas"/></Link>
                    </div>
                    <div className="carousel-item">
                      <Link to="/joyas"><img src={foto2} className="d-block w-100 h-50-rem" alt="chica"/></Link>
                    </div>
                    <div className="carousel-item">
                      <Link to="/blog"><img src={foto1} className="d-block w-100 h-50-rem" alt="Promocion del mes"/></Link>
                    </div>
                </div>
            </div>
            <div id="multi-item-example" className="carousel slide carousel-multi-item mt-4 mb-4" data-ride="carousel">
              <div className="controls-top center">
                <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
                <label className="raleway-regular lt-space-13 ">SORTIJAS</label>
                <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
              </div>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="row allCenter">
                    <Link className="item-container-total text-decoration-none text-reset col-12 col-sm-4 col-md-2 mb-2 option-menu nav-link " to={ `/producto/Sortija-toda-ocasión/S217`}>
                    <div className="mb-2">
                      <img className="card-img-top" src={img1}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD S217</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S223`}>
                    <div className="mb-2">
                      <img className="card-img-top" src={img2}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD S223</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S221`}>
                    <div className="mb-2">
                      <img className="card-img-top" src={img3}
                          alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD S221</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S218`}>
                    <div className="mb-2">
                      <img className="card-img-top" src={img4}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD S218</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S205`}>
                    <div className="mb-2">
                      <img className="card-img-top" src={img5}
                          alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD S205</p>
                      </div>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row allCenter">
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2"   to={ `/producto/Sortija-toda-ocasión/S225`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img6}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S225</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S226`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img7}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S226</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S227`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img8}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S227</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S205`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img5}
                            alt="Card image cap"/>
                          <div className="card-body center">
                            <p className="card-title">COD S205</p>
                          </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S217`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img1}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S217</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row allCenter">
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2"   to={ `/producto/Sortija-toda-ocasión/S223`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img2}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S223</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S221`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img3}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S221</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S205`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img5}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S205</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S205`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img5}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S205</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S225`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img6}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">S225</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Convenio />
        </div>
      </>
    )
}
export default Home;