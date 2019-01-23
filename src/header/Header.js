import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <span className='title'> Dashboard</span>
                <div className='details'>
                    <span>Hi Hanoop</span>,
                    <span>Menu</span>
                </div>
            </div>
        )
    }
}

export default Header;