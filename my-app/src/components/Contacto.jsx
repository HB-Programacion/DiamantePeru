 import React from 'react'

const Contacto = () => {
    return (

<div className="diamante">

    <div className="white-background-text">
       <div className="real-white">
       <h1>CONTACTO</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae sapiente veritatis molestias temporibus, vel, accusamus eaque aut soluta consequuntur tempora pariatur dignissimos, dolorum eveniet debitis reprehenderit enim nesciunt quae!</p>
  <div className="container-text-inputs">
      <div className="flex-input">
           

   <input type="text" name="" id="" required className="contact-input-size" placeholder="Nombre"/>
   <input type="text" name="" id=""   className="contact-input-size" placeholder="Apellido"/>
 
      </div>
     <div className="flex-input">
     <input type="number" name="" id=""  className="contact-input-size" placeholder="Telefono"/>  
    <input type="email" name="" id=""   className="contact-input-size" placeholder="Correo Electrónico"/>
     </div>
   <textarea  className="contact-input-size textarea" placeholder="Mensaje" name="" id="" cols="30" rows="10"></textarea>
  </div>
  <button className="btn-flat black color-white border-none btn-contact"> Enviar</button>
       </div>
   <div className="container-more-contact">
       <p className="text-contact">Av. reducto 1135 - Miraflores-Lima,Perú</p>
       <p className="text-contact"><i class="fas fa-envelope p-right-05"></i>consultas@diamanteperu.com</p>
       <p className="text-contact"><i class="fas fa-phone-alt  p-right-05"></i>01 242-8536</p>
   </div>
    </div>
    
</div>


    )
}

export default Contacto
