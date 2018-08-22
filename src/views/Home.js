/*jshint esversion: 6 */ 

import React, { Component } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
var thePack = require('../assets/the_pack.jpg');

const homeStyle = {
  backgroundColor: 'grey'
};



export default class Home extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id='container' style={homeStyle}>
          <Helmet>
            <title>Rory Trunkhill</title>
          </Helmet>
          <Header/>
          <div id='logo'>
            <a href="/"><img src={thePack} alt="my dogs" /></a>
        </div>
        </div>
      )
   }
}