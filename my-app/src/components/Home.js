import React from "react";
import Slide from "./Slide";
import Carrousel from "./Carrousel";
import Convenio from "./Convenio";

const Home = () => {
    return(
        <div className="animated fadeIn">
        <Slide/>
        <Carrousel/>
        <Convenio/>
        </div>
    )
}
export default Home;