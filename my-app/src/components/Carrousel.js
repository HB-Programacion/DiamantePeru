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

const Carrousel = () => {
  return (
    
<div id="carousel-with-lb" className="carousel slide carousel-multi-item" data-ride="carousel">

  <div className="controls-top center mt-5 mb-3">
    <a className="btn-floating color-black" href="#carousel-with-lb" data-slide="prev"><i
        className="fas fa-chevron-left"></i></a>
        <label classNameName="pl-4 pr-4 spacing4 text-size27" >SORTIJAS</label>
    <a className="btn-floating color-black" href="#carousel-with-lb" data-slide="next"><i
        className="fas fa-chevron-right"></i></a>
  </div>
 
  <ol className="carousel-indicators">
    <li data-target="#carousel-with-lb" data-slide-to="0" className="active secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="1" className="secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="2" className="secondary-color"></li>
  </ol>
  
  <div className="carousel-inner mdb-lightbox" role="listbox">
    <div id="mdb-lightbox-ui"></div>
 
    <div className=" carousel-item active text-center">

      <figure className="col-md-2 d-md-inline-block">
        <a href={img1}
          data-size="1600x1067">
          <img src={img1}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img2}
          data-size="1600x1067">
          <img src={img2}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img3}
          data-size="1600x1067">
          <img src={img3}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img3}
          data-size="1600x1067">
          <img src={img3}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img1}
          data-size="1600x1067">
          <img src={img1}
            className="img-fluid"/>
        </a>
      </figure>
    </div>
  
    <div className="carousel-item text-center">

      <figure className="col-md-2 d-md-inline-block">
        <a href={img4}
          data-size="1600x1067">
          <img src={img4}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img5}
          data-size="1600x1067">
          <img src={img5}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img6}
          data-size="1600x1067">
          <img src={img6}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img6}
          data-size="1600x1067">
          <img src={img6}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img4}
          data-size="1600x1067">
          <img src={img4}
            className="img-fluid"/>
        </a>
      </figure>
    </div>

    <div className="carousel-item text-center">

      <figure className="col-md-2 d-md-inline-block">
        <a href={img7}
          data-size="1600x1067">
          <img src={img7}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img8}
          data-size="1600x1067">
          <img src={img8}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img9}
          data-size="1600x1067">
          <img src={img9}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img9}
          data-size="1600x1067">
          <img src={img9}
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-2 d-md-inline-block">
        <a href={img9}
          data-size="1600x1067">
          <img src={img9}
            className="img-fluid"/>
        </a>
      </figure>

    </div>

  </div>

</div>
  )
};
export default Carrousel;