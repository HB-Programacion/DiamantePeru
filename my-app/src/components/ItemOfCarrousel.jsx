import React from 'react';

import { BrowserRouter as   Router, Route, Link  } from "react-router-dom";
import image from '../img/1.png';

const ItemOfCarrousel = ({nro,tipo,imagen}) =>{
    return(
      <Link className="col-md-4 clearfix  d-md-block" to={ `/novios/${tipo}/${nro}`}>
        <div className="mb-2 background-carrousel-ring ">
          <img 
            className="card-img-top" 
            src={imagen}
            alt="Card image cap"
          />
          <div className="card-body center">
            <p className="card-title">{nro}</p>
          </div>
        </div>
      </Link>
    )
};

export default ItemOfCarrousel