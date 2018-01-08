/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import axios from 'axios';
import fetch from 'isomorphic-fetch'

import './home.css';
let self;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            firstName: "",
            salary: ""
        };
        this._getUser = this._getUser.bind(this);
        this._onLogin = this._onLogin.bind(this);
        this._readEmployess = this._readEmployess.bind(this);
        self = this;
    }

    _readEmployess() {
        let url = "http://localhost:4200/employee";
        axios.get(url,{
            headers : {"token" : localStorage.getItem("token")}
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    _onLogin() {
        console.log("first name", this.state.firstName);
        console.log("salary", typeof (this.state.salary), this.state.salary);
        var sal2 = Number(this.state.salary);

        let data = {
            firstName: this.state.firstName,
            salary: sal2
        };
        console.log("method working");
        let url = "http://localhost:4200/employee/login";
        axios.post(url, data)
            .then(function (response) {
                console.log(response);
                if(response.status==200){
                    self.setState({
                        users : response.data
                    })
                }
                window.localStorage.setItem("token",self.state.users.token)
                console.log("users",self.state.users)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    _getUser() {

        let data = {
            firstName: "Husnain",
            salary: 30000
        };
        console.log("method working");
        let url = "http://localhost:4200/employee/login";
        fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then(function (response) {
                return response.json()
            },
            function (err) {
                console.log("errror", err)
            }
        ).then(function (json) {
            console.log("JSON",json.data)
        });
    }

    render() {
        return (
            <div className="home">
                <div className="center-class">
                    <div className="login">
                        <form>

                            <input type="text" placeholder="User Name" value={this.state.firstName}
                                   onChange={(e) => {
                                       this.setState({firstName: e.target.value})
                                   }}/>

                            <input type="text" placeholder="salary" value={this.state.salary}
                                   onChange={(e) => {
                                       this.setState({salary: e.target.value})
                                   }}/>

                            <button type="button" onClick={() => {
                                this._onLogin()
                            }}>Login
                            </button>

                        </form>
                    </div>
                    hi there what's going on
                    <button onClick={() => {this._readEmployess()} }>Click Here</button>
                </div>
            </div>
        )
    }
}

export default Home;
