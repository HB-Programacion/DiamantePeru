import React ,{useState,useEffect} from "react";

import Varios from './VariosItems'
const Joyas = () =>{

    const arrJoyas = [   {tipo :"anillo",color:"blanco",corte:"medio",codigo:"6"}, {tipo :"anillo",color:"rosa",corte:"medio",codigo:"5"},{tipo:"anillo",color:"oro",corte:"malo",codigo:"4"},
    {tipo :"aretes",color:"plata",corte:"malo",codigo:"3"},
    {tipo :"collar",color:"cobre",corte:"bueno",codigo:"2"},
    {tipo :"collar",color:"cobre",corte:"bueno",codigo:"7",tono:"d-f"},
    {tipo :"anillo",color:"plata",corte:"medio",codigo:"1"}];
    const [product, setProduct] = useState([...arrJoyas]);
    const [stateRadio,setStateRadio] = useState([" "])
    const [stateRadioTonalidad,setStateRadioTonlidad] = useState([" "])
const clearFilter = () =>{
    setProduct(arrJoyas);
    setStateRadioTonlidad([" "]);
    setStateRadio([""])
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
      const filterTone = (products,tono) =>{
        setProduct(arrJoyas);
        let newArray = [];
        products.filter(element => {
          if (element.tono === tono) {
            newArray.push(element);
          }
          return newArray;
        });
        return setProduct(newArray);
      };
     const  handleOptionChange =(e,functionVar,arrayOfProducts,text,setStatevar)=> {
        setStatevar( e.target.value  );
    functionVar(arrayOfProducts,text);
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
  <div className="container-fluid container-color">
  <span>Color</span>
    <div    class="form-check">
       
  <input checked={stateRadio === 'optionoro'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"oro",setStateRadio)}}   class="form-check-input" type="radio" name="exampleRadios" id="oro" value="optionoro" />
  <label class="form-check-label" for="oro">
  Oro
  </label>
</div>
    <div  class="form-check">
       
       <input checked={stateRadio === 'optionrosa'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"rosa",setStateRadio)}}  class="form-check-input" type="radio" name="exampleRadios" id="rosa" value="optionrosa" />
       <label class="form-check-label" for="rosa" >
         Rosa 
       </label>
     </div>
    <div class="form-check"  >
       
       <input checked={stateRadio === 'optionplata'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"plata",setStateRadio)}} class="form-check-input" type="radio" name="exampleRadios" id="plata" value="optionplata" />
       <label class="form-check-label" for="plata">
         Plata
       </label>
     </div>
     <div class="form-check"   >
       
       <input  checked={stateRadio === 'optionblanco'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"blanco",setStateRadio)}} class="form-check-input" type="radio" name="blancoColor" id="blanco" value="optionblanco" />
       <label class="form-check-label" for="blanco">
         Blanco
       </label>
     </div>

  </div>

<div className="container-fluid container-tonalidad">
<span>Color</span>
<div  class="form-check">
       
       <input checked={stateRadioTonalidad === "D-F"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"d-f",setStateRadioTonlidad)}}  class="form-check-input" type="radio" name="exampleRadios" id="df" value="D-F" />
       <label class="form-check-label" for="df" >
         D - F 
       </label>
     </div>

     <div  class="form-check">
       
       <input checked={stateRadioTonalidad === "G-J"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"g-j",setStateRadioTonlidad)}}  class="form-check-input" type="radio" name="exampleRadios" id="gj" value="G-J" />
       <label class="form-check-label" for="gj" >
         G - J
       </label>
     </div>

     <div  class="form-check">
       
       <input checked={stateRadioTonalidad === "K-M"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"k-m",setStateRadioTonlidad)}}  class="form-check-input" type="radio" name="exampleRadios" id="km" value="K-M" />
       <label class="form-check-label" for="km" >
         K - M 
       </label>
     </div>

     <div  class="form-check">
       
       <input checked={stateRadioTonalidad === "N-R"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"n-r",setStateRadioTonlidad)}}  class="form-check-input" type="radio" name="exampleRadios" id="nr" value="N-R" />
       <label class="form-check-label" for="nr" >
         N - R 
       </label>
     </div>

     <div  class="form-check">
       
       <input checked={stateRadioTonalidad === "S-Z"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"s-z",setStateRadioTonlidad)}}  class="form-check-input" type="radio" name="exampleRadios" id="sz" value="S-Z" />
       <label class="form-check-label" for="sz" >
         S - Z 
       </label>
     </div>
</div>
<button onClick={()=>{filterTipo(product,"anillo")}} className="btn-block" > consigue anillo</button>
<button onClick={()=>{clearFilter()}} className="btn-block">Limpiar</button>
    </div>
    <div className="col-sm-9">
    <Varios arrofJoyas={product}></Varios>

    </div>
  

</div>

</div>

</>
    )};

    export default Joyas;
