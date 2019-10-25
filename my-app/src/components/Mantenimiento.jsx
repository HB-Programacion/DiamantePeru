import React from "react";
import { Helmet } from "react-helmet";

const Mantenimiento = () => {
    return(
        <>
           <Helmet>
        <title>Mantenimiento - Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
      </Helmet>
        <div className="w100 pt-5 pt-5-xs animated fadeIn pb-4 mt-5">
            <span className="p-4 flex flexCenter text-size27"><b>MANTENIMIENTO</b></span>
            <hr class="my-4 w10 m-auto"/>
            <div className=" allCenter startItem ">
                <div className="allcenter" >
                    <div id="div-premios"className="w50 inline-flex premios-responsive">
                    <p className=" m-3 mb-5 interline1">
                        Recuerda que cada cierto período de tiempo un diamante siempre necesita un poco de mantenimiento. 
                        Aquí tienes algunos consejos.
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex content-center">
            <button className="w25 p-1 btn">LEER MAS ></button>
            </div>
        </div>
        </>
    )
};
export default Mantenimiento;