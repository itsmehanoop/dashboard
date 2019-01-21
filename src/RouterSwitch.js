import React from 'react';
import './index.css';
import Dashboard from './Dashboard';
import About from './About';
import { Route, Switch } from 'react-router-dom';

class RouterSwitch extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/about' component={About}/>
            </Switch>
        );
    }
}

export default RouterSwitch;
    
