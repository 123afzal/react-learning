import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './containers/home/home';
import Weather from './containers/weather-app/weather';
import A from './A'
import registerServiceWorker from './registerServiceWorker';
import  Routes from './route'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
