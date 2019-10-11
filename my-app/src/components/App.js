import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import logo from './logo.svg';
import '../css/App.css';
import  Header  from "./Header";
import Nav from "./Nav";
import Home from "./Home"
import Footer from './Footer';
import Historia from './Historia';
import Motivos from './Motivos';
import Premios from './Premios';
import ConveniosTab from './ConveniosTab';
import Eleccion from "./Eleccion"
import Cs from "./Cs"
import TabBar from './TabBar';


const App = () => {
  return (
    <Router>
    <div className="">
      <div className="App vh100">
        {/* <Header/> */}
        
        <div className=" ">
        {/* <Nav/> */}
        <TabBar/>
      {/* <Route exact path="/" component={Nav} /> */}
      
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Historia/> */}
      {/* <Motivos/> */}
        {/* <Premios/> */}
        {/* <ConveniosTab/> */}
        {/* <Eleccion/> */}
        {/* <Cs/> */}
     
       
        </div>
        <Footer/>
      </div>
     
    </div>
    </Router>
  );
}

export default App;
