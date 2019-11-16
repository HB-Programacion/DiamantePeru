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

const Carrousel = ({arrofJoyas,title}) => {

  const oneTriplets = arrofJoyas.slice(0, 3);
  const twoTriplets = arrofJoyas.slice(3, 6);
  const threeTriplets = arrofJoyas.slice(6, 9);
  const fourTriplets = arrofJoyas.slice(9,12);
  const fiveTriplets = arrofJoyas.slice(11,14);

  return (
  <div className="w100 animated fadeIn">
    <span className="p-4 flex flexCenter text-size27"><b className="text-size-em">{title}</b></span>
    <p className="center">Existe un diamante para cada estilo, encuentra el tuyo o escríbenos para confeccionarlo según tus exigencias. </p>
    <div className="container my-4 diamantes-xs">
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        <div className="controls-top center position-relative">
          <a className="btn-floating left-xs  position-absolute top50vh left-2" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
          <a className="btn-floating right-xs  position-absolute top50vh right-2" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
        </div>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="row allCenter">
      
            {  oneTriplets.map(prod => (
              <ItemOfCarrousel
              key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
              />
            )) }
          </div>
        </div>

        <div className="carousel-item">
          <div className="row allCenter">
          {  twoTriplets.map(prod => (
              <ItemOfCarrousel
            key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
        

          </div>
        </div>

        <div className="carousel-item">
          <div className="row allCenter">
          {  threeTriplets.map(prod => (
              <ItemOfCarrousel
                 key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }

          </div>
        </div>

        <div className="carousel-item">
          <div className="row allCenter">
          {  fourTriplets.map(prod => (
              <ItemOfCarrousel
                 key={prod.CÓDIGO}
                imagen={prod.imagen}
                nro={prod.CÓDIGO}
                tipo={prod.Categoría}
            
              
              />
            )) }
        

          </div>
        </div>

        <div className="carousel-item">
          <div className="row allCenter">
          {  fiveTriplets.map(prod => (
              <ItemOfCarrousel
           key={prod.CÓDIGO}
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
export default Carrousel