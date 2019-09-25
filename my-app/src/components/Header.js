import React from 'react';
// eslint-disable-next-line

import logo from '../img/LogoDiamante.svg'
const Header = () => {
  return (
    // className="width-100 d-flex"
    <header data-testid="header" className='width-100 d-flex bd-bottom'>
        <img src={logo} alt="logo" className="center pb-2 pt-1 img-logo m-auto w5" />
    </header>
  )
};

export default Header;
