/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import Posts from './views/Posts';
import Users from './views/Users';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path='/' component={Home}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
