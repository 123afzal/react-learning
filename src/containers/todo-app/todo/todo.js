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
        this.state = {
          isEdit: false
        };
        this._renderDates = this._renderDates.bind(this);
        this._renderEditTodo = this._renderEditTodo.bind(this);
        this._renderControls = this._renderControls.bind(this);
    }

  _renderControls = () => {
    let {id, todo, completed, createdAt, completedAt, dispatch} = this.props;
    if(!this.state.isEdit){
      return(
        <div className="controls-todo">
          <button className="button edit-btn" style={{marginRight:"10px"}}  onClick={()=>{
            this.setState({isEdit: !this.state.isEdit})
          }}>
            Edit
          </button>
          <button className="button del-btn" onClick={(e)=>{
            e.preventDefault();
            dispatch(actions.startDeleteTodoWithFireBase(id))
          }}>
            Delete
          </button>
        </div>
      )
    } else{
      null
    }
  };

    _renderEditTodo = () => {
      let {id, todo, completed, createdAt, completedAt, dispatch} = this.props;
      if(!this.state.isEdit) {
        return(
          <div>
            <p>{todo}</p>
            <p className="sub-text">{this._renderDates()}</p>
          </div>
        )

      }
      else{
        return(
          <div style={{width:"100%"}}>
          <input className="editable" type="text" ref="todo" defaultValue={todo}/>
          <button className="button save-btn" onClick={()=>{
            let newTodo = this.refs.todo.value;
            dispatch(actions.startEditTodoWithFireBase(id, newTodo));
            this.setState({isEdit: !this.state.isEdit})
          }}>
            Save
          </button>
        </div>)
      }
    };

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
            <div className={todoClassName}>
              <div className="info-todo">
                <div  onClick={
                  ()=>{dispatch(actions.toggleTodoWithFirebase(id, !completed))}
                }>
                  <input type="checkbox" checked={completed}/>
                </div>
                  {this._renderEditTodo()}
              </div>

              {
                this._renderControls()
              }
            </div>
        )
    }
}

export default connect()(Todo);
