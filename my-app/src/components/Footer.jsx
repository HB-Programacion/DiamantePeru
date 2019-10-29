import React from "react";
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg'

const Footer = () => {
    return(
        <div className="mt-4">
            <footer className=" bd-top bd-bottom flex flex-column-reverse1">
                <div className="container-contact flex w20 w100-xs mb-2">
                    <a href="" className="pad-l-t-3">
                       <img className="contact-us" src={facebook}></img>
                    </a>
                    <a href=""  className="pad-l-t-3">
                        
                       <img  className="contact-us" src={instagram}></img>
                    </a>
                </div>
                <form  action="https://script.google.com/macros/s/AKfycbyJeG0STS1g-e3cBeOiRQ9h7WadfYNcHiuL-wuAzREwvSGmUUk/exec" className="mt-4 mb-4 center h198px w62 w100-xs">
                    <label className="text-size14 spacing3 "><strong>SUSCRÍBETE A NUESTRO BOLETÍN</strong></label>
                    <div className="form-xs">
                        <input id="inputMail" className="w25 p-1 text-size14 border-gray-3" name="inputOne" type="email" placeholder="Correo Electrónico"/>
                        <input className="black  text-size14 color-white btn-flat border-none raleway-medium-italic" type="submit" value="SUSCRÍBETE"/>
                        <p className="interline1 pad-txt-19 text-size12 mt-1 mb-1 center justify ">Al suscribirse a nuestro boletín, acepta que le enviemos correos electrónicos de marketing 
                            según nuestra Política de privacidad.</p>
                    </div>
                </form>
            </footer>
            <div className="mt-2 mb-2 center text-size12">
            &copy; 2019 DIAMANTE PERU
            </div>
        </div>
    )
}
export default Footer;