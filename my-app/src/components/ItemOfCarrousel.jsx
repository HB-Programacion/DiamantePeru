import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from '../img/1.png';

const ItemOfCarrousel = ({nro,tipo,imagen}) =>{
    return(
      <Link class="col-md-4 clearfix  d-md-block" to={ `/novios/${tipo}/${nro}`}>
        <div class="mb-2 background-carrousel-ring ">
          <img 
            class="card-img-top" 
            src={imagen}
            alt="Card image cap"
          />
          <div class="card-body center">
            <p class="card-title">{nro}</p>
          </div>
        </div>
      </Link>
    )
};

export default ItemOfCarrousel