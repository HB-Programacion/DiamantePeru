import React ,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import Varios from './VariosItems';
import arrJoyas from '../data';
let arrayFilter =  arrJoyas.filter(e => e.ocasion === "toda-ocasion");

const Joyas = () =>{

  const [product, setProduct] = useState([...arrayFilter]);
  const [stateRadio,setStateRadio] = useState([" "]);
  const [stateRadioTonalidad,setStateRadioTonlidad] = useState([" "]);
  const [stateRadioTipo,setStateRadioTipo] = useState([" "])
  const [inputValue, setInputValue] = useState("");

  const clearFilter = () =>{
    setProduct(arrayFilter);
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
      return setProduct([...newArray]);
    };

  const filterTipo = (products,tipo) => {
    setProduct([...arrayFilter]);
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
    setProduct([...arrayFilter]);
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
    <Helmet>
        <title>Joyas - Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,aretes,sortijas,anillos" />
      </Helmet>

      <div className="row">
        <div className="container-text-joyas  col align-self-center">
          <div className="container">
            <div className="row">
              <div className="col align-self-center w50 pt-5 pt-5-xs pb-3">
                <h1 className="center text-size27"><b>JOYAS</b></h1>
                <p className="center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia sit excepturi quos, doloremque eum maiores vitae dicta nihil animi expedita officia sequi ducimus molestias neque necessitatibus amet. Harum, reiciendis.
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
                className="form-control inputOfCode mt-1 " 
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
            <div className="form-check">
              <input 
                checked={stateRadioTipo === 'anillo'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"anillo",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="anillo" 
                value="anillo" 
              />
              <label className="form-check-label raleway-light"  htmlFor="anillo">
                Sortija
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTipo === 'aretes'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"aretes",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="aretes" 
                value="aretes" 
              />
              <label className="form-check-label raleway-light"  htmlFor="aretes">
                Arete
              </label>
            </div>
            <div className="form-check">      
              <input 
                checked={stateRadioTipo === 'dije'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"dije",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="dije" value="dije" />
              <label className="form-check-label raleway-light"  htmlFor="dije">
                Dije  
              </label>
            </div>
          </div>
          <div className="container-fluid container-color">
            <span className="title-radio">Color</span>
            <div className="form-check">
              <input 
                checked={stateRadio === 'amarillo'} 
                onChange={(e)=>{handleOptionChange(e,filterColor,product,"amarillo",setStateRadio)}}   
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="amarillo" 
                value="optionoro" 
              />
              <label className="form-check-label raleway-light" htmlFor="amarillo">
                Amarillo
              </label>
            </div>
            <div  className="form-check">
              <input checked={stateRadio === 'blanco'} onChange={(e)=>{handleOptionChange(e,filterColor,product,"blanco",setStateRadio)}} 
               className="form-check-input" type="radio" name="exampleRadios" id="blanco" value="blanco" />
              <label className="form-check-label raleway-light" htmlFor="blanco" >
             Blanco
              </label>
            </div>
         
          
          </div>
          {/* <div className="container-fluid container-tonalidad">
            <span  className="title-radio">Tonalidad</span>
            <div  className="form-check">
              <input 
                checked={stateRadioTonalidad === "D-F"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"d-f",setStateRadioTonlidad)}}  
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="df" 
                value="D-F" 
              />
              <label className="form-check-label raleway-light" for="df" >
                D - F 
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTonalidad === "G-J"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"g-j",setStateRadioTonlidad)}}  
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="gj" 
                value="G-J" 
              />
              <label className="form-check-label raleway-light" for="gj" >
                G - J
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTonalidad === "K-M"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"k-m",setStateRadioTonlidad)}}  
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="km" 
                value="K-M" 
              />
              <label className="form-check-label raleway-light" for="km" >
                K - M 
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTonalidad === "N-R"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"n-r",setStateRadioTonlidad)}}  
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="nr" 
                value="N-R" 
              />
              <label className="form-check-label raleway-light" for="nr" >
                N - R 
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTonalidad === "S-Z"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"s-z",setStateRadioTonlidad)}}  
                className="form-check-input" 
                type="radio" 
                name="exampleRadios" 
                id="sz" 
                value="S-Z" 
                />
              <label className="form-check-label raleway-light" for="sz" >
                S - Z 
              </label>
            </div>
          </div>
         */}
          <button 
            onClick={()=>{clearFilter()}} 
            className="btn-block black-margin-btn ">
            Limpiar
          </button>
          </div>
          <div className="col-sm-9">
            <Varios 
              arrofJoyas={product.filter(e => !inputValue || e.codigo === inputValue )}>
            </Varios>
          </div>
        </div>
      </div>
    </>
  )};

export default Joyas;
