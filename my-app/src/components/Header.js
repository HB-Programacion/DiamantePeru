import React from 'react';
// eslint-disable-next-line
import logo from '../img/LogoDiamante.svg'
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'

const Header = () => {
  return (
    // className="width-100 d-flex"
    <header data-testid="header" className='width-100 d-flex bd-bottom between'>
      <div className="ml-5 mt-4 text-size12">
        <a><img src={buscar} className="h13px" /> BUSCAR</a>
        <a className="ml-5"><img src={ubicacion} className="h13px" /> CONTACTO</a>
      </div>
      <div className="flex">
        <img src={logo} alt="logo" className="center pb-2 pt-1 img-logo m-auto w40" />
      </div>
      <div className="mr-5 mt-4 text-size12">
        <a>TESTIMONIOS</a>
        <a className="ml-5">BLOG</a>
      </div>
    </header>
  )
};

export default Header;
