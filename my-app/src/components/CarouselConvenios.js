import React from "react";

const CarouselConvenios =() => {
  return (
    // <!--Carousel Wrapper-->
<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

  {/* <!--Indicators--> */}
  
  {/* <!--/.Indicators--> */}

  {/* <!--Slides--> */}
  <div class="carousel-inner" role="listbox">

    {/* <!--First slide--> */}
    <div class="carousel-item active">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png"
            alt="Card image cap"/>
      </div>
    </div>
    {/* <!--/.First slide--> */}

    {/* <!--Second slide--> */}
    <div class="carousel-item">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png" alt="Card image cap"/>
          
      </div>
    </div>
    {/* <!--/.Second slide--> */}

    {/* <!--Third slide--> */}
    <div class="carousel-item">

      <div class="col-md-4">
          <img class="card-img-top logoCic"
            src="http://www.ciccolombia.travel/images/Parameters/LogoCOL-16.png" alt="Card image cap"/>
          
      </div>
    </div>
    {/* <!--/.Third slide--> */}

  </div>
  {/* <!--/.Slides--> */}

  {/* <!--Controls--> */}
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    {/* <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active">1</li>
    <li data-target="#multi-item-example" data-slide-to="1">2</li>
    <li data-target="#multi-item-example" data-slide-to="2">3</li>
  </ol> */}
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  {/* <!--/.Controls--> */}

</div>
 
)}
 export default CarouselConvenios;
