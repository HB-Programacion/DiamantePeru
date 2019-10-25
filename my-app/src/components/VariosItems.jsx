import React ,{useState,useEffect} from "react";

import Item from './Item'

const Varios= ({arrofJoyas})=>{
    return (
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    )
};
export default Varios;