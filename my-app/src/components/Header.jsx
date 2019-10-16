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





/* eslint-disable jsx-a11y/accessible-emoji */

// import React, { useState, useEffect } from "react";
// import "./Header.css";
// import { CSSTransition } from "react-transition-group";

// export default function Header() {
//   const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 700px)");
//     mediaQuery.addListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const handleMediaQueryChange = mediaQuery => {
//     if (mediaQuery.matches) {
//       setIsSmallScreen(true);
//     } else {
//       setIsSmallScreen(false);
//     }
//   };

//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };

//   return (
//     <header className="Header">
//       <img src={require("../img/LogoDiamante.svg")} className="Logo" alt="logo" />
//       <CSSTransition
//         in={!isSmallScreen || isNavVisible}
//         timeout={350}
//         classNames="NavAnimation"
//         unmountOnExit
//       >
//         <nav className="Nav">
//           <a href="/">
//           <nav>
//             <a href="/"> home1</a>
//           </nav>
//           </a>
//           <a href="/">Articles</a>
//           <a href="/">About</a>
//         </nav>
//       </CSSTransition>
//       <button onClick={toggleNav} className="Burger">
//         🍔 
//       </button>
//     </header>
//   );
// }
