/**
 * Created by mustehssun on 1/17/2018.
 */
import uuid from 'node-uuid';
import moment from 'moment';

export let searchTextReducer = (state = 'No search text', action) => {
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
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          todo: action.todo,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo)=> {
        if(todo.id === action.id){
          var newCompleted = !todo.completed

          return{
            ...todo,
            completed: newCompleted,
            completedAt: newCompleted ? moment().unix() : undefined
          }
        }
      });
    default:
      return state;
  }
};

export let mapReducer = (state = {isFecthing: false, url: undefined}, action) => {
  switch (action.type) {
    case "START_LOCATION_FETCH":
      return {
        isFecthing: true,
        url: undefined
      };
    case "STOP_LOCATION_FETCH":
      return {
        isFecthing: false,
        url: action.url
      };
    default:
      return state;
  }
};

