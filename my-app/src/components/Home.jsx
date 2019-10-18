import React from "react";
import Slide from "./Slide";
import Carrousel from "./Carrousel";
import Convenio from "./Convenio";
import Footer from "./Footer";

import foto1 from "../img/Clip.png";
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
        <div className="w100 h80 animated fadeIn ">
        <div className="portada "></div>
            <div id="carouselExampleSlidesOnly" className="carousel noPortada slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src={foto1} class="d-block vw100 vh50" alt="chica"/>
                    </div>
                    <div class="carousel-item">
                        <img src={foto2} class="d-block vw100 vh50" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={foto3} class="d-block vw100 vh50" alt="..."/>
                    </div>
                </div>
            </div>
          
    <div id="multi-item-example" class="carousel slide carousel-multi-item mt-2" data-ride="carousel">

      <div class="controls-top center">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left arrow"></i></a>
        <label className="">SORTIJAS</label>
        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right arrow"></i></a>
      </div>

      {/* <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol> */}

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active">

          <div class="row allCenter">
            <div class="col-md-2">
              <div class="pb-3">
                <img class="card-img-top" src={img1}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

             <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

          </div>

        </div>
        <div class="carousel-item">

          <div class="row allCenter">
            <div class="col-md-2">
              <div class="pb-3">
                <img class="card-img-top" src={img6}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img7}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img8}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img9}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img1}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="carousel-item">

          <div class="row allCenter">
            <div class="col-md-2">
              <div class="pb-3">
                <img class="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> */}

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-2 clearfix d-none d-md-block">
              <div class="pb-3">
                <img class="card-img-top" src={img6}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="w100">
<Convenio />

</div></>
    )
}
export default Home;