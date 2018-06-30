import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <option value={this.props.item.id}>{this.props.item.name}</option>
    );
  }
}

export default Options;
