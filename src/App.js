import React from 'react';
import RouterSwitch from './RouterSwitch';
import Login from './login/Login';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.scss';


class App extends React.Component {
    state = {
        login: true
    };

    constructor(props) {
        super(props);
        this.onAfterlogin = this
            .onAfterlogin
            .bind(this);
    }

    onAfterlogin() {
        this.updateState('login', true);
    }
    updateState(property, value) {
        this.setState({[property]: value})
    }

    render() {
        return (
            <div className="app">
                {
                    this.state.login
                    ? <React.Fragment>
                            <Header/>
                            <RouterSwitch/>
                            <Footer/>
                        </React.Fragment>
                    : <Login onAfterLogin={this.onAfterlogin}/>
                }
            </div>
        );
    }
}

export default App;
