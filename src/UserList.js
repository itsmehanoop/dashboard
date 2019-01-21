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
        };

        this.onChange = this.onChange.bind(this);

    }

    onChange(value) {
        console.log('selected value', value);    
    }

    render() {
        return (
            <Dropdown onChange={this.onChange} data={this.state.users} />
        );
    }
}

export default UserList;
