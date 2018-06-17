import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
  
  render() {
    let name = 'Hanoop';
    return (
      <div className="header">
        <span> {name}'s Dashboard </span>
        
      </div>
    );
  }
}

export default Header;
