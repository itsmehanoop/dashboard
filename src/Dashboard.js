import React, { Component } from 'react';
import Header  from './Header';
import Profile  from './profile/Profile';

import './Dashboard.scss';

class Dashboard extends Component {
  
  render() {
    return (
      <div className="dashboard">
        <Header />
        <div className='content'>
          <Profile />
        </div>
      </div>
    );
  }
}

export default Dashboard;
