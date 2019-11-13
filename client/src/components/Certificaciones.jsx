import React from "react";
import { Helmet } from "react-helmet";

import gia from "../img/GIA_logo.png"
import diamante from '../img/fondo-certificaciones-diamante.png'

const Certificaciones = () => {
    return (
        <div className="w100 pb-pt-4rem fndo-certificaciones animated fadeIn">
               <Helmet>
            <title>Certificación - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
        </Helmet>
            <div className="flex p-4 responsive-certificacion">
                <div className="w50 flex flex-column alignSelCenter wResponsive100">
                    <img src={gia} className="w50 ml-15 pb-3 gia-logo-xs"  alt="gia"/>
                    <div className='interline1 pb-2 ml-15 pad-l-responsive'>
                        <p>Institución dedicada a la investigación y formación en el campo de la gemología y joyería. Fundada en 1931, su misión es proteger a los vendedores y compradores de gemas, estableciendo y manteniendo los estándares para evaluar la calidad de una gema.</p>
                    </div>
                </div>
                <figure className="w50 flex flexCenter wResponsive100">
                    <img src={diamante} className='w70' alt="diamante"/>
                </figure>
            </div>
        </div>
    )
}
export default Certificaciones;