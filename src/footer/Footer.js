import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

export default (props) => {
    return (
        <div className = 'footer'>
            <Link to='/'> Home </Link> | 
            <Link to='/about'> About </Link> |
            <Link to='/about'> Wiki </Link> 
        </div>
    );
}
