import React, { Component } from 'react';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: 'Hanoop',
      firstName: 'TK',
      age: 30,
      degree: 'B Tech',
      company: 'HCL technologies',
      address: 'Thachinchery House',
      city: 'Thrissur',
      state: 'Kerala',
      pin: 680684
    };

  }
  render() {
    return (
      <div className="profile">
        <div><label>Name</label>: {this.state.lastName}, {this.state.firstName}</div>
        <div className='alt'><label>Education</label>: {this.state.degree}</div>
        <div><label>Office</label>: {this.state.company}</div>
        <div className='alt'><label>Address</label>: {this.state.address},
          {this.state.city},
          {this.state.state},
          {this.state.pin}</div>
      </div>
    );
  }
}

export default Profile;
