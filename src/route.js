/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React from 'react';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

// import Weather from './containers/weather-app/weather'
// import Main from './containers/weather-app/main'

import Main from './containers/timer-app/main'
import Timer from './containers/timer-app/timer/timer'
import CountDown from './containers/timer-app/count-down/count-down'
import TodoApp from './containers/todo-app/todo-app'
import Login from './containers/todo-app/login/login'

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
          <Route path="todos" component={TodoApp}/>
          <IndexRoute component={Login}/>
        </Route>
      </Router>
    )
};

export default Routes;

