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
<div className="container w100">
    <div className="row">
        <div className="container-text-joyas  col align-self-center">
            <div className="container ">
                <div className="row">
                    <div className="col align-self-center w50 ">
                          <h1 class="center">JOYAS</h1>
      <p class="center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia sit excepturi quos, doloremque eum maiores vitae dicta nihil animi expedita officia sequi ducimus molestias neque necessitatibus amet. Harum, reiciendis.
      </p>
                    </div>
                </div>
                
            </div>
    
  </div>  
    </div>



   <div className="container-img-joyas row justify-content-md-center">
   <div className="filterAndSearch col">
    <label> Buscar por <input type="text" id="NameOfJewerly" name="Name" /></label>
    </div>
    <div className="col-9">

    </div>
  

</div>

</div>
<button onClick={()=>{filterColor(product,"plata")}} > consigue la plata</button>
<button onClick={()=>{filterTipo(product,"anillo")}} > consigue anillo</button>
<button onClick={()=>{clearFilter()}}>Limpiar</button>
<Varios arrofJoyas={product}></Varios>
</>
    )};

    export default Joyas
