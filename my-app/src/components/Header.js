import React from 'react';
// eslint-disable-next-line
import logo from '../img/LogoDiamante.svg'
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg'

const Header = () => {
  return (
    // className="width-100 d-flex"
    <header data-testid="header" className='w100 flexWrap bd-bottom'>
      <div className="allCenter text-size12">
        <a><img src={buscar} className="h13px" /> BUSCAR</a>
        <a className="ml-5"><img src={ubicacion} className="h13px" /> CONTACTO</a>
      </div>
      <div className="flex">
        <img src={logo} alt="logo" className="center pb-2 pt-1 img-logo m-auto w40" />
      </div>
      <div className="allCenter text-size12">
        <a>TESTIMONIOS</a>
        <a className="ml-5">BLOG</a>
      </div>
    </header>
  )
};

export default Header;

{/* <header className="bd-bottom flex">
  
  <nav role="menu">
     <ul className="">
     <div>
       <li>
       <a><img src={buscar} className="h13px" /> BUSCAR</a>
       </li>
       <li>
       <a className=""><img src={ubicacion} className="h13px" /> CONTACTO</a>
       </li>
       </div>
       <div>
       <li>
         <a><img src={logo} class="" /></a>
        </li>
        </div>
        <div>
       <li><a>TESTIMONIOS</a></li>
       <li><a className="">BLOG</a></li>
       </div>
     </ul>
  </nav>
</header>
  )}
export default Header; */}