import React from "react";
import premios from "../img/DIAMANTE_premios-02.png";
import premios2 from "../img/DIAMANTE_premios-01.png";
import { Helmet } from "react-helmet";
const Premios = () => {
    return(
        <>
        <Helmet>
            <title>Premios - Diamante Perú</title>
            <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
            <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Mantenimiento" />
        </Helmet>
        <div className=" w100 pb-pt-4rem pb-9 pt-5-xs animated fadeIn gray fondo-shine"> 
        <span className="p-3 pb-3 flex flexCenter text-size27"><b>PREMIOS</b></span>

            <div className="flex around position-relative">
                <a className="btn-floating position-absolute left3-premios" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
                <a className="btn-floating position-absolute right3-premios" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
            </div>
            <div className="container my-4">
                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                <ol className="carousel-indicators cind-ben">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-12  cont-ben">
                                <div className="mb-2  flex flexWrap">
                                    <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
                                        {/* <span className="p-4 flex flexCenter text-size27"><b>PREMIOS</b></span> */}
                                        <div className='interline1 pb-2 ml-15 pad-l-responsive d-flex align-items-center'>
                                            <p className="mb-5 interline1">
                                                Gracias a nuestros altos estándares de calidad y gran servicio, hemos obtenido 3 veces el reconocimiento a Empresa Peruana del Año en el rubro de Distribuidor de Diamante y también en la fabricación de diseño de joyas con diamantes (custom made jewelry)</p>
                                        </div>
                                    </div>   
                                    <figure className="w50 allCenter convenioResImg">
                                        <img src={premios} className='w100' alt="diamante"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row">
                            <div className="col-md-12  cont-ben">
                                <div className="mb-2  flex flexWrap">
                                    <div className="card-body w50 pl-3 convenioRes geosansLight w50 flex flex-column alignSelCenter wResponsive100">
                                        {/* <span className="p-4 flex flexCenter text-size27"><b>PREMIOS</b></span> */}
                                        <div className='interline1 pb-2 ml-15 pad-l-responsive d-flex align-items-center'>
                                            <p className="mb-5 interline1">En su visita a la Bolsa de Diamantes en Israel reciben el premio Outstanding Importer Award título referido por ser la empresa que vende las mejor calidad de diamantes a nivel Latinoamérica. 
                                            </p>
                                        </div>
                                    </div>   
                                    <figure className="w50 allCenter convenioResImg">
                                        <img src={premios2} className='w100' alt="diamante"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            {/* <span className="p-4 flex flexCenter text-size27"><b>PREMIOS</b></span>
            <div className=" allCenter flexWrap-xs ">
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                       <img className="logoPremios " src={premios} alt="" srcset=""/>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Gracias a nuestros altos estándares de calidad y gran servicio, hemos obtenido 3 veces el reconocimiento a Empresa Peruana del Año en el rubro de Distribuidor de Diamante y también en la fabricación de diseño de joyas con diamantes (custom made jewelry)</p>
                    </div>
                </div>    </div>
        </div> */}
                {/* <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 2</p>
                    </div>
                </div>
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 3</p>
                    </div>
                </div>
                <div className="allcenter ml-3 mr-3" >
                    <figure className="contCenter mt-3">
                        <div className="logoPremios ">
                        </div>
                    </figure>
                    <div id="div-premios"className="m-auto-premios">
                        <p className="mb-5 interline1">Premio 4</p>
                    </div>
                </div> */}     
        </>
    )
};
export default Premios;



