import React, { Component } from 'react';
import Dropdown from './field/Dropdown';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{
        name:'Joy',
        id:1
      }, {
        name:'Vincent',
        id: 2
      }, {
        name:'Johnson',
        id:3
      }]
    }
  }

  render() {
    return (
      <Dropdown data={this.state.users} />
    );
  }
}

export default UserList;
