import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { NavBar } from './components/navbar';
import { IpWhoRequestForm } from './components/ipWhoRequestForm';

class App extends React.Component {
  
  //entry point
  render() {
    return (
      <div>
        <NavBar />

        <IpWhoRequestForm />
      </div>
    );
  }
}

export default App;
