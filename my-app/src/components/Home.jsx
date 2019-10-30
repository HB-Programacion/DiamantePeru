import React from "react";
import Slide from "./Slide";
import Carrousel from "./Carrousel";
import Convenio from "./Convenio";
import Footer from "./Footer";

// import foto1 from "../img/Clip.png";
import foto1 from "../img/foto01.png";
import foto2 from "../img/foto2.png";
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
        <div className="w100 animated fadeIn ">
        <div className="portada "></div>
            <div id="carouselExampleSlidesOnly" className="carousel slide noPortada" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block vw100 vh50" alt="chica"/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto1} className="d-block vw100 vh50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foto1} className="d-block vw100 vh50" alt="..."/>
                    </div>
                </div>
            </div>
          
    <div id="multi-item-example" className="carousel slide carousel-multi-item mt-4 mb-4" data-ride="carousel">

      <div className="controls-top center">
        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
        <label className="">SORTIJAS</label>
        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
      </div>

      {/* <ol className="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol> */}

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">

          <div className="row allCenter">
            <div className="col-md-2">
              <div className="mb-2">
                <img className="card-img-top" src={img1}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

             <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

          </div>

        </div>
        <div className="carousel-item">

          <div className="row allCenter">
            <div className="col-md-2">
              <div className="mb-2">
                <img className="card-img-top" src={img6}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img7}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img8}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img9}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img1}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="carousel-item">

          <div className="row allCenter">
            <div className="col-md-2">
              <div className="mb-2">
                <img className="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 clearfix d-none d-md-block">
              <div className="mb-2">
                <img className="card-img-top" src={img6}
                  alt="Card image cap"/>
                <div className="card-body center">
                  <p className="card-title">Codigo</p>
                </div>
              </div>
            </div>

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