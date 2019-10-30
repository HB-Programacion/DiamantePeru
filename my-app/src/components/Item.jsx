import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Item = ({nro,tipo,color,dsc,img}) =>{
  return (
      <>
      <Link 
        class="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link " 
        to={ `/producto/${tipo}/${nro}`}
      >
        <div class="card itemCard" key={nro}>
          <img src={img} class="card-img-top cardImgItem" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center p-2">COD : {nro}</h5>
            <p class="card-text">{color}</p>
            <a href="#" class="btn btn-primary">{tipo}</a>
          </div>
        </div>
      </Link>
      </>
  )
};

    export default Item
