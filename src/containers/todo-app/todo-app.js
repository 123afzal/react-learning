/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import TodoList from './todo-list/todo-list';
import AddTodo from './add-todo/add-todo'
import TodoSearch from './todo-search/todo-search'
import uuid from 'node-uuid';
import moment from 'moment';
import * as action from '../todo-app/actions/index'
import * as Redux from 'react-redux'


import './todo-app.css';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handelText: "",
            showCompleted: false,
            todos: [
                {
                    id: uuid(),
                    todo: "watch film",
                    completed: true,
                    createdAt: moment().unix(),
                    completedAt: undefined
                },
                {
                    id: uuid(),
                    todo: "go for walk",
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                },
                {
                    id: uuid(),
                    todo: "go to gym",
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        };
        this._handleAddTodo = this._handleAddTodo.bind(this);
        this._handleOnSearch = this._handleOnSearch.bind(this);
        this._handleToggle = this._handleToggle.bind(this);
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

    _handleToggle(id){
        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }
            return todo
        });
        this.setState({
            todos: updatedTodos
        })
    }

    _handleAddTodo(todoText){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    todo: todoText,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    }

    _handleOnSearch(handelText, showCompleted){
        this.setState({
            handelText: handelText,
            showCompleted: showCompleted
        })
    }

    render() {
        let {dispatch} = this.props;
        let {todos, handelText, showCompleted} = this.state;
        let filterTodos = this._filteredTodos(showCompleted, handelText, todos);
        console.log("todos", todos);

        return (
            <div className="todo-app">
                <div className="page-actions">
                    <a href="#" onClick={()=>{
                        dispatch(action.logOutwithFirebase())
                    }}>
                        Logout
                    </a>
                </div>

                <div className="grid-x">
                    <div className="medium-6 large-4 cell" style={{margin:"0 auto"}}>
                        <div style={{textAlign:"center"}}>
                            <h1>TODO App</h1>
                        </div>
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Redux.connect()(TodoApp);
