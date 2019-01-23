import React, { Component } from 'react';
import Profile  from './profile/Profile';
import UserList from './UserList';

import './Dashboard.scss';

class Dashboard extends Component {
  
    render() {
        return (
            <div className="dashboard">
                <UserList />
                <Profile />
            </div>
        );
    }
}

export default Dashboard;
