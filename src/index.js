import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import About from './About';

import { Link, Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Dropdown from './field/Dropdown';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
//registerServiceWorker();