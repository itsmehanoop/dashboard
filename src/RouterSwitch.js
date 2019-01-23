import React from 'react';
import Dashboard from './Dashboard';
import About from './About';
import {Route, Switch} from 'react-router-dom';

class RouterSwitch extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        );
    }
}

export default RouterSwitch;
