import React ,{useState,useEffect} from "react";
import Item from './Item'
const Varios= ({arrofJoyas})=>{
    return (
        <>{arrofJoyas.map(prod => (
        <Item
          key={prod.codigo}
          tipo={prod.tipo}
          color={prod.color}
        />
      ))}</>)
};
export default Varios;