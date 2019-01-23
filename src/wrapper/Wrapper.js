import React, {Component} from 'react';
import './Wrapper.scss';

const wrapper = (WrappedComponent) => {
    return (props) => (
        <div className="wrapper">
            <WrappedComponent {...props}/>
        </div>
    );
};

export default wrapper;
