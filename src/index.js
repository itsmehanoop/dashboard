import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './Store';
import './field/Fields.scss';



import { BrowserRouter } from 'react-router-dom';
import Dropdown from './field/Dropdown';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
//registerServiceWorker();