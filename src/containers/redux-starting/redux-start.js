// var redux = require('redux');

import * as redux from 'redux';
console.log("Starting Redux Applicatoion");

//Search Text Reducer and Action generator
//-------------------
let searchTextReducer = (state = 'No search text', action) => {
  switch (action.type) {
    case "CHANGE_SEARCHTEXT" :
      return action.searchText;
    default:
      return state
  }
};

let changeSearchText = (searchText) => {
  return{
    type: "CHANGE_SEARCHTEXT",
    searchText
  }
};

//show Completed Text Reducer and Action generator
//-------------------
let showCompleted = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOWCOMPLETED":
      return action.showCompleted;
    default:
      return state
  }
};

let changeShowCompleted = (showCompleted) => {
  return{
    type: "TOGGLE_SHOWCOMPLETED",
    showCompleted
  }
};

var todoId = 1;
//Todos Reducer and Action generator
//-------------------
let todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: todoId++,
          todo: action.todo
        }
      ];
    case "REMOVE_TODO":
      return state.filter( (todo) => todo.id !== action.id);
    default:
      return state;
  }
};

let addTodo = (todo) => {
  return{
    type: "ADD_TODO",
    todo
  }
};

let removeTodo = (id) => {
  return{
    type: "REMOVE_TODO",
    id
  }
};

let reducer = redux.combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompleted,
  todos: todosReducer
});

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  let state = store.getState();
  // console.log("searchText", state.searchText);
  document.getElementById('root').innerHTML = state.searchText;

  console.log("New state", store.getState());
});

let currentState = store.getState();
console.log("currentState", currentState);

store.dispatch(changeSearchText("Walking"));
store.dispatch(changeSearchText("Eat!"));

store.dispatch(changeShowCompleted(true));

store.dispatch(addTodo("Eat!"));
store.dispatch(addTodo("Go to Walk"));
store.dispatch(addTodo("Go to Dinner"));
//
setTimeout(()=> {
  store.dispatch(removeTodo(1));
},1000);
// console.log("New state after dispatch", store.getState());