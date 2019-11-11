import React from "react";
import certificacion from "../img/certificacion.svg";
import grabado from "../img/grabado.svg";
import asesoria from "../img/asesoria.svg";
import verificacion from "../img/verificacion.svg";


const Motivos = () =>{
    return (
        <div className="gray h100 pb-pt-4rem pb-9 pt-5-xs animated fadeIn geosansLight">
            <span className="p-3 pb-3 flex flexCenter text-size27"><b>MOTIVOS PARA ELEGIR DIAMANTE PERÚ</b></span>
            <div className="flexWrap pad-lr-8 pb-5 pt-3">
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={certificacion} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1 allCenter geosansLight">Diamantes certificados por el Laboratorio, Gemological Institute of America (GIA).</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={grabado} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1 allCenter geosansLight">Diamantes con el número de su certificado grabado con láser y con el servicio de verificación en línea.</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={asesoria} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1 allCenter geosansLight">Verificación con microscopio del número de certificado grabado que tiene  el Diamante.</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={verificacion} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1 allCenter geosansLight">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Motivos;