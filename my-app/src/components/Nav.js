import React from 'react';
import Historia from "./Historia"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';

const Nav = () => {
  return (
    <Route>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse content-center" id="navbarNavDropdown">
          <ul class="navbar-nav" >
            <li class="nav-item dropdown">
              <Link to="/" 
               class="nav-link " href="#HOME" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                HOME
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link to="DIAMANTE PERU"
              class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DIAMANTE PERU
              </Link>
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
              <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                JOYAS
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div>
      <Route path="/" exact component={Home} />
      
      </div> */}
    </Route>
      
  )
}
export default Nav;


// import React from 'react'
// import { Tabs, Tab, Panel } from '@bumaga/tabs'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
 
// import Historia from "./Historia"
// import Home from './Home';
// import Motivos from './Motivos';

// const Nav= () => {
//   return(
//     <Route>
//   <Tabs className="">
//     <div className="center">
//       <Tab><button>HOME</button></Tab>
//       <Tab><button>DIAMANTE PERU</button></Tab>
//       <Tab><button>DIAMANTES</button></Tab>
//       <Tab><button>NOVIOS</button></Tab>
//       <Tab><button>JOYAS</button></Tab>
//     </div>
 
//     <Panel><Home/></Panel>
//     <Panel>
//       <Tabs>
//         <div className="center">
//           <Tab><button>Historia</button></Tab>
//           <Tab><button>Motivos</button></Tab>
//           <Tab><button>Premios</button></Tab>
//           <Tab><button>Convenios</button></Tab>
//         </div>
//         <Panel><Historia/></Panel>
//         <Panel><Motivos/></Panel>
//       </Tabs>
//     </Panel>
//     <Panel>
//       <Tabs>
//         <div className="center">
//           <Tab><button>Elección</button></Tab>
//           <Tab><button>5Cs</button></Tab>
//           <Tab><button>Certificaciones</button></Tab>
//           <Tab><button>Mantenimiento</button></Tab>

//         </div>
//       </Tabs>
//     </Panel>
//     <Panel>
//       <Tabs>
//         <div>
//           <Tab><button>Compromiso</button> </Tab>
//           <Tab><button>Novios</button> </Tab>
//         </div>
//       </Tabs>
//     </Panel>
//     <Panel><p>JOYAS</p></Panel>
//   </Tabs>
//   </Route>
// )};
// export default Nav;