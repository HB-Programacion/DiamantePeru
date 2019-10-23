import React from "react";

import arrJoyas from '../data';
import Carrousel from './Carrousel'
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";


const Matrimonio = () => {
  return (
    <Carrousel 
      arrofJoyas={arrJoyas.filter(e =>  e.ocasion === "matrimonio")}  
      title={"MATRIMONIO"}>
    </Carrousel>
  )
}
export default Matrimonio