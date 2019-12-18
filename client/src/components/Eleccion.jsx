import React from "react";
// import eleccion1 from "../img/Pagas-por-Diamante.svg"
import eleccion1 from "../img/01-eleccion.svg";
import eleccion2 from "../img/02-eleccion.svg";
import eleccion3 from "../img/03-eleccion.svg";
import eleccion4 from "../img/04-eleccion.svg";
import eleccion5 from "../img/05-eleccion.svg";
import eleccion6 from "../img/06-eleccion.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Eleccion = () => {
    return (
        <div className="h100 pb-pt-4rem pt-5-xs animated fadeIn vhEleccion  fondo-shine geosansLight">
        <Helmet>
            <title>Elección - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
            <meta name="URL" content="http://www.diamanteperu.com"/>
            <meta name="author" content="diamanteperu.com"/>
                <meta name="distribution" content="global"/>   </Helmet>
        <h1 className="p-3 flex flexCenter text-size27 "><b>ELECCIÓN</b></h1>
            <div className="w80 mL-R10 font-size-1rem">
                <div className="pb-3t interline1 p-eleccion">
                    {/* <span className="mb-2 flex flexCenter text-size27"><b>ELECCION</b></span> */}
                     {/* <div className="mt-3 interline text-size18"> */}
                        {/* <p className="text-center">Para protegerse contra las estafas comunes en el comercio de los Diamantes se recomienda hacer lo siguiente:</p> */}
                        <p className="">En primer lugar siempre pedir que su diamante venga acompañado de un certificado emitido por un laboratorio de reconocimiento mundial. La autoridad máxima en lo que a investigación y certificación de diamantes se refiere, es el Gemological Institute of America o GIA.</p>
                        {/* <p className="">Los fraudes comunes de los que debe cuidarse al adquirir un Diamante son los siguientes:</p> */}
                    {/* </div> */}
                    <div className="flexWrap flexWrap-eleccion-xs mt-4 mb-4">
                        <Link to="/carats" className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion1} alt="eleccion1"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">PAGAS POR UN DIAMANTE Y TE DAN OTRO</p>
                        </Link>

                        <Link to="/certificacion-y-confianza" className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion2}  alt="eleccion2"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">CERTIFICACIÓN FRAUDULENTA</p>
                        </Link>

                        <Link to="/carats"  className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black ">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion3} alt="eleccion3 text-dec-black"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">PESO TOTAL EN CARATS</p>
                        </Link>

                    {/* </div> */}
                    {/* <div className="flex flexCenter"> */}
                        <Link to="/certificacion-y-confianza"  className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion4}  alt="eleccion4"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">DIAMANTE O ZIRCÓN</p>

                        </Link>
                        <Link to="/certificacion-y-confianza" className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion5}  alt="eleccion5"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">CERTIFICADOS EMITIDOS POR LAS MISMAS JOYERIAS</p>
                        </Link>
                        <Link to="/claridad"  className="flex w30 w30-xs p-3 pl-4 pr-4 mb-3 text-dec-black">
                            <div className="bd-right"><img className="w-3rem pr-3" src={eleccion6} alt="eleccion6"/></div>
                            <p className="raleway-semibold pl-3 allCenter text-left mb-0 font-size-1rem">ESCONDIENDO INCLUSIONES</p>
                        </Link>
                    </div>
                    {/* <div className="interline text-size18 mb-5"> */}
                        <p className="">
                        En segundo lugar todos los diamantes certificados por este Instituto tienen en la cintura del diamante grabado con láser el número del certificado. Esto sirve como medida de seguridad para que los clientes sepan que el documento le corresponde al diamante. De igual manera todos cuentan con un servicio de verificación en línea. Esto consta de ingresar a la página web respectiva en introducir algunos datos del certificado y verificar que los datos que aparecen en el certificado físico concuerdan con los datos del certificado en línea. Esto impide que sean engañados con un certificado emitido de manera fraudulenta.
                        </p>
                        <p className="">
                        Por último, lo más recomendable es ir a un lugar donde le ofrezcan todo lo que se menciona en la parte superior y que sea un lugar en el que usted confíe. Lo principal es que se sienta cómodo, que sean transparentes y que se muestren voluntariosos ante todas las preguntas que usted tenga. Si en algún momento siente que se le está ocultando algo, sospeche que algo no anda bien y retírese. 
                        Al fin y al cabo comprar un diamante para esa persona especial debe ser una experiencia cautivante e inolvidable.

                        </p>
                        {/* <p className="">Por último lo más recomendable es ir a un lugar donde le ofrezcan todo lo que menciono en la parte superior y que sea un lugar en el que usted confíe. Lo principal es que se sienta cómodo, que sean transparentes y que se muestren voluntariosos ante todas las preguntas que usted tenga. Si en algún momento siente que se le está ocultando algo sospeche que algo no anda bien y retírese. Al fin y al cabo comprar un diamante para esa persona especial debe ser una experiencia cautivante e inolvidable.</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Eleccion;