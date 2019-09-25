import React from "react";

const Footer = () => {
    return(
        <div className="mt-5">
            <footer className=" bd-top bd-bottom">
                <form className="mt-4 mb-4 center">
                    <label className="text-size14 spacing3"><strong>SUSCRIBETE A NUESTRO BOLETIN</strong></label>
                    <div>
                        <input className="w25" type="email" placeholder="correo electronico"/>
                        <input className="black color-white" type="button" value="Suscribete"/>
                        <p className="interline mt-1 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor</p>
                    </div>
                </form>
            </footer>
            <div className="mt-4 mb-4 center text-size12">
            &copy; 2019 DIAMANTE PERU
            </div>
        </div>
    )
}
export default Footer;