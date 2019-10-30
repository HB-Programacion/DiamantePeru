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
import ItemOfCarrousel from './ItemOfCarrousel'

const CarrouselOne = ({arrofJoyas,title}) => {

  const oneTriplets = arrofJoyas.slice(0, 3);
  const twoTriplets = arrofJoyas.slice(3, 6);
  const threeTriplets = arrofJoyas.slice(6, 9);
  const fourTriplets = arrofJoyas.slice(9,12);
  const fiveTriplets = arrofJoyas.slice(12,15);

  return (
  <div className="w100 animated fadeIn">
    <span className="p-4 flex flexCenter text-size27"><b className="text-size-em">{title}</b></span>
    <p className="center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam </p>
    <div class="container my-4 diamantes-xs">
      <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
        <div class="controls-top center position-relative">
          <a class="btn-floating left-xs" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left arrow"></i></a>
          <a class="btn-floating right-xs" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-right arrow"></i></a>
        </div>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row allCenter">
      
            {  oneTriplets.map(prod => (
              <ItemOfCarrousel
                // key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
          </div>
        </div>

        <div class="carousel-item">
          <div class="row allCenter">
          {  twoTriplets.map(prod => (
              <ItemOfCarrousel
                // key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
        

          </div>
        </div>

        <div class="carousel-item">
          <div class="row allCenter">
          {  threeTriplets.map(prod => (
              <ItemOfCarrousel
                // key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }

          </div>
        </div>

        <div class="carousel-item">
          <div class="row allCenter">
          {  fourTriplets.map(prod => (
              <ItemOfCarrousel
                // key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
        

          </div>
        </div>

        <div class="carousel-item">
          <div class="row allCenter">
          {  fiveTriplets.map(prod => (
              <ItemOfCarrousel
                // key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
        

          </div>
        </div>

      </div>
    </div>
  </div>

  </div>
  )
}
export default CarrouselOne