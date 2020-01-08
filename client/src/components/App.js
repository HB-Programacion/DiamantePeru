import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/App.css';

import Footer from './Footer';
import TabBar from './TabBar';

const App = () => {
  return (
    <Router>
      
    <div className="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
      <div className="App vh100"  >
        <TabBar/>
        <Footer/>

      </div>

    </div>
    </Router>
  );
}

export default App
