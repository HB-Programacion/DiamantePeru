import React  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Item from './Item'

const Varios= ({arrofJoyas})=>{

  let contenido;
  if (arrofJoyas.length !==  0 ) {
    contenido =    <div className="row flexCenter" >
    {arrofJoyas.map(prod => (
   <Item
       key={prod.CÓDIGO}
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
   <a href="https://wa.me/51949218855?text=Me%20gustaría%20tener%20información%20personalizada." className="center p-5  text-dec-black itemCard text-dec-black" >Lo sentimos, en este momento no contamos con ninguna joya que responda a tu búsqueda. 
      Por favor, póngase en contacto con nosotros a través de  <span className="text-dec-black raleway-semibold"> WhatsApp </span> o déjenos su correo en la sección de contacto para comunicarnos con usted y ayudarlo a diseñar la joya que busca.
      </a>

    </div>;
  }
    return (
      <div className="container">
     {contenido}
      </div>
    )
};
export default Varios;