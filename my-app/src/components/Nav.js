// import React from 'react';
// import Historia from "./Historia"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from './Home';
// import logo from '../img/LogoDiamante.svg'
// import ubicacion from '../img/Ubication.svg'

// const Nav = () => {
//   return (
//     <Route>
//       <nav class="navbar navbar-expand-lg navbar-light ">
//         <div class="collapse navbar-collapse content-center" id="navbarNavDropdown">
//           <ul class="navbar-nav" >
//             <li class="nav-item dropdown">
//               <Link to="/" 
//                class="nav-link " href="#HOME" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 HOME
//               </Link>
//             </li>
//             <li class="nav-item dropdown">
//               <Link to="DIAMANTE PERU"
//               class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 DIAMANTE PERU
//               </Link>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <a class="dropdown-item" href="#">Something else here</a>
//               </div>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 DIAMANTES
//               </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <a class="dropdown-item" href="#">Something else here</a>
//               </div>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 NOVIOS
//               </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <a class="dropdown-item" href="#">Something else here</a>
//               </div>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 JOYAS
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div>
//       {/* <Route path="/" exact component={Home} /> */}
//       </div>
//     </Route>
      
//   )
// }
// export default Nav;


// 




// const Nav = () => {
//   return (
//     <>
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         {/* <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-success">Search</Button>
//         </Form> */}
//       </Navbar.Collapse>
//     </Navbar>

//     </>
//   )
// }
// export default Nav;












import React from 'react'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
 
import Historia from "./Historia"
import Home from './Home';
import Motivos from './Motivos';
import Premios from './Premios';
import ConveniosTab from './ConveniosTab';
import Eleccion from './Eleccion'
import Cs from './Cs';
import Certificaciones from './Certificaciones';

const Nav= () => {
  return(
    <Route>
  <Tabs className="">
    <div className="center">
      <Tab><button className="buttonOfNavStyle">HOME <span className="plusSize"> +</span> </button></Tab>
      <Tab><button className="buttonOfNavStyle" >DIAMANTE PERU<span className="plusSize"> +</span> </button></Tab>
      <Tab><button className="buttonOfNavStyle" >DIAMANTES<span className="plusSize"> +</span> </button></Tab>
      <Tab><button className="buttonOfNavStyle" >NOVIOS<span className="plusSize"> +</span> </button></Tab>
      <Tab><button className="buttonOfNavStyle" >JOYAS<span className="plusSize"> +</span> </button></Tab>
    </div>
 
    <Panel><Home/></Panel>
    <Panel>
      <Tabs>
        <div className="center grayNav">
          <Tab><button className="buttonOfNavStyleGray">Historia</button></Tab>
          <Tab><button className="buttonOfNavStyleGray">Motivos</button></Tab>
          <Tab><button className="buttonOfNavStyleGray" >Premios</button></Tab>
          <Tab><button className="buttonOfNavStyleGray">Convenios</button></Tab>
        </div>
        <Panel><Historia/></Panel>
        <Panel><Motivos/></Panel>
        <Panel><Premios/></Panel>
        <Panel><ConveniosTab/></Panel>
      </Tabs>
    </Panel>
    <Panel>
      <Tabs>
        <div className="center grayNav ">
          <Tab><button className="buttonOfNavStyleGray" >Elección</button></Tab>
          <Tab><button className="buttonOfNavStyleGray" >5Cs</button></Tab>
          <Tab><button className="buttonOfNavStyleGray" >Certificaciones</button></Tab>
          <Tab><button className="buttonOfNavStyleGray" >Mantenimiento</button></Tab>

        </div>
        <Panel><Eleccion/></Panel>
        <Panel><Cs/></Panel>
        <Panel><Certificaciones/></Panel>
        <Panel><ConveniosTab/></Panel>
      </Tabs>
    </Panel>
    <Panel>
      <Tabs>
        <div className="center grayNav " >
          <Tab><button className="buttonOfNavStyleGray" >Compromiso</button> </Tab>
          <Tab><button className="buttonOfNavStyleGray">Novios</button> </Tab>
        </div>
      </Tabs>
    </Panel>
    <Panel><p>JOYAS</p></Panel>
  </Tabs>
  </Route>
)};
export default Nav;