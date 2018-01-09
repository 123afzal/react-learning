/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import Todo from '../todo/todo'

class TodoList extends Component {
    constructor(props) {
        super(props);

        this._renderTodos = this._renderTodos.bind(this);
    }

    _renderTodos(){
        let {todos} = this.props;
        return (
            todos.map((todo) => {
                return <Todo {...todo} key={todo.id} onToggle={this.props.onToggle}/>
            })
        )
    }
    render() {

        return (
            <div className="todo-list">
                {this._renderTodos()}
            </div>
        )
    }
}

export default TodoList;
