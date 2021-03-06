import uuid from 'node-uuid';
import moment from 'moment';

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case "CHANGE_SEARCHTEXT" :
      return action.searchText;
    default:
      return state
  }
};

export let showCompleted = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOWCOMPLETED":
      return !state;
    default:
      return state
  }
};

export let todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return action.todos
    case "ADD_TODO":
      return [
        ...state,
        action.todo
      ];
    case "UPDATETOGGLE_TODO":
      return state.map((todo)=> {
        if(todo.id === action.id){
          return {
            ...todo,
            ...action.updates
          }
        } else{
          return todo;
        }
      });
    case "LOGOUT":
      return [];
    case "DELETE_TODO":
      console.log("action id in reducer", action.id);
      return state.filter( (todo)=> {
        if(todo.id !== action.id) {
          console.log("Todo not matched", todo);
          return todo
        }
      });
    case "EDIT_TODO":
      return state.map((todo)=> {
        if(todo.id === action.id){
          return{
            ...todo,
            todo: action.newTodo
          }
        } else{
          return todo
        }
      });
    default:
      return state;
  }
};

//User Authentication Reducer
export let authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.id
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

