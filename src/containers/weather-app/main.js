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
                            <li className="menu-text">Weather App</li>
                            <li>
                                <IndexLink to="/">
                                    Get weather
                                </IndexLink>
                            </li>
                            <li>
                                <Link to="/about">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather"/>
                            </li>
                            <li><button type="button" className="button">Search</button></li>
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
