import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Nav from "./Nav";
import historia from "../img/historia.svg"

const Historia = () =>{
    return (
        <div className="w100 flex animated fadeIn">
            <div className="w50 gray allCenter">
                <div className="mt-0">
                    <span className="tex-size18"> HISTORIA <br/>DIAMANTE PERU</span>
                    <p className="mL-R-10 mt-5 justify interline2 text-size16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                   </p>
                </div>
            </div>
            <div className="w50 black allCenter">
                <img  className="w100" src={historia} />
            </div>
            
        </div>
    )
}
export default Historia;