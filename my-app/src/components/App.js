import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import logo from './logo.svg';
import '../css/App.css';

import Footer from './Footer';
import TabBar from './TabBar';

const App = () => {
  return (
    <Router>
    <div className="">
      <div className="App vh100">
        <div className="vh100">
          <TabBar/>
        </div>
      <Footer/>

      </div>

    </div>
    </Router>
  );
}

export default App
