import React from "react";
import {  useParams } from "react-router-dom";
const ItemPlus = () =>{
    let { numero,tipo,dsc } = useParams();
    return(<>
    <div className="container">
        <h1> hola soy de tipo :{tipo} y mi codigo es {numero}</h1>
  <p>{dsc}</p>
    </div>
    </>)
};
export default ItemPlus;