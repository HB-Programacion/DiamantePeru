import React ,{useState,useEffect} from "react";

import Item from './Item'

const Varios= ({arrofJoyas})=>{
  const [longitud,setlongitud]= useState([...arrofJoyas]);

    return (
      <div className="container">
        <div className="row" >
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
              {longitud.lenght < 1  && (
           <h1> vacio estoy</h1>
                )}
        </div>
      </div>
    )
};
export default Varios;