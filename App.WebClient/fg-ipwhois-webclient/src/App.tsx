import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import { NavBar } from './components/navbar';
import { IpWhoRequestForm } from './components/ipWhoRequestForm';
import { IpWhoResponse } from './components/ipWhoResponse';

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
