import React from "react";
import eleccion1 from "../img/Pagas-por-Diamante.svg"

const Eleccion = () => {
    return (
        <div className="h100 pt-5 pt-5-xs animated fadeIn vhEleccion geosansLight">
        <span className="p-3 flex flexCenter text-size27 "><b>ELECCIÓN</b></span>
            <div className="w80 mL-R10 font-size-1">
                <div className="pb-3">
                    {/* <span className="mb-2 flex flexCenter text-size27"><b>ELECCION</b></span> */}
                     {/* <div className="mt-3 interline text-size18"> */}
                        <p className="interline1">Para protegerse contra las estafas comunes en el comercio de los Diamantes se recomienda hacer lo siguiente:</p>
                        <p className="interline1">En primer lugar siempre pedir que su diamante venga acompañado de un certificado emitido por un laboratorio de reconocimiento mundial. La autoridad máxima en lo que a investigación y certificación de diamantes se refiere es el Gemological Institute of America o GIA. Así como el European Gemological Laboratory (EGL), el World Gemological Laboratory (WGL), el Integrity Diamond Laboratory (IDL), entre otros.</p>
                        <p className="interline1">Los fraudes comunes de los que debe cuidarse al adquirir un Diamante son los siguientes:</p>
                    {/* </div> */}
                    <div className="flexWrap mt-5 mb-5">
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                    {/* </div> */}
                    {/* <div className="flex flexCenter"> */}
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                        <div className="ml-5 mr-5">
                            <img src={eleccion1}/>
                        </div>
                    </div>
                    {/* <div className="interline text-size18 mb-5"> */}
                        <p className="interline1">En segundo lugar todos los diamantes certificados por estos Institutos tienen en la cintura del diamante grabado con laser el numero del certificado. Esto sirve como medida de seguridad para que los clientes sepan que el documento le corresponde al diamante. De igual manera todos cuentan con un servicio de verificación en línea. Esto consta de ingresar a la página web respectiva en introducir algunos datos del certificado y verificar que los datos que aparecen en el certificado físico concuerdan con los datos del certificado en línea.</p>
                        <p className="interline1">Esto impide que sean engañados con un certificado emitido de manera fraudulenta.</p>
                        <p className="interline1">Por último lo más recomendable es ir a un lugar donde le ofrezcan todo lo que menciono en la parte superior y que sea un lugar en el que usted confíe. Lo principal es que se sienta cómodo, que sean transparentes y que se muestren voluntariosos ante todas las preguntas que usted tenga. Si en algún momento siente que se le está ocultando algo sospeche que algo no anda bien y retírese. Al fin y al cabo comprar un diamante para esa persona especial debe ser una experiencia cautivante e inolvidable.</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Eleccion;