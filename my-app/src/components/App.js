import React from 'react';
//import logo from './logo.svg';
import '../css/App.css';
import  Header  from "./Header";
import Nav from "./Nav";
import Home from "./Home"
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
