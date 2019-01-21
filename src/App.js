import React from 'react';
import RouterSwitch from './RouterSwitch';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div>
        <br />
        <Link to="/"> Home </Link> | 
        <Link to="/about"> About </Link>
        <RouterSwitch/>
      </div>
      </Provider>
    );
  }
}

export default App;
    
