import React from "react";
import {  useParams } from "react-router-dom";

import arrJoyas from '../data';

const ItemPlus = () =>{
    let { numero } = useParams();

    const elem = arrJoyas.find((e) => e.codigo === numero);

    console.log(elem)
    return(<>
   <div className="container mt-4 text-left vh80">
     <div className="row h-100 align-items-center">

     <img className="col-md-6 col-sm-12  img-fluid p-4 h-sm-50 h-100" src={elem.imagen} alt="joyas">

</img>
<div className="col-md-6  col-sm-12  h-100 h-sm-50 p-4 container-each-jewerly  allCenter">
    <div className="container container-fluid flex flex-column">
       
             <h1> Modelo  {elem.codigo}</h1>
<div className="container-text-jewerly">
<p className="text-center">{elem.descripcion}</p>
        </div>
   


</div>
</div>
     </div>
   
   </div>
    </>)
};
export default ItemPlus;