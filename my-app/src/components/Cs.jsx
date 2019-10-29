import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Cs = () => {
    return (
        <div className="w100 pt-5 pt-5-xs fndo-5cs animated fadeIn">
        <span className="p-3 pb-3 flex flexCenter text-size27"><b>5Cs</b></span>
            <div className=" w80 mL-R10 geosansLight font-size-1">
                <div>
                {/* <span className="mb-2 flex flexCenter text-size27" >5Cs</span> */}
                {/* <div className="mt-1 mL-R15 interline text-size16 w70 center"> */}
                        <p className="interline1 text-center w60 w60-xs m-auto pb-3">En DIAMANTE PERÚ trabajamos con las mejores calidades, elegidas rigurosamente por profesionales en la ciencia.
                            El valor del diamante está determinado por 4 factores, no interesando el orden de éstos; que
                            son: Corte, Color, Claridad, Carat (unidad de peso). A continuación te explicamos sobre estos
                            factores:</p>
                        {/* </div> */}
                <div className="flexWrap mb-5">
                    <div  id="" className="w30 p-4  m-1 b-all interline text-size-1 div-5cs text-center position-relative">
                        <span className="text-size27 snell-Roundhand">Carats</span>
                        <p className="color-p-cs text-center"><b>(Quilates)</b></p>
                        <hr className="w20 hr-cs"></hr>
                        <div className="pb-3">
                            <p className="text-left">El peso o tamaño de la piedra se expresa en quilates 1 quilate equivale a 0,2 gr y se divide en 100 puntos (o 200 miligramos).</p>
                        </div>
                        <Link to="/carats" className="leer-5cs">Leer más</Link>
                    </div>
                    <div className="w30 p-4 m-1 b-all interline text-size-1 div-5cs text-center position-relative">
                        <span className="text-size27 snell-Roundhand">Color</span>
                        <hr className="w20 hr-cs"></hr>                        
                        <div className="pb-2">
                            <p className="text-left">El color exacto de un diamante se determina mediante una paleta de colores aceptada internacionalmente, un patrón. El color va desde D, incoloro y el más codiciado, a Z, el más amarillo.</p>
                        </div>
                        <Link to="/color" className="leer-5cs">Leer más</Link>
                    </div>
                    <div className="w30 p-4 m-1 b-all interline text-size-1 div-5cs text-center position-relative">
                        <span className="text-size27 snell-Roundhand">Clarity</span>
                        <p className="color-p-cs text-center"><b>(Pureza)</b></p>
                        <hr className="w20 hr-cs"></hr>
                        <div className="pb-2">
                            <p className="text-left">La mayoría de los diamantes se originan con “marcas de nacimiento”, las cuales se conocen como “inclusiones”. Cuantas menos haya, mayor será la cantidad de luz que puede atravesar el diamante y más bello será su destello.</p>
                        </div>
                        <Link to="/claridad"className="leer-5cs">Leer más</Link>
                    </div>
                    <div className="w30 p-4 m-1 b-all interline text-size-1 div-5cs text-center position-relative">
                        <span className="text-size27 snell-Roundhand">Cut</span>
                        <p className="color-p-cs text-center"><b>(Talado)</b></p>
                        <hr className="w20 hr-cs"></hr>
                        <div className="pb-2">
                            <p className="text-left">La calidad de la talla hace referencia a las proporciones, la simetría y el pulido de la gema. Si la profundidad del diamante es escasa o excesiva, permitirá que la luz se escape por los lados o la parte inferior de la joya.</p>
                        </div>
                        <Link to="/corte" className="leer-5cs">Leer más</Link>
                    </div>
                    <div className="w30 p-4 m-1 b-all interline text-size-1 div-5cs text-center position-relative">
                        <span className="text-size27 snell-Roundhand">Certification</span>
                        <p className="color-p-cs text-center"><b>(Certificación y confianza)</b></p>
                        <hr className="w20 hr-cs"></hr>
                        <div className="pb-2">
                            <p className="text-left">Los Diamantes no tienen marca, vienen en diferentes tamaños y calidades. Si el Diamante está certificado por un Laboratorio de prestigio mundial, como lo es el instituto GIA Garantizará cada propiedad indicada de su Diamante.</p>
                        </div>
                        <Link to="/certificacion-y-confianza" className="leer-5cs">Leer más</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default Cs;