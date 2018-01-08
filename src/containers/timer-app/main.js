/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import {Link, IndexLink}from 'react-router'

import './main.css';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="main">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu">
                            <li className="menu-text">Timer App</li>
                            <li>
                                <IndexLink to="/" activeClassName="active-link">
                                    Timer
                                </IndexLink>
                            </li>
                            <li>
                                <Link to="/countdown" activeClassName="active-link">
                                    Countdown
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>
                                <h6 style={{marginBottom:"0px"}}>Created by <Link to="#">Syed Afzal</Link></h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="medium-6 large-4 cell" style={{margin:"0 auto"}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
