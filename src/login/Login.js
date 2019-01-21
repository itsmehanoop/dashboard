import React, { Component } from 'react';
import './Login.scss';
class Login extends Component {
  
    render() {
        return (
            <div className="login row">
                <form className="row col s12">
                    <div className="input-field col s12">
                        <input id="login" type="text" className="validate" name="Login" />
                        <label className="active" htmlFor="login">First Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" name="password" />
                        <label className="active" htmlFor="password">Password</label>
                    </div>
                    <a className="waves-effect waves-light btn" onClick={this.props.onAfterLogin}>Login</a>
                </form>
        
            </div>
        );
    }
}

export default Login;
