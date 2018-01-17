import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './containers/home/home';
import Weather from './containers/weather-app/weather';
import A from './A'
import TodoApp from './containers/todo-app/todo-app';
import ReduxStart from './containers/redux-starting/redux-start'
import registerServiceWorker from './registerServiceWorker';
import Routes from './route'

// ReactDOM.render(
//   <TodoApp/>,document.getElementById('root'));
// registerServiceWorker();

var redux = require('./containers/redux-starting/redux-start');