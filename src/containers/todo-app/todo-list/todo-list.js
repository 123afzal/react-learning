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
        this._filteredTodos = this._filteredTodos.bind(this);
    }

  _filteredTodos(showCompleted, handelText, todos) {
    let filteredTodos = todos;

    //filtered by showCompleted
    filteredTodos = todos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //filtered by handleText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.todo.toLowerCase();
      console.log(text);
      return handelText.length === 0 || text.indexOf(handelText) > -1;
    });

    //filter by non-completed first
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else{
        return 0;
      }
    });

    return filteredTodos;
  }

    _renderTodos(){
        let {todos, searchText, showCompleted} = this.props;
        return (
            this._filteredTodos(showCompleted, searchText, todos).map((todo) => {
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
  (state)=> {
      return state;
  }
)(TodoList);
