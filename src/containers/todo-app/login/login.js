/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import * as action from '../actions/index'
import * as Redux from 'react-redux'

import './login.css'
class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {dispatch} = this.props;
    return (
      <div className="login">
        <div className="grid-x">
          <div className="medium-6 large-4 cell" style={{margin:"0 auto"}}>
            <div style={{textAlign:"center"}}>
              <h1>TODO App</h1>
            </div>
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with github below
              </p>
              <button className="button" onClick={(e)=>{
                e.preventDefault();
                dispatch(action.loginWithFirebase())
              }}>Login with github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(Login)
