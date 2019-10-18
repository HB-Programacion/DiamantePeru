import React from "react";
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"

const Matrimonio = () => {
  return (
  <div className="w100 pt-5 animated fadeIn">
   <span className="p-4 flex flexCenter text-size27"><b className="text-size-em">MATRIMONIO</b></span>
   <p className="center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam </p>
  <div class="controls-top center position-relative">
        <a class="btn-floating btn-left" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left arrow"></i></a>
       
        <a class="btn-floating btn-right" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right arrow"></i></a>
      </div>
    <div class="container my-4">
    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

      

      {/* <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol> */}

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active">

          <div class="row allCenter">
            {/* <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img1}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            */} <div class="col-md-4 ">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

             <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div class="col-md-2 clearfix d-none d-md-block">
              <div class="mb-2">
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
            <div class="col-md-4">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img6}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img7}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img8}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

           {/* <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

             <div class="col-md-2 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img9}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img1}
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
            <div class="col-md-4">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img2}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
                <img class="card-img-top" src={img3}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>

            {/* <div class="col-md-2 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img4}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div> 
            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2">
                <img class="card-img-top" src={img5}
                  alt="Card image cap"/>
                <div class="card-body center">
                  <p class="card-title">Codigo</p>
                </div>
              </div>
            </div>*/}

           


            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="mb-2 background-carrousel-ring ">
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

  </div>
  )
}
export default Matrimonio