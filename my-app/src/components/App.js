import React from 'react';
//import logo from './logo.svg';
import '../css/App.css';
import  Header  from "./Header";
import Nav from "./Nav";
import Home from "./Home"
import Footer from './Footer';
import Historia from './Historia';
import Motivos from './Motivos';

function App() {
  return (
    <div className="App">
    <div className="vh100">
      <Header/>
      <Nav/>
      {/* <Home/> */}
      {/* <Historia/> */}
      <Motivos/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
