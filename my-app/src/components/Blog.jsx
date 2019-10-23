import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import foto1 from "../img/Clip.png";

const Blog = () =>{
 return (
     <Route>
        <div className = "w100 animated fadeIn">
            {/* <div className="position-relative"> */}
                <img className="w80 img-blog-principal" src={foto1} alt=""/>
                    <div className="w40 cuadro pt-4 pb-3 pl-5 pr-5">
                        <span className="">SORTEO APERTURA CLUB DIAMANTE:</span>
                        <p className="mt-3">¡Inauguramos Club Diamante, conoce más sobre el sorteo por apertura!</p>
                        <a className="leer-mas-blog mt-4">Leer más ></a>
                    </div>
            {/* </div> */}
            <div class="container p-4 mt-3 mt4-xs">
                <div class="row">
                    <div class="col-sm-6 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body p-3">
                                <h5 class="card-title"><b>CLUB DIAMANTE</b></h5>
                                <p class="card-text">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte que sean perfectos para ti.</p>
                                <hr class="my-3"/>
                                <a className="">LEER MAS<i class="fas fa-chevron-right arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body p-3">
                                <h5 class="card-title"><b>CLUB DIAMANTE</b></h5>
                                <p class="card-text">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte que sean perfectos para ti.</p>
                                <hr class="my-3"/>
                                <a className="">LEER MAS<i class="fas fa-chevron-right arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body p-3">
                                <h5 class="card-title"><b>CLUB DIAMANTE</b></h5>
                                <p class="card-text">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte que sean perfectos para ti.</p>
                                <hr class="my-3"/>
                                <a className="">LEER MAS<i class="fas fa-chevron-right arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body p-3">
                                <h5 class="card-title"><b>CLUB DIAMANTE</b></h5>
                                <p class="card-text">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte que sean perfectos para ti.</p>
                                <hr class="my-3"/>
                                <a className="">LEER MAS<i class="fas fa-chevron-right arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
       </div>
     </Route>

 )
}
export default Blog;