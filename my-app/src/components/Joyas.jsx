import React ,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import Varios from './VariosItems';
import arrJoyas from '../data';
let arrayFilter =  arrJoyas.filter(e => e.Sección === "Joyas");

const Joyas = () =>{

  const [product, setProduct] = useState([...arrayFilter]);
  const [stateRadio,setStateRadio] = useState([" "]);
  const [stateRadioTonalidad,setStateRadioTonlidad] = useState(" ");
  const [stateOro,setStateOro] = useState(" ");
  const [stateGems,setStateGems] = useState(" ");
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
        if (element.Color === color) {
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
        if (element.Categoría === tipo) {
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
        if (element.TonalidadDeDiamante === tono) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
      };

  const filterShape = (productos,forma) =>{
    // setProduct(...productos);
    let newArray = [];
      productos.filter(element => {
        if (element.FormaDeDiamante === forma) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
    };

    const filterMoreGems =(productos,otras)=>{
      let newArray = [];
      productos.filter(element => {
        if (element.OtrasGemas === otras) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
    }

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
                onInputCapture={(e)=>{setInputValue((e.target.value).toUpperCase())}} 
                //handleOptionChange(e,filterCode,arrJoyas,inputValue,setInputValue)
                type="text" 
                id="NameOfJewerly" 
                name="Name" 
              />
            </label>
          </div>
          
{/*TIPO */}
          <div className="container-fluid container-tipo">
            <span className="title-radio">Tipo</span>
            <div className="form-check">
              <input 
                checked={stateRadioTipo === "Sortija-toda-ocasión"} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"Sortija-toda-ocasión",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="type" 
                id="Sortija-toda-ocasión" 
                value="Sortija-toda-ocasión" 
              />
              <label className="form-check-label raleway-light"  htmlFor="Sortija-toda-ocasión">
              Sortija toda ocasión
              </label>
            </div>
            <div className="form-check">
              <input 
                checked={stateRadioTipo === 'Arete'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"Arete",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="type" 
                id="Arete" 
                value="Arete" 
              />
              <label className="form-check-label raleway-light"  htmlFor="Arete">
                Arete
              </label>
            </div>
            <div className="form-check">      
              <input 
                checked={stateRadioTipo === 'Dije'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,product,"Dije",setStateRadioTipo)}}   
                className="form-check-input" 
                type="radio" 
                name="type" 
                id="Dije" value="Dije" />
              <label className="form-check-label raleway-light"  htmlFor="Dije">
                Dije  
              </label>
            </div>
          </div>
         
{/*COLOR DE ORO */}
          <div className="container-fluid container-color">
            <span className="title-radio">Color de Oro</span>
            <div className="form-check">
              <input 
                checked={stateOro === 'Oro-Amarillo'} 
                onChange={(e)=>{handleOptionChange(e,filterColor,product,"Oro-Amarillo",setStateOro)}}   
                className="form-check-input" 
                type="radio" 
                name="exam" 
                id="Oro-Amarillo" 
                value="Oro-Amarillo" 
              />
              <label className="form-check-label raleway-light" htmlFor="Oro-Amarillo">
                Oro Amarillo
              </label>
            </div>
            <div  className="form-check">
              <input checked={stateOro ===  "Oro-Blanco"} onChange={(e)=>{handleOptionChange(e,filterColor,product, "Oro-Blanco",setStateOro)}} 
               className="form-check-input" type="radio" name="exam" id= "Oro-Blanco" value= "Oro-Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Oro-Blanco" >
              Oro Blanco
              </label>
            </div>


            <div  className="form-check">
              <input checked={stateOro === "Oro-Amarillo-y-Oro Blanco"} onChange={(e)=>{handleOptionChange(e,filterColor,product, "Oro-Amarillo-y-Oro Blanco",setStateOro)}} 
               className="form-check-input" type="radio" name="exam" id= "Oro-Amarillo-y-Oro Blanco" value= "Oro-Amarillo-y-Oro Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Oro-Amarillo-y-Oro Blanco" >
               Oro Amarillo y Oro Blanco
              </label>
            </div>
         
          
          </div>


{/*TONO DE DIAMANTE */}
          <div className="container-fluid container-color">
            <span className="title-radio">Tonalidad del Diamante</span>
            <div className="form-check">
              <input 
                checked={stateRadioTonalidad ==="Azul"} 
                onChange={(e)=>{handleOptionChange(e,filterTone,product,"Azul",setStateRadioTonlidad)}}   
                className="form-check-input" 
                type="radio" 
                name="toneradio" 
                id="Azul"
                value="Azul"
              />
              <label className="form-check-label raleway-light" htmlFor="Azul">
                Azul
              </label>
            </div>
            <div  className="form-check">
              <input checked={stateRadioTonalidad === "Blanco"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"Blanco",setStateRadioTonlidad)}} 
               className="form-check-input" type="radio" name="toneradio" id= "Blanco" value= "Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Blanco" >
         Blanco
              </label>
            </div>


            <div  className="form-check">
              <input checked={stateRadioTonalidad === "Blanco y Amarillo Canario"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"Blanco y Amarillo Canario",setStateRadioTonlidad)}} 
               className="form-check-input" type="radio" name="toneradio" id= "Blanco y Amarillo Canario" value="Blanco y Amarillo Canario" />
              <label className="form-check-label raleway-light" htmlFor= "Blanco y Amarillo Canario" >
              Blanco y Amarillo Canario
              </label>
            </div>
         

            <div  className="form-check">
              <input checked={stateRadioTonalidad === "Blanco y  Azul"} onChange={(e)=>{handleOptionChange(e,filterTone,product, "Blanco y  Azul",setStateRadioTonlidad)}} 
               className="form-check-input" type="radio" name="toneradio" id=  "Blanco y  Azul" value= "Blanco y  Azul" />
              <label className="form-check-label raleway-light" htmlFor=  "Blanco y  Azul">
              Blanco y  Azul
              </label>
            </div>
          
          </div>

{/*FORMA DE DIAMANTE */}
          <div className="container-fluid container-color">
            <span className="title-radio">Forma de Diamante</span>
            <div className="form-check">
              <input 
                checked={stateRadio === "Brillante-(Redondo)"} 
                onChange={(e)=>{handleOptionChange(e,filterShape,product,"Brillante-(Redondo)",setStateRadio)}}   
                className="form-check-input" 
                type="radio" 
                name="formradio" 
                id="Brillante-(Redondo)"
                value="Brillante-(Redondo)"
              />
              <label className="form-check-label raleway-light" htmlFor="Brillante-(Redondo)">
              Brillante (Redondo)
              </label>
            </div>
            <div  className="form-check">
              <input checked={stateRadio ===  "Brillante(Redondo) y Pera"} onChange={(e)=>{handleOptionChange(e,filterShape,product, "Brillante(Redondo) y Pera",setStateRadio)}} 
               className="form-check-input" type="radio" name="formradio" id=  "Brillante(Redondo) y Pera" value= "Brillante(Redondo) y Pera"/>
              <label className="form-check-label raleway-light" htmlFor= "Brillante(Redondo) y Pera" >
              "Brillante(Redondo) y Pera"
              </label>
            </div>


            <div  className="form-check">
              <input checked={stateRadio === "X"} onChange={(e)=>{handleOptionChange(e,filterShape,product, "X",setStateRadio)}} 
               className="form-check-input" type="radio" name="formradio" id= "X" value= "X" />
              <label className="form-check-label raleway-light" htmlFor= "X" >
              Sin Diamante
              </label>
            </div>
         
          
          </div>

          <div className="container-fluid container-color">
            <span className="title-radio">Gemas Adicionales</span>
            <div className="form-check">
              <input 
                checked={stateGems ==="Amatista"} 
                onChange={(e)=>{handleOptionChange(e,filterMoreGems,product,"Amatista",setStateGems)}}   
                className="form-check-input" 
                type="radio" 
                name="gems" 
                id="Amatista"
                value="Amatista"
              />
              <label className="form-check-label raleway-light" htmlFor="Amatista">
              Amatista
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
              arrofJoyas={product.filter(e => !inputValue || e.CÓDIGO === inputValue )}>
            </Varios>


          </div>
        </div>
      </div>
    </>
  )};

export default Joyas;
