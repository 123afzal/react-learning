export let changeSearchText = (searchText) => {
  return{
    type: "CHANGE_SEARCHTEXT",
    searchText
  }
};

export let changeShowCompleted = () => {
  return{
    type: "TOGGLE_SHOWCOMPLETED",
  }
};

export let addTodo = (todo) => {
  return{
    type: "ADD_TODO",
    todo
  }
};

export let toggleTodo = (id) => {
  return{
    type: "TOGGLE_TODO",
    id
  }
};
