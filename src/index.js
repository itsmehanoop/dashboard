import React from 'react';
import { render } from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
//registerServiceWorker();