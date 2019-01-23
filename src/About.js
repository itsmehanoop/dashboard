import React, { Component } from 'react';
import wrapper from './wrapper/Wrapper';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div className='about'>
        In information technology, 
        a dashboard is a user interface that, somewhat resembling an automobile's dashboard,
         organizes and presents information in a way that is easy to read. However, a computer dashboard is more likely to be interactive than an automobile dashboard (unless it is also computer-based). To some extent, most graphical user interfaces (GUIs) resemble a dashboard. However, some product developers consciously employ this metaphor (and sometimes the term) so that the user instantly recognizes the similarity.
            </div>
        );
    }
}

export default wrapper(About);
