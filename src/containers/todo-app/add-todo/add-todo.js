/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import './add-todo.css'
class AddTodo extends Component {
    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit = (e) => {
        e.preventDefault();

        let todoText = this.refs.todo.value;

        if(todoText.length > 0){
            this.refs.todo.value = "";
            this.props.onAddTodo(todoText);
        }
        else{
            this.refs.todo.focus();
        }
    };
    render() {

        return (
            <div className="add-todo">
                <form onSubmit={this._onSubmit}>
                    <input type="text" ref="todo" placeholder="What do you need to do"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;
