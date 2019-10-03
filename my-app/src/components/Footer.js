import React from "react";

const Footer = () => {
    return(
        <div className="mt-4">
            <footer className=" bd-top bd-bottom">
                <form className="mt-4 mb-4 center h198px">
                    <label className="text-size14 spacing3"><strong>SUSCRIBETE A NUESTRO BOLETIN</strong></label>
                    <div className="">
                        <input className="w25 p-1 text-size14" type="email" placeholder="correo electronico"/>
                        <input className="black p-1 text-size14 color-white" type="button" value="Suscribete"/>
                        <p className="interline mt-1 mb-1 center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor</p>
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