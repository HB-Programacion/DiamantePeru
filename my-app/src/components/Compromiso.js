import React from "react";

import oneDiamante from '../img/one-diamante.png'
import moreDiamante from '../img/more-diamante.png'

const Compromiso = () => {
    return (
        <div className="w100 flex flexCenter animated fadeIn">
            <div className="w95 flex flexCenter">
                <div className="w-auto borderBold m-5">
                    <img src={oneDiamante} className="w100 box"/>
                    <button className="joya">DIAMANTE</button>
                </div>
                <div className="w-auto borderBold m-5">
                    <img src={moreDiamante} className="w100 box"/>
                    <button className="joya">+ DIAMANTES</button>
                </div>
            </div>
        </div>
    )
}
export default Compromiso