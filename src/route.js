/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React from 'react';
import firebase from './containers/todo-app/firebase/index'

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

// import Weather from './containers/weather-app/weather'
// import Main from './containers/weather-app/main'

import Main from './containers/timer-app/main'
import Timer from './containers/timer-app/timer/timer'
import CountDown from './containers/timer-app/count-down/count-down'
import TodoApp from './containers/todo-app/todo-app'
import Login from './containers/todo-app/login/login'



var loginRequired = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    console.log("abc");
    replace('/')
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos')
  }
  next();
};

const Routes = () => {
    return (

        /*routes for weather application*/
        // <Router history={browserHistory}>
        //     <Route path="/" component={Main}>
        //         <IndexRoute component={Weather}/>
        //     </Route>
        // </Router>

        //routes for timer application
       // <Router history={browserHistory}>
         //   <Route path="/" component={Main}>
           //     <IndexRoute component={Timer}/>
             //   <Route path='/countdown' component={CountDown}/>
            //</Route>
   //     </Router>

      /* routes for todo app */
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="todos" component={TodoApp} onEnter={loginRequired}/>
          <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
      </Router>
    )
};

export default Routes;

