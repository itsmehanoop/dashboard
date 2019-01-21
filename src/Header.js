import React, { Component } from 'react';
import UserList from './UserList';
import './Header.scss';
class Header extends Component {
  
    render() {
        let name = 'Hanoop';
        return (
            <div className="header">
                <span> {name}'s Dashboard </span>
        User : <UserList />
            </div>
        );
    }
}

export default Header;
