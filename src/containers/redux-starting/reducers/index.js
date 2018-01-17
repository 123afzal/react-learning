/**
 * Created by mustehssun on 1/17/2018.
 */

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
      return action.showCompleted;
    default:
      return state
  }
};

var todoId = 1;
export let todosReducer = (state = [], action) => {
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
      return state.filter((todo) => todo.id !== action.id);
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

