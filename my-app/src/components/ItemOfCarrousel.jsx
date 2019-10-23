import React from 'react';
import img2 from "../img/2.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ItemOfCarrousel = ({dsc,nro,tipo,color}) =>{
    return(
        <Link class="col-md-4 clearfix d-none d-md-block " to={ `/compromiso/diamante/${tipo}/${nro}`}>
      
        <div class="mb-2 background-carrousel-ring ">
          <img class="card-img-top" src={img2}
            alt="Card image cap"/>
          <div class="card-body center">
            <p class="card-title">{nro}</p>
          </div>
        </div>
 
      </Link>
    )
};

export default ItemOfCarrousel