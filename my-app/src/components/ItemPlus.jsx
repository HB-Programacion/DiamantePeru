import React from "react";
import img from '../img/1.png';
import {  useParams } from "react-router-dom";
const ItemPlus = () =>{
    let { numero,tipo,dsc } = useParams();
    return(<>
   <div className="container mt-4 text-left vh80">
     <div className="row h-100 align-items-center">

     <img className="col-md-6 col-sm-12  img-fluid p-4 h-sm-50 h-100" src={img} alt="joyas">

</img>
<div className="col-md-6  col-sm-12  h-100 h-sm-50 p-4 container-each-jewerly  allCenter">
    <div className="container container-fluid flex flex-column">
       
             <h1> Modelo  {numero}</h1>
<div className="container-text-jewerly">
<p className="text-center">{dsc}</p>
        </div>
   


</div>
</div>
     </div>
   
   </div>
    </>)
};
export default ItemPlus;