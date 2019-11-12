import React, { useState } from 'react';

const Contacto = () => {
    const [state,setState]= useState("");
    const [name,setName]=useState("");
    const [last,setLast]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");
    const  handleChange =(e,stateOne)=> {
       const value = e.target.value;
   
    return stateOne(value);
     };
   async function fetchdata(e){ 
       e.preventDefault();
      const res =await fetch('http://localhost:5000/api/consultsOfCustomers', {
       method: 'POST',
       body: JSON.stringify({
        NombreUser:name,
        ApellidoUser:last,   
        CelularUser:phone,
        EmailUser: email ,
        MensajeUser:message,
    
    }),
       headers: new Headers({ "Content-Type": "application/json" }) 
     })
     
   res.json().then(res=>console.log(res)).then(setState("recibido"))
   .catch(error=> console.log(error));
   };
return (
    <div className="diamante pb-9">
        <div className="white-background-text">
       
          {state === "" && (
         <> <form onSubmit={fetchdata}   method="post"
                
         action="/api/consultsOfCustomers" className="real-white" >
         <h1 className="raleway-semibold font-size-2em" >CONTACTO</h1>
         <p className="raleway-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae sapiente veritatis molestias temporibus, vel, accusamus eaque aut soluta consequuntur tempora pariatur dignissimos, dolorum eveniet debitis reprehenderit enim nesciunt quae!</p>
         <div className="container-text-inputs">
             <div className="flex-input raleway-regular">
                 <input type="text" name=""
                  value={name}
                  onChange={(e)=>{handleChange(e,setName)}}
                 id="name" name="name" required className="contact-input-size" placeholder="Nombre*"/>
                 <input type="text"   value={last}
                  onChange={(e)=>{handleChange(e,setLast)}}
                  id="lastName" name="apellido"  className="contact-input-size" placeholder="Apellido*"/>
             </div>
             <div className="flex-input raleway-regular">
                 <input type="number"   value={phone}
                  onChange={(e)=>{handleChange(e,setPhone)}}
                   id="phone"  name="telefono" required className="contact-input-size" placeholder="Telefono*"/>  

                 <input type="email"    value={email}
onChange={(e)=>{handleChange(e,setEmail)}}  id="mail"  name="correo" required className="contact-input-size" placeholder="Correo Electrónico*"/>
             </div>
             <textarea  value={message}
onChange={(e)=>{handleChange(e,setMessage)}}
             name="mensaje" id="message" className="contact-input-size textarea raleway-regular" required placeholder="Mensaje"  cols="30" rows="10"></textarea>
         </div>
         <button type="submit"className="btn-flat black color-white border-none btn-contact text-size14 raleway-medium-italic">ENVIAR </button>
   </form>
    
    
</>
                
               
       
            )}
            {state === "recibido" && (
         
          <>
            <form className="real-white afterContact">
              <h1 className="raleway-semibold font-size-2em">¡ GRACIAS POR ESCRIBIRNOS !</h1>
              <p className="raleway-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae sapiente veritatis molestias temporibus, vel, accusamus eaque aut soluta consequuntur tempora pariatur dignissimos, dolorum eveniet debitis reprehenderit enim nesciunt quae!</p>
         <div className="container-text-inputs"></div>
            </form>

          </>
            )}
            <div className="container-more-contact raleway-medium">
                <p className="text-contact">Av. reducto 1135 - Miraflores-Lima,Perú</p>
                <p className="text-contact consultas"><i className="fas fa-envelope p-right-05 "></i>consultas@diamanteperu.com</p>
                <p className="text-contact"><i className="fas fa-phone-alt  p-right-05"></i>01 242-8536</p>
            </div>
            <div className="center raleway-medium font-size-1em line-heigth-1">
                <p className="text-contact horariosAtencion center ">Horarios de Atención: Lun – Vier: 10 am – 7 pm / Sáb: 10 am – 6 pm</p>
                <p className="text-contact cierreRefrigerio center">(Cierre por refrigerio de 2pm – 3pm).</p>
            </div>
        </div>  
    </div>
    )
}

export default Contacto
