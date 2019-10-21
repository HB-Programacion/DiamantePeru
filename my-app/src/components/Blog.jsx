import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import foto1 from "../img/Clip.png";

const Blog = () =>{
 return (
     <Route>
        <div className = "h100 animated fadeIn position-relative">
            
            <img className="w80 img-blog-principal" src={foto1} alt=""/>
                    <div className="w40 cuadro pt-4 pb-3 pl-5 pr-5">
                        <span className="">SORTEO APERTURA CLUB DIAMANTE:</span>
                        <p className="mt-4">¡Inauguramos Club Diamante, conoce más sobre el sorteo por apertura!</p>
                        <div className="leer-mas-blog">
                            <a className="mt-4">Leer más ></a>
                        </div>
                    </div>
            
            
</div>
       
     </Route>

 )
}
export default Blog;