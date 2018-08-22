/*jshint esversion: 6 */ 

import React from 'react';
var logo = require('../assets/Eastridge.PNG');
const headerStyle = {
  backgroundColor: 'grey'
};

const Header = () => (
      <div id='container' style={headerStyle}>
        <div id='logo'>
          <a href="https://www.eastridge.com/" target='_blank' rel="noopener noreferrer" ><img src={logo} alt="return to home screen" /></a>
        </div>
        <h2><a href='https://github.com/rtrunkhill/' target='_blank' rel="noopener noreferrer" >Rory Trunkhill's</a> React Assessment</h2>
        <button className="mdc-button--raised"><a href="/">Home</a></button>
        <button className="mdc-button--raised"><a href="/users">Users</a></button>
        <button className="mdc-button--raised"><a href="/posts">Posts</a></button>
      </div>
);

export default Header;


