import React, { useState } from 'react';
import facebook from './../img/Facebook.svg';
import instagram from '../img/Instagram.svg';
import dotenv from "dotenv";
dotenv.config();
// import BACKEND_URL from '../../src/.env.produccion'
//require('dotenv').config()

const Footer = () => {
    const [email,setEmail]=useState("");
    const  handleChange =(e)=> {
       const value = e.target.value;
   
    return setEmail(value)
     };
   async function fetchdata(e){ 
       e.preventDefault();
    //    const res =await fetch(`${BACKEND_URL}/api/customers`, {
      const res =await fetch(`http://www.diamanteperu.com/api/customers`, {
       method: 'POST',
       body: JSON.stringify({ EmailUser: email }),
       headers: new Headers({ "Content-Type": "application/json" }) 
     })
     
   res.json().then(res=>console.log(res)).then(setEmail("Muchas gracias por su suscripción"))
   .catch(error=> console.log(error));
   };
   
   

    return(
        <div className="mt-4">
            <footer className=" bd-top bd-bottom flex flex-column-reverse1">
                <div className="container-contact flex w20 w100-xs mb-2">
                    <a href="https://es-la.facebook.com/DiamantePeruOficial/" className="pad-l-t-3">
                       <img className="contact-us" alt="facebook" src={facebook}></img>
                    </a>
                    <a href="https://www.instagram.com/diamanteperu/?hl=es-la"  className="pad-l-t-3">
                        
                       <img  className="contact-us" alt="instagram" src={instagram}></img>
                    </a>
                </div>
                <form  onSubmit={fetchdata}   method="post"
                
                action="/api/customers"
                
                className="mt-4 mb-4 center h198px w62 w100-xs">
                    <label className="text-size14 spacing3 ">
                        <strong>SUSCRÍBETE A NUESTRO BOLETÍN</strong></label>
                    <div className="form-xs">
      <input   name='email'
      value={email}
      onChange={(e)=>{handleChange(e)}} 
      className="w25 p-1 text-size14 border-gray-3" 
       type="email" placeholder="Correo Electrónico"/>
                       
                        <button className="black  text-size14 color-white btn-flat border-none raleway-medium-italic"  type="submit"  >SUSCRÍBETE</button>
                      
                        <p className="interline1 pad-txt-19 text-size12 mt-1 mb-1 center justify ">
                            Al suscribirse a nuestro boletín, acepta que le enviemos correos electrónicos de marketing 
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