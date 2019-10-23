import React ,{useState,useEffect} from "react";

import Varios from './VariosItems';
import arrJoyas from '../data';

const Joyas = () =>{

  const [product, setProduct] = useState([...arrJoyas]);
  const [stateRadio,setStateRadio] = useState([" "]);
  const [stateRadioTonalidad,setStateRadioTonlidad] = useState([" "]);
  const [stateRadioTipo,setStateRadioTipo] = useState([" "])
  const [inputValue, setInputValue] = useState("");

  const clearFilter = () =>{
    setProduct(arrJoyas);
    setStateRadioTonlidad([" "]);
    setStateRadio([""]);
    setInputValue("");
    setStateRadioTipo([""])
  };
// const onChangeHandler
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
    setProduct(...arrJoyas);
    let newArray = [];
      products.filter(element => {
        if (element.tono === tono) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
      };

  const filterCode = (productos,codigo) =>{
    // setProduct(...productos);
    let newArray = [];
      productos.filter(element => {
        if (element.codigo === codigo) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
    };

     const handleOptionChange =(e,functionVar,arrayOfProducts,text,setStatevar)=> {
      console.log(e.target.value);  
      setStatevar( e.target.value  );
      functionVar(arrayOfProducts,text);
    };
    // if(inputValue!==""){
    //   filterCode = (arrJoyas,inputValue)
    // }
  return (
    <>
    <div className="container w100">
      <div className="row">
        <div className="container-text-joyas  col align-self-center">
          <div className="container">
            <div className="row">
              <div className="col align-self-center w50 pt-5 pt-5-xs pb-3">
                <h1 class="center text-size27"><b>JOYAS</b></h1>
                <p class="center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia sit excepturi quos, doloremque eum maiores vitae dicta nihil animi expedita officia sequi ducimus molestias neque necessitatibus amet. Harum, reiciendis.
                </p>
              </div>
            </div>  
          </div>
        </div>  
      </div>
      <div className="container-img-joyas row justify-content-md-center">
        <div className="filterAndSearch col">
          <div className=" input-group-lg">
            <label  className="title-radio w100">
              Buscar por
              <input 
                class="form-control inputOfCode mt-1 " 
                onInputCapture={(e)=>{setInputValue(e.target.value)}} 
            //handleOptionChange(e,filterCode,arrJoyas,inputValue,setInputValue)
                type="text" 
                id="NameOfJewerly" 
                name="Name" 
              />
            </label>
          </div>
          <div className="container-fluid container-tipo">
            <span className="title-radio">Tipo</span>
            <div class="form-check">
              <input 
                checked={stateRadioTipo === 'optionanillo'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"anillo",setStateRadioTipo)}}   
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="anillo1" 
                value="optionanillo" 
              />
              <label class="form-check-label raleway-light" for="anillo1">
                Sortija
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadioTipo === 'optionarete'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"aretes",setStateRadioTipo)}}   
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="aretes1" 
                value="optionarete" 
              />
              <label class="form-check-label raleway-light" for="aretes1">
                Arete
              </label>
            </div>
            <div class="form-check">      
              <input 
                checked={stateRadioTipo === 'optionDije'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"dije",setStateRadioTipo)}}   
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="dije1" value="optionDije" />
              <label class="form-check-label raleway-light" for="dije1">
                Dije  
              </label>
            </div>
          </div>
          <div className="container-fluid container-color">
            <span className="title-radio">Color</span>
            <div class="form-check">
              <input 
                checked={stateRadio === 'optionoro'} 
                onChange={(e)=>{handleOptionChange(e,filterColor,product,"oro",setStateRadio)}}   
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="oro" 
                value="optionoro" 
              />
              <label class="form-check-label raleway-light" for="oro">
                Oro
              </label>
            </div>
            <div  class="form-check">
              <input checked={stateRadio === 'optionrosa'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"rosa",setStateRadio)}}  class="form-check-input" type="radio" name="exampleRadios" id="rosa" value="optionrosa" />
              <label class="form-check-label raleway-light" for="rosa" >
                Rosa 
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadio === 'optionplata'} 
                onChange={(e)=>{handleOptionChange(e,filterColor,product,"plata",setStateRadio)}} 
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="plata" 
                value="optionplata" 
              />
              <label class="form-check-label raleway-light" for="plata">
                Plata
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadio === 'optionblanco'} 
                onChange={(e)=>{handleOptionChange(e,filterColor,product,"blanco",setStateRadio)}} 
                class="form-check-input" 
                type="radio" 
                name="blancoColor" 
                id="blanco" 
                value="optionblanco" 
              />
              <label class="form-check-label raleway-light" for="blanco">
                Blanco
              </label>
            </div>
          </div>
          <div className="container-fluid container-tonalidad">
            <span  className="title-radio">Tonalidad</span>
            <div  class="form-check">
              <input 
                checked={stateRadioTonalidad === "D-F"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"d-f",setStateRadioTonlidad)}}  
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="df" 
                value="D-F" 
              />
              <label class="form-check-label raleway-light" for="df" >
                D - F 
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadioTonalidad === "G-J"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"g-j",setStateRadioTonlidad)}}  
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="gj" 
                value="G-J" 
              />
              <label class="form-check-label raleway-light" for="gj" >
                G - J
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadioTonalidad === "K-M"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"k-m",setStateRadioTonlidad)}}  
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="km" 
                value="K-M" 
              />
              <label class="form-check-label raleway-light" for="km" >
                K - M 
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadioTonalidad === "N-R"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"n-r",setStateRadioTonlidad)}}  
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="nr" 
                value="N-R" 
              />
              <label class="form-check-label raleway-light" for="nr" >
                N - R 
              </label>
            </div>
            <div class="form-check">
              <input 
                checked={stateRadioTonalidad === "S-Z"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"s-z",setStateRadioTonlidad)}}  
                class="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="sz" 
                value="S-Z" 
                />
              <label class="form-check-label raleway-light" for="sz" >
                S - Z 
              </label>
            </div>
          </div>
          <button 
            onClick={()=>{filterTipo(product,"anillo")}} 
            className="btn-block" > 
            consigue anillo
          </button>
          <button 
            onClick={()=>{clearFilter()}} 
            className="btn-block">
            Limpiar
          </button>
          </div>
          <div className="col-sm-9">
            <Varios 
              arrofJoyas={product.filter(e => !inputValue || e.codigo === inputValue)}>
            </Varios>
          </div>
        </div>
      </div>
    </>
  )};

export default Joyas;
