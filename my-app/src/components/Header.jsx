import React from 'react';
// eslint-disable-next-line
import logo from '../img/LogoDiamante.svg'
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'

const Header = () => {
  return (
    // className="width-100 d-flex"
    <header data-testid="header" className='w100 flexWrap bd-bottom'>
      <div className="allCenter text-size12 mr-5">
        {/* <a><img src={buscar} className="h13px" /> BUSCAR</a> */}
        <a className="ml-5"><img src={ubicacion} className="h13px" /> CONTACTO</a>
      </div>
      <div className="flex ml-5 mr-5">
        <img src={logo} alt="logo" className="center pb-2 pt-1 img-logo m-auto w40" />
      </div>
      <div className="allCenter text-size12 ml-5">
        <a>TESTIMONIOS</a>
        <a className="ml-5">BLOG</a>
      </div>
    </header>
  )
};

export default Header;

