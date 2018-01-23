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
import firebase from './containers/todo-app/firebase/index'
import {browserHistory} from 'react-router';


import {Provider} from 'react-redux'
var store = require('../src/containers/todo-app/store/configStore').configure();
var action = require('../src/containers/todo-app/actions/index');

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log("user",user);
    store.dispatch(action.login(user.uid));
    store.dispatch(action.startAddTodo());
    browserHistory.push('/todos')
  } else {
    store.dispatch(action.logout())
    browserHistory.push('/')
  }
});

store.subscribe(()=> {
  console.log("New state", store.getState());
});


// store.dispatch(action.addTodoWithFirebase("Time to play the game"));
// store.dispatch(action.addTodoWithFirebase("Time to play the war"));


ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

// require('../src/playground/firebas');