import React, { Component } from 'react';
import Options from './Options';

class Dropdown extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.props.onChange(e.target.value);
    }
  
    render() {
        return (
            <select className='combobox' onChange={this.onChange}>
                {this.props.data.map((item, i) => <Options key={i} item={item}/>)}
            </select>
        );
    }
}

export default Dropdown;
