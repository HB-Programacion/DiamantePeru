import React, {useState} from 'react';
import Historia from "./Historia"

const Nav = () => {
  const[home, setHome ] = useState();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse content-center" id="navbarNavDropdown">
          <ul class="navbar-nav" >
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#HOME" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                HOME
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#HISTORIA" type="button" onClickonClick={() => {
          setHome("historia")}}>HISTORIA</a>
                <a class="dropdown-item" href="#DIMANATE PERU">DIAMANTE PERU</a>
                <a class="dropdown-item" href="#DIAMANTE">DIAMANTE</a>
                <a class="dropdown-item" href="#NOVIOS">NOVIOS</a>
                <a class="dropdown-item" href="#JOYAS">JOYAS</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DIAMANTE PERU
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DIAMANTES
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                NOVIOS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DIAMANTE PERU
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {home == "historia" && (
          <div><Historia/></div>
          
        )}
      </div>
</>
  )
}
export default Nav;