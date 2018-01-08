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

const Routes = () => {
    return (

        /*routes for weather application*/
        // <Router history={browserHistory}>
        //     <Route path="/" component={Main}>
        //         <IndexRoute component={Weather}/>
        //     </Route>
        // </Router>

        //routes for timer application
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Timer}/>
                <Route path='/countdown' component={CountDown}/>
            </Route>
        </Router>
    )
};

export default Routes;

