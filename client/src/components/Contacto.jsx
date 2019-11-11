 import React from 'react'

const Contacto = () => {
    return (
    <div className="diamante">
        <div className="white-background-text">
        <form action="enviar.php" className="real-white" method="post">
                <h1 className="raleway-semibold font-size-2em" >CONTACTO</h1>
                <p className="raleway-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae sapiente veritatis molestias temporibus, vel, accusamus eaque aut soluta consequuntur tempora pariatur dignissimos, dolorum eveniet debitis reprehenderit enim nesciunt quae!</p>
                <div className="container-text-inputs">
                    <div className="flex-input raleway-regular">
                        <input type="text" name="" id="name" name="name" required className="contact-input-size" placeholder="Nombre*"/>
                        <input type="text" name="" id="lastName" name="apellido"  className="contact-input-size" placeholder="Apellido*"/>
                    </div>
                    <div className="flex-input raleway-regular">
                        <input type="number" name="telefono" id="phone"  name="telefono" required className="contact-input-size" placeholder="Telefono*"/>  
                        <input type="email" name="correp" id="mail"  name="correo" required className="contact-input-size" placeholder="Correo Electrónico*"/>
                    </div>
                    <textarea name="mensaje" id="message" className="contact-input-size textarea raleway-regular" required placeholder="Mensaje" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit"className="btn-flat black color-white border-none btn-contact text-size14 raleway-medium-italic">ENVIAR </button>
          </form>
            <div className="container-more-contact raleway-medium">
                <p className="text-contact">Av. reducto 1135 - Miraflores-Lima,Perú</p>
                <p className="text-contact consultas"><i className="fas fa-envelope p-right-05 "></i>consultas@diamanteperu.com</p>
                <p className="text-contact"><i className="fas fa-phone-alt  p-right-05"></i>01 242-8536</p>
            </div>
            <div className="center raleway-medium font-size-1em line-heigth-1">
                <p className="text-contact.horariosAtencio center ">Horarios de Atención: Lun – Vier: 10 am – 7 pm / Sáb: 10 am – 6 pm</p>
                <p className="text-contact cierreRefrigerio center">(Cierre por refrigerio de 2pm – 3pm).</p>
            </div>
        </div>  
    </div>
    )
}

export default Contacto
