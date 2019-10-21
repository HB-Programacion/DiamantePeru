import React ,{useState,useEffect} from "react";

import Varios from './VariosItems'
const Joyas = () =>{

    const arrJoyas = [{tipo:"anillo",color:"oro",corte:"malo",codigo:"4"},
    {tipo :"aretes",color:"plata",corte:"malo",codigo:"3"},
    {tipo :"collar",color:"cobre",corte:"bueno",codigo:"2"},
    {tipo :"anillo",color:"plata",corte:"medio",codigo:"1"}];
    const [product, setProduct] = useState([...arrJoyas]);
const clearFilter = () =>{
    setProduct(arrJoyas);
}

    const filterColor = (products,color) => {
      let newArray = [];
      products.filter(element => {
        if (element.color === color) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
    };

    const filterTipo = (products,tipo) => {
        setProduct(arrJoyas);
        let newArray = [];
        products.filter(element => {
          if (element.tipo === tipo) {
            newArray.push(element);
          }
          return newArray;
        });
        return setProduct(newArray);
      };

    return (
<>
<button onClick={()=>{filterColor(product,"plata")}} > consigue la plata</button>
<button onClick={()=>{filterTipo(product,"anillo")}} > consigue anillo</button>
<button onClick={()=>{clearFilter()}}>Limpiar</button>
<Varios arrofJoyas={product}></Varios>
</>
    )};

    export default Joyas
