import React from 'react';
import foto1 from "../img/Clip.png";
import foto2 from "../img/foto2.png";
import foto3 from "../img/foto3.png";

const Slide = () => {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src={foto1} class="d-block w-100" alt="chica"/>
          </div>
          <div class="carousel-item">
            <img src={foto2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={foto3} class="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>

    )
};
export default Slide;
