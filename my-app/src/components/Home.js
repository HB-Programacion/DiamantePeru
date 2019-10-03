import React from "react";
import Slide from "./Slide";
import Carrousel from "./Carrousel";
import Convenio from "./Convenio";

import foto1 from "../img/Clip.png";
import foto2 from "../img/foto2.png";
import foto3 from "../img/foto3.png";
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"

const Home = () => {
    return(
        <div className="animated fadeIn">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src={foto1} class="d-block w-100" alt="chica"/>
                    </div>
                    <div class="carousel-item">
                        <img src={foto2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={foto3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel"> */}
                {/* <div className="controls-top center mt-5 mb-3">
                    <a className="btn-floating color-black" href="#carousel-with-lb" data-slide="prev"><i
                        className="fas fa-chevron-left"></i></a>
                    <label classNameName="pl-4 pr-4 spacing4 text-size27" >SORTIJAS</label>
                    <a className="btn-floating color-black" href="#carousel-with-lb" data-slide="next"><i
                        className="fas fa-chevron-right"></i></a>
                </div> */}
                {/* <div className="container">
                    <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div class="col-sm ">
                                        <img src={img1} class="d-block w-100 slide"/>
                                    </div>
                                    <div class="col-sm">
                                        <img src={img2} class="d-block w-100 slide"/>
                                    </div>
                                    <div class="col-sm">
                                        <img src={img3} class="d-block w-100  slide"/>
                                    </div>
                                    <div class="col-sm">
                                        <img src={img4} class="d-block w-100 slide"/>
                                    </div>
                                    <div class="col-sm">
                                        <img src={img5} class="d-block w-100 slide"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div class="col-sm">
                                            <img src={img6} class="d-block w-100 slide"/>
                                        </div>
                                        <div class="col-sm">
                                            <img src={img7} class="d-block w-100 slide"/>
                                        </div>
                                        <div class="col-sm">
                                            <img src={img8} class="d-block w-100  slide"/>
                                        </div>
                                        <div class="col-sm">
                                            <img src={img9} class="d-block w-100 slide"/>
                                        </div>
                                        <div class="col-sm">
                                            <img src={img1} class="d-block w-100 slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Carrousel/>
        {/* <Convenio/> */}







        
        </div>
    )
}
export default Home;