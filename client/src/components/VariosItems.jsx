import React ,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Item from './Item'

const Varios= ({arrofJoyas})=>{

  let contenido;
  if (arrofJoyas.length !==  0 ) {
    contenido =    <div className="row" >
    {arrofJoyas.map(prod => (
   <Item
        // key={prod.id}
        dsc={prod.DESCRIPCIÓN}
        nro={prod.CÓDIGO}
        tipo={prod.Categoría}
        color={prod.Color}
        img={prod.imagen}
      />
    ))}
     
  </div>;
  } else {
    contenido = 
    <div className="row allCenter">
      <h1 className="interline1 p-eleccion" >Para antender su pedido,sírvase a dejar su correo y nos pondremos en contacto a la brevedad</h1>
      <Link to="/contacto"className="btn-flat border-none btn-contact text-size14 raleway-medium-italic"> IR A CONTACTO</Link>
    </div>;
  }
    return (
      <div className="container">
     {contenido}
      </div>
    )
};
export default Varios;