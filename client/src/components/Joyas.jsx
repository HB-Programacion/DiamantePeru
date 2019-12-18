import React ,{useState} from "react";
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
    setStateOro(" ");  
      setStateGems(" ");  
     setStateRadioTonlidad(" ");

    setStateRadio("");
    setInputValue("");
    setStateRadioTipo("")
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

    const handleOptionChange1 =(e,arrayOfProducts,text,txt1,setStatevar)=> {
     setStatevar( e.target.value  );
      setProduct([...arrayFilter]);
    let newArray = [];
    arrayOfProducts.filter(element => {
        if (element.TonalidadDeDiamante === text) {
          newArray.push(element);
        }
        if (element.TonalidadDeDiamante === txt1) {
          newArray.push(element);
        }
        return newArray;
      });
      return setProduct(newArray);
    };


  return (
    < >
    <div className="w100 fondo-shine">
       <div className=" w80 mL-R-10">
    <Helmet>
        <title>Joyas - Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="aretes,sortijas,anillos,diamante Perú,Diamante,diamante,joyas,diamante peru,diamante perú,blog,mantenimiento,5cs,4cs,sortijas de compromiso, sortijas, sortijas para compromiso, adrian zela,gino zela, gemologos en peru, sortijas peru, gia,certificacion,sortijas en peru, sortijas lima, anillos en lima, sortijas de compromiso peru, anillos compromiso peru, anillo de compromiso, sortija compromiso, sortijas compromiso, compromiso sortijas, anillos peru, compromiso peru, bodas, matrimonio, pedida de mano, sortijas de matrimonio, aros de bodas, aros de compromiso, brillantes de compromiso peru, brillantes compromiso, brillantes peru, diamantes en el Peru, diamantes peru, diamante peru, perubrillante, peru brillante, brillantes de compromiso, anillos en lima, anillos en trujillo, sortijas en arequipa, aros de matrimonio, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, jewellery shop peru, joyeria, gemologist peru, diamantes de compromiso peru, brillantes de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, gemologia peru, piedras preciosas, Peru Brillante, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio sortija de matrimonio, gemas, gemologia peru, piedras preciosas, diamantes en el peru, diamonds peru, diamantes peru, jewellery shop peru, gemologist peru, diamantes certificados en peru, anillos para novia con diamantes, anillos para novia con brillantes, sortijas para novia con diamantes, sortijas para novia con brillantes, sortijas con diamantes, sortijas con brillantes, aros de novios con diamantes, brillantes en el peru, anillos con diamantes, anillos con brillantes, gemologo en el peru, brillantes certificados en el peru, como comprar un diamante correctamente, como comprar un anillo de compromiso, como comprar un brillante correctamente, diamante peru, diamantes en el peru, diamantes peru, joyerias peru, joyas, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, piedras preciosas, diamantes en el peru, joyerias peru, joyeria, brillantes de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, diamantes en el peru, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, anillos de brillante, sortijas de brillante,  brillantes, aros de matrimonio, piedras preciosas, videos diamantes, joyas y diamantes, diamante bolivia, diamante colombia, diamante peru, diamantes bolivia, diamantes chile, diamantes en peru, peru diamante, diamantes bolivia, diamantes colombia, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia"></meta>
        <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>
      </Helmet>

      <div className="row">
        <div className="container-text-joyas  col align-self-center">
          <div className="container">
            <div className="row">
              <div className="col align-self-center w50 pt-5 pt-5-xs pb-3">
                <h1 className="p-3 center text-size27"><b>JOYAS</b></h1>
                <p className="center ">Una joya con diamante perfecta para toda ocasión
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
              Buscar por Código
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
            <span className="title-radio mb-2 mt-2">CATEGORÍA</span>
            <div className="form-check m-2">
              <input 
                checked={stateRadioTipo === "Sortija-toda-ocasión"} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,arrayFilter,"Sortija-toda-ocasión",setStateRadioTipo)}}   
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
            <div className="form-check m-2">
              <input 
                checked={stateRadioTipo === 'Arete'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,arrayFilter,"Arete",setStateRadioTipo)}}   
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
            <div className="form-check m-2">      
              <input 
                checked={stateRadioTipo === 'Dije'} 
                onChange={(e)=>{handleOptionChange(e,filterTipo,arrayFilter,"Dije",setStateRadioTipo)}}   
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
            <span className="title-radio mb-2 mt-2">COLOR DE ORO</span>
            <div className="form-check m-2">
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
            <div  className="form-check m-2">
              <input checked={stateOro ===  "Oro-Blanco"} onChange={(e)=>{handleOptionChange(e,filterColor,product, "Oro-Blanco",setStateOro)}} 
               className="form-check-input" type="radio" name="exam" id= "Oro-Blanco" value= "Oro-Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Oro-Blanco" >
              Oro Blanco
              </label>
            </div>


            <div  className="form-check m-2">
              <input checked={stateOro === "Oro-Amarillo-y-Oro Blanco"} onChange={(e)=>{handleOptionChange(e,filterColor,product, "Oro-Amarillo-y-Oro Blanco",setStateOro)}} 
               className="form-check-input" type="radio" name="exam" id= "Oro-Amarillo-y-Oro Blanco" value= "Oro-Amarillo-y-Oro Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Oro-Amarillo-y-Oro Blanco" >
               Oro Amarillo y Oro Blanco
              </label>
            </div>
         
          
          </div>


{/*TONO DE DIAMANTE */}
          <div className="container-fluid container-color">
            <span className="title-radio mb-2 mt-2">TONALIDAD DEL DIAMANTE</span>
         
            <div  className="form-check m-2">
              <input checked={stateRadioTonalidad === "Blanco"} onChange={(e)=>{handleOptionChange1(e,product,"Blanco","Blanco y  Azul",setStateRadioTonlidad)}}   
               className="form-check-input" type="radio" name="toneradio" id= "Blanco" value= "Blanco" />
              <label className="form-check-label raleway-light" htmlFor= "Blanco" >
         Blanco
              </label>
            </div>
            <div className="form-check m-2">
              <input 
                checked={stateRadioTonalidad ==="Azul"} 
                onChange={(e)=>{handleOptionChange1(e,product,"Azul","Blanco y  Azul",setStateRadioTonlidad)}}   
                className="form-check-input" 
                type="radio" 
                name="toneradio" 
                id="Azul"
                value="Azul"
              />
              <label className="form-check-label raleway-light " htmlFor="Azul">
                Azul
              </label>
            </div>

            <div  className="form-check m-2">
              <input checked={stateRadioTonalidad === "Blanco y Amarillo Canario"} onChange={(e)=>{handleOptionChange(e,filterTone,product,"Blanco y Amarillo Canario",setStateRadioTonlidad)}} 
               className="form-check-input" type="radio" name="toneradio" id= "Blanco y Amarillo Canario" value="Blanco y Amarillo Canario" />
              <label className="form-check-label raleway-light" htmlFor= "Blanco y Amarillo Canario" >
               Amarillo Canario
              </label>
            </div>
         
          
          </div>

{/*FORMA DE DIAMANTE */}
          <div className="container-fluid container-color">
            <span className="title-radio mb-2 mt-2">FORMA DE DIAMANTE</span>
            <div className="form-check m-2">
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
            <div  className="form-check m-2">
              <input checked={stateRadio ===  "Brillante(Redondo) y Pera"} onChange={(e)=>{handleOptionChange(e,filterShape,product, "Brillante(Redondo) y Pera",setStateRadio)}} 
               className="form-check-input" type="radio" name="formradio" id=  "Brillante(Redondo) y Pera" value= "Brillante(Redondo) y Pera"/>
              <label className="form-check-label raleway-light" htmlFor= "Brillante(Redondo) y Pera" >
              Pera
              </label>
            </div>


            <div  className="form-check m-2">
              <input checked={stateRadio === "X"} onChange={(e)=>{handleOptionChange(e,filterShape,product, "X",setStateRadio)}} 
               className="form-check-input" type="radio" name="formradio" id= "X" value= "X" />
              <label className="form-check-label raleway-light" htmlFor= "X" >
              Sin Diamante
              </label>
            </div>
         
          
          </div>

          <div className="container-fluid container-color">
            <span className="title-radio mb-2 mt-2">GEMAS ADICIONALES</span>
            <div className="form-check m-2">
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

          <button 
            onClick={()=>{clearFilter()}} 
            className="btn-block black-margin-btn ">
            Limpiar
          </button>
          </div>
          <div className="col-sm-12 col-md-9">
        
            <Varios 
              arrofJoyas={product.filter(e => !inputValue || e.CÓDIGO === inputValue )}>
            </Varios>


          </div>
        </div>
      </div>
   
    </div>
    </>
  )};

export default Joyas;
