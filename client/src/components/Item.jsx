import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Item = ({nro,tipo,color,dsc,img}) =>{
  return (
      <>
      <Link 
        className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link " 
        to={ `/producto/${tipo}/${nro}`}
      >
        <div className="card background-carrousel-ring border-carrousel" key={nro}>
          <img src={img} className="card-img-top cardImgItem" alt={` joya ${nro}`}/>
          <div className="card-body">
            <h5 className="card-title text-center p-2">COD :{nro}</h5>
          </div>
        </div>
      </Link>
      </>
  )
};

    export default Item
