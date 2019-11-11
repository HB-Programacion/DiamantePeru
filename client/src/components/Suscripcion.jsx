import React from 'react'
import { Helmet } from "react-helmet";
const Suscripcion = () =>{
return(
<>
<Helmet>
            <title>Mantenimiento - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
        </Helmet>
        <div className="w100 pt-5 pt-5-xs animated fadeIn pb-4 fondo-mantenimiento">
            <span className="p-4 flex flexCenter text-size27"><b>Gracias por suscribirte</b></span>
            <hr className="my-4 w10 m-auto"/>
            <div className=" allCenter startItem ">
                <div className="allcenter" >
                    <div id="div-premios"className="w50 w50-xs inline-flex premios-responsive">
                    <p className=" m-3 mb-5 interline1 p-eleccion">
                      heeeeeeeeeeeeeeheeeeeeeeeeeeee
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex content-center">
            <button className="w25 p-1 btn">LEER MÁS ></button>
            </div>
        </div>
</>

);
}

export default Suscripcion;