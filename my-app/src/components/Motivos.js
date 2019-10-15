import React from "react";
import fndo from "../img/motivos-img.svg"

const Motivos = () =>{
    return (
        <div className="gray w100 animated fadeIn">
            <span className="p-4 flex flexCenter text-size27"><b className="text-size-em">MOTIVOS</b></span>
            <div className="flexWrap pad-lr-8 pb-5 pt-3">
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={fndo} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={fndo} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={fndo} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
                    <div className="item b-all">
                        <div className="flex w100 flex-Wrap-Responsive">
                            <img src={fndo} className="w30 fndo-motivos-res"/>
                            <p className="p-motivos interline1">Asesoria personalizada por nuestros Gemólogos Graduados como por cualquier integrante de nuestro personal calificado.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Motivos;