// var redux = require('redux');

import * as redux from 'redux';
console.log("Starting Redux Applicatoion");


let reducer = (state = {searchText: " ", showCompleted:false, todos:[]}, action) => {
  return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log("currentState",currentState);
