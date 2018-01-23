import * as redux from 'redux';
import {searchTextReducer, showCompleted, todosReducer, authReducer} from '../reducers/index';
var thunk = require('redux-thunk').default;

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompleted,
    todos: todosReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};