// var redux = require('redux');

import * as redux from 'redux';
console.log("Starting Redux Applicatoion");

let todoId = 1;

let searchTextReducer = (state = 'No search text', action) => {
  switch (action.type) {
    case "CHANGE_SEARCHTEXT" :
      return action.searchText;
    default:
      return state
  }
};

let showCompleted = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOWCOMPLETED":
      return action.showCompleted;
    default:
      return state
  }
};

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

store.dispatch({
  type: "CHANGE_SEARCHTEXT",
  searchText: "jo bhi main bouloun bhaii"
});

store.dispatch({
  type: "CHANGE_SEARCHTEXT",
  searchText: "theek ho gaya"
});

store.dispatch({
  type: "TOGGLE_SHOWCOMPLETED",
  showCompleted: true
});

store.dispatch({
  type: "ADD_TODO",
  todo: "Eat!"
});

store.dispatch({
  type: "ADD_TODO",
  todo: "Go to Walk"
});

store.dispatch({
  type: "ADD_TODO",
  todo: "Go to Dinner"
});
//
setTimeout(()=> {
  store.dispatch({
    type: "REMOVE_TODO",
    id:1
  });
},1000);
// console.log("New state after dispatch", store.getState());