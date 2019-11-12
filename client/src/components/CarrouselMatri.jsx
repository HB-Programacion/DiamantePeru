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

const CarrouselMatri = ({arrofJoyas,title}) => {
  return (
  <div className="w100 pt-5 pt-5-xs animated fadeIn">
    <span className="p-4 flex flexCenter text-size27"><b className="text-size-em">{title}</b></span>
    <p className="center">...Un lazo para toda la vida</p>
    <div className="container my-4 diamantes-xs">
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        <div className="controls-top center position-relative">
          <a className="btn-floating left-xs position-absolute top50vh left3 matriArrow" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
          <a className="btn-floating right-xs position-absolute top50vh right3 matriArrow" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
        </div>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="row allCenter">
      
            {   ( arrofJoyas.filter(e =>  e.Color ===  "Oro-Amarillo" )).map(prod => (
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

          {   ( arrofJoyas.filter(e =>  e.Color ===  "Oro-Blanco" )).map(prod => (
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
export default CarrouselMatri;