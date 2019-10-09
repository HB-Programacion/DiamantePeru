import React from 'react';
import Historia from "./Historia"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import logo from '../img/LogoDiamante.svg'
import ubicacion from '../img/Ubication.svg'

const Nav = () => {
  return (
    <Route>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse content-center" id="navbarNavDropdown">
        
          <ul class="navbar-nav" >
          
            <li class="nav-item dropdown">
              <Link to="/" 
               class="nav-link " href="#HOME" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                HOME
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DIAMANTE PERU
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="historia"class="dropdown-item" >HISTORIA</Link>
                {/* <a class="dropdown-item" href="#">Action</a> */}
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
      <div>
      <Route path="/" exact component={Home} />
      <Route path="/historia" exact component={Historia} />
      </div>
    </Route>
      
  )
}
export default Nav;


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
//<div className="container-fluid">
          
//<div className="row">
 //<div className="col-1"></div> 
 //<div className="col-1 cel"> { <a><img src={buscar} className="h13px" /> BUSCAR</a>}</div> 
//<div className="col-1 cel"><a className="ml-2"><img src={ubicacion} className="h13px" /> CONTACTO</a></div> 
 //<div className="col-6  ml-5 mr-5"> <img src={logo} alt="logo"  className=" logo center pb-2 pt-1 img-logo m-auto w40" /></div> 
 //<div className="col-1 cel"><a>TESTIMONIOS</a></div> 
 //<div className="col-1 cel"><a className="ml-2">BLOG</a></div> 
 //<div className="col-1"> <img src={menu} className="imgMenu"/></div> 
//</div>

//</div>





// import React from 'react'
//  import { Tabs, Tab, Panel } from '@bumaga/tabs'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
 
// import Historia from "./Historia"
// import Home from './Home';
// import Motivos from './Motivos';
// import Premios from './Premios';
// import ConveniosTab from './ConveniosTab';
// import Eleccion from './Eleccion'
// import Cs from './Cs';
// import Certificaciones from './Certificaciones';
// import menu from "../img/menu.svg";
// import logo from '../img/LogoDiamante.svg'
// import buscar from '../img/LupaBuscar.svg'
// import ubicacion from '../img/Ubication.svg'

// const Nav= () => {
//   return(
//     <Route>
//       <header>
//        <div data-testid="header" className='w100 flexWrap'>
      // <div className="allCenter text-size12 mr-5 cel">
      //   <a className="ml-5"><img src={ubicacion} className="h13px" /> CONTACTO
      //   </a>
      // </div>
      // <div className="flex ml-5 mr-5">
      //   <img src={logo} alt="logo" className="center pb-2 pt-1 img-logo m-auto w40" />
      // </div>
      // <div className="allCenter text-size12 ml-5 cel">
      //   <a>TESTIMONIOS</a>
      //   <a className="ml-5">BLOG</a>
      // </div>
//       </div>
//       <img src={menu} className="imgMenu"/>
//       <input type='checkbox' id="btn-menu"/>
//       <nav className="menu center">
//         <div>
//         <ul className="mainMenu">
//           <li>
//             <a href="#" className="">HOME + 
//             </a>
//           </li>
//           <li><a href="#" id='diamantesPeru' className="">DIAMANTES PERU + </a>
//           <ul  className="center celVert">
//             <li><a href="#" className="" >Historia</a></li>
//             <li><a href="#" className="" >Motivos</a></li>
//             <li><a href="#" className="" >Premios</a></li>
//             <li><a href="#" className="" >Convenios</a></li>
//           </ul>
//           </li>
//           <li><a href="#" className="">DIAMANTES + </a>
//           <ul className="center celVert">
//             <li><a href="#" className="" >Elección</a></li>
//             <li><a href="#" className="">5Cs</a></li>
//             <li><a href="#" className="" >Certificaciones</a></li>
//             <li><a href="#" className="" >Mantenimientos</a></li>
//           </ul>
//           </li>
//           <li><a href="#" className="">NOVIOS + </a>
//           <ul  className="center celVert">
//             <li><a href="#" className="" >Compromiso</a></li>
//             <li><a href="#"className="" >Novios</a></li>
//           </ul>
//           </li>
          // <li><a href="#" className="raya">JOYAS + </a></li>
          // <li  className="dest"><a href="#">BLOG</a></li>
          // <li  className="dest"><a href="#" >TESTIMONIO</a></li>
          // <li  className="dest"><a href="#" >CONTACTO</a></li>
//         </ul>
//         </div>

//       </nav>
//   </header>
  
//   </Route>
// )};
// export default Nav;




// import Historia from "./Historia"
// import Home from './Home';
// import Motivos from './Motivos';
// import Premios from './Premios';
// import ConveniosTab from './ConveniosTab';
// import Eleccion from './Eleccion'
// import Cs from './Cs';
// import Certificaciones from './Certificaciones';

// const Nav= () => {
  
//   return(
//     <Route>
//   <Tabs className="">
//     <div className="center none">
//       <Tab><button className="buttonOfNavStyle">HOME <span className="plusSize"> +</span> </button></Tab>
//       <Tab><button className="buttonOfNavStyle" >DIAMANTE PERU<span className="plusSize"> +</span> </button></Tab>
//       <Tab><button className="buttonOfNavStyle" >DIAMANTES<span className="plusSize"> +</span> </button></Tab>
//       <Tab><button className="buttonOfNavStyle" >NOVIOS<span className="plusSize"> +</span> </button></Tab>
//       <Tab><button className="buttonOfNavStyle" >JOYAS<span className="plusSize"> +</span> </button></Tab>
//     </div>
//     <Panel><Home/></Panel>
//     <Panel>
//       <Tabs>
//         <div className="center grayNav">
//           <Tab><button className="buttonOfNavStyleGray">Historia</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray">Motivos</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray" >Premios</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray">Convenios</button></Tab>
//         </div>
//         <Panel><Historia/></Panel>
//         <Panel><Motivos/></Panel>
//         <Panel><Premios/></Panel>
//         <Panel><ConveniosTab/></Panel>
//       </Tabs>
//     </Panel>
//     <Panel>
//       <Tabs>
//         <div className="center grayNav none">
//           <Tab><button className="buttonOfNavStyleGray" >Elección</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray" >5Cs</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray" >Certificaciones</button></Tab>
//           <Tab><button className="buttonOfNavStyleGray" >Mantenimiento</button></Tab>
//           </div>
//         <Panel><Eleccion/></Panel>
//         <Panel><Cs/></Panel>
//         <Panel><Certificaciones/></Panel>
//         <Panel><ConveniosTab/></Panel>
//       </Tabs>
//     </Panel>
//     <Panel>
//       <Tabs>
//         <div className="center grayNav " >
//           <Tab><button className="buttonOfNavStyleGray" >Compromiso</button> </Tab>
//           <Tab><button className="buttonOfNavStyleGray">Novios</button> </Tab>
//         </div>
//       </Tabs>
//     </Panel>
//     <Panel><p>JOYAS</p></Panel>
//   </Tabs>
//   <div className="mobile">
//         <ul className="mainMenu">
//           <li>
//             <a href="#" className="">HOME + 
//             </a>
//           </li>
//           <li><a href="#" id='diamantesPeru' className="">DIAMANTES PERU + </a>
//           <ul  className="center celVert">
//             <li><a href="#" className="" >Historia</a></li>
//             <li><a href="#" className="" >Motivos</a></li>
//             <li><a href="#" className="" >Premios</a></li>
//             <li><a href="#" className="" >Convenios</a></li>
//           </ul>
//           </li>
//           <li><a href="#" className="">DIAMANTES + </a>
//           <ul className="center celVert">
//             <li><a href="#" className="" >Elección</a></li>
//             <li><a href="#" className="">5Cs</a></li>
//             <li><a href="#" className="" >Certificaciones</a></li>
//             <li><a href="#" className="" >Mantenimientos</a></li>
//           </ul>
//           </li>
//           <li><a href="#" className="">NOVIOS + </a>
//           <ul  className="center celVert">
//             <li><a href="#" className="" >Compromiso</a></li>
//             <li><a href="#"className="" >Novios</a></li>
//           </ul>
//           </li>
//           <li><a href="#" className="raya">JOYAS + </a></li>
//           <li  className="dest"><a href="#">BLOG</a></li>
//           <li  className="dest"><a href="#" >TESTIMONIO</a></li>
//           <li  className="dest"><a href="#" >CONTACTO</a></li>
//         </ul>
//         </div>
//   </Route>
// )};
// export default Nav;