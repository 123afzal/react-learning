/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import Todo from '../todo/todo'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);

        this._renderTodos = this._renderTodos.bind(this);
    }

    _renderTodos(){
        let {todos} = this.props;
        return (
            todos.map((todo) => {
                return <Todo {...todo} key={todo.id}/>
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

export default connect(
  (state) => {
      return {
          todos: state.todos
      }
  }
)(TodoList);
