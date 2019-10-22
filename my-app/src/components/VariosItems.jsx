import React ,{useState,useEffect} from "react";
import Item from './Item'
const Varios= ({arrofJoyas})=>{
    return (
        <div className="container">
          <div className="row">
          {arrofJoyas.map(prod => (
        <Item
     key={prod.codigo}
     dsc={prod.descripcion}
          nro={prod.codigo}
          tipo={prod.tipo}
          color={prod.color}
        />
      ))}</div></div>)
};
export default Varios;