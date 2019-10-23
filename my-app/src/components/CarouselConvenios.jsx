import React from "react";

const CarouselConvenios =() => {
  return (
<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png"
            alt="Card image cap"/>
      </div>
    </div>
    <div class="carousel-item">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png" alt="Card image cap"/>
          
      </div>
    </div>
    <div class="carousel-item">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png" alt="Card image cap"/>
          
      </div>
    </div>

  </div>
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
</div>
 
)}
 export default CarouselConvenios;
