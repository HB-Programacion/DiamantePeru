import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Convenio = () => {
    return (
        <>
        <div className="fndo-img1 mb-0">
            <div className="w100 pad-5-xs pad-2">
                <div className="w45 w100-xs center text-centered"> <label className="spacing4 text-1-5 bolder-xs ">BENEFICIOS</label>
                    <p className="text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                    <Link to="/beneficios" className="text-centered option-menu raleway-medium-italic nav-link" >LEER MÁS <span className="arrow-see-more">></span></Link>
                </div>
            </div>
        </div>
        <div className="gray"> 
            <div className="fndo-img2 rigth">
                <div className="w35 gray-xs w87-xs gray-text-centered  pad-14">
                    <label className="spacing4 text-1-5"> <span className="fnt-w-bold">DIAMANTE</span><br/> PERÚ</label>
                    <p className="gray-text-centered ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <Link to="/historia" className="nav-link option-menu raleway-medium-italic" >LEER MÁS <span className="arrow-see-more">></span></Link> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Convenio;
