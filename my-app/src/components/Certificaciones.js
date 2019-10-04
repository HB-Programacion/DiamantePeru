import React from "react";
import gia from "../img/gia.svg"
import diamante from '../img/fondo-certificacion.svg'

const Certificaciones = () => {
    return (
        <div className="fndo-certificaciones animated fadeIn">
            <div className="flex p-4 responsive-certificacion">
                <div className="w50 flex flex-column alignSelCenter wResponsive100">
                    <img src={gia} className="w50 pad-l-8"/>
                    <div className='interline1 pb-2 pad-l-8 pad-l-responsive'>
                        <p>Institución dedicada a la investigación y formación en el campo de la gemología y joyería.1​ Fundada en 1931, su misión es proteger a los vendedores y compradores de gemas, estableciendo y manteniendo los estándares para evaluar la calidad de una gema.</p>
                    </div>
                </div>
                <figure className="w50 flex flexCenter wResponsive100">
                    <img src={diamante} className='w80' />
                </figure>
            </div>
        </div>
    )
}
export default Certificaciones;