/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import moment from 'moment';
import './todo.css'
import {connect} from 'react-redux'

var actions = require('../actions/index')

class Todo extends Component {
    constructor(props) {
        super(props);

        this._renderDates = this._renderDates.bind(this);
    }

    _renderDates = () => {
        let {id, todo, completed, createdAt, completedAt} = this.props;

        let message = "Created at";
        let timeStrap = createdAt;

        if(completed){
            message = "Completed at";
            timeStrap = completedAt
        }
        return message + " " + moment.unix(timeStrap).format('MMM Do YYYY @ h:mm a');
    };

    render() {
        let {id, todo, completed, createdAt, completedAt, dispatch} = this.props;
        let todoClassName = completed ? "todo todo-completed" : "todo";
        return (
            <div className={todoClassName} onClick={
                ()=>{dispatch(actions.toggleTodo(id))}
            }>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{todo}</p>
                    <p className="sub-text">{this._renderDates()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo);
