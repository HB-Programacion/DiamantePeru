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
                        <p className="mt-4">¡Inauguramos Club Diamante, conoce más sobre el sorteo por apertura!</p>
                        <a className="leer-mas-blog mt-4">Leer más ></a>
                    </div>
            {/* </div> */}
            <div class="container p-5 mt-3">
                <div class="row">
                    <div class="col-sm-5 col-md-6 mb-5">
                        <div class="card" style={{width: "15 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body pb-3">
                                <h5 class="card-title mt-4 pl-5 ">CLUB DIAMANTE</h5>
                                <p class="card-text pl-5 pr-5">Agradecemos tu confianza en nosotros y decidimos premiar esa confianza con diversos beneficios para brindarte que sean perfectos para ti.</p>
                                <hr class="my-3"/>
                                <a className="pl-5">LEER MAS<i class="fas fa-chevron-right arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-6 mb-5">
                        <div class="card" style={{width: "18 rem"}}>
                            <img src={foto1} class="w100" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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