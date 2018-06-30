import React, { Component } from 'react';
import Options from './Options';

class Dropdown extends Component {
  render() {
    return (
      <select>
        {this.props.data.map((item, i) => <Options key={i} item={item}/>)}
      </select>
    );
  }
}

export default Dropdown;
