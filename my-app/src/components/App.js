import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/App.css';

import Footer from './Footer';
import TabBar from './TabBar';

const App = () => {
  return (
    <Router>
    <div className="">
      <div className="App">
        <div className="">
          <TabBar/>
        </div>
      <Footer/>

      </div>

    </div>
    </Router>
  );
}

export default App
