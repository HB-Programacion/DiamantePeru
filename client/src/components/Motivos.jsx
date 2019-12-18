import React from "react";
import certificacion from "../img/DIAMANTE_01.png";
import grabado from "../img/DIAMANTE_02.png";
import asesoria from "../img/DIAMANTE_03.png";
import verificacion from "../img/DIAMANTE_04.png";
import { Helmet } from "react-helmet";

const Motivos = () =>{
    return (
        <div className="gray h100 pb-pt-4rem pb-9 pt-5-xs animated fondo-shine fadeIn geosansLight">
        <Helmet>
            <title>Motivos - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>   </Helmet>
            <span className="p-3 pb-3 flex flexCenter text-size27"><b>MOTIVOS PARA ELEGIR DIAMANTE PERÚ</b></span>
            <div className="flexWrap pad-lr-8 pb-5 pt-3">
                    <div className="item b-all pb-2 pt-2">
                        <div className="flex w100 allCenter flex-Wrap-Responsive p-4">
                            <div><img src={certificacion} className="fndo-motivos-res"  alt="certificacion 1"/></div>
                            <p className="p-motivos interline1  allCenter geosansLight">Diamantes certificados por el Laboratorio, Gemological Institute of America (GIA).</p>
                        </div>
                    </div>
                    <div className="item b-all allCenter pb-2 pt-2">
                        <div className="flex w100 flex-Wrap-Responsive p-4">
                            <div><img src={grabado} className="fndo-motivos-res" alt="grabado 2"/></div>
                            <p className="p-motivos interline1 allCenter geosansLight">Todos nuestros diamantes cuentan con el número de certificación grabado con láser y con el servicio de verificación online.</p>
                        </div>
                    </div>
                    <div className="item b-all allCenter pb-2 pt-2">
                        <div className="flex w100 flex-Wrap-Responsive p-4">
                            <div><img src={asesoria} className="fndo-motivos-res"  alt="asesoria 3"/></div>
                            <p className="p-motivos interline1 allCenter geosansLight">Verificación con microscopio del número de certificado grabado que tiene  el Diamante.</p>
                        </div>
                    </div>
                    <div className="item b-all allCenter pb-2 pt-2">
                        <div className="flex w100 flex-Wrap-Responsive p-4">
                            <div><img src={verificacion} className="fndo-motivos-res"  alt="verificacion 4"/></div>
                            <p className="p-motivos interline1  allCenter geosansLight">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Motivos;