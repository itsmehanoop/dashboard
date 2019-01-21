import React from 'react';
import RouterSwitch from './RouterSwitch';
import { Link } from 'react-router-dom';
import Login from './login/Login';

class App extends React.Component {
    state = {};

    constructor(props) {
        super(props);
        this.onAfterlogin = this.onAfterlogin.bind(this);
    }

    onAfterlogin () {
        this.updateState('login', true);
    }
    updateState(property, value) {
        this.setState({
            [property] : value
        })
    }

    render(){
        return (
            <div>
                <br />
                {
                    this.state.login?
                    <div>
                        <Link to="/"> Home </Link> | 
                        <Link to="/about"> About </Link>
                        <RouterSwitch/>
                    </div>
                    : <Login onAfterLogin={this.onAfterlogin}/>
                }
                
                
            </div>
        );
    }
}

export default App;
    
