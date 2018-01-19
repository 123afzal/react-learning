import firebase, {firebaseRef}  from '../firebase'
import moment from 'moment';


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

export let addTodoWithFirebase = (text) => {
  console.log('my todo', text)
  return (dispatch, getState)=>{
    let todo = {
      todo: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let newtodo = firebaseRef.child('todos').push(todo)

    return newtodo.then(()=>{
      dispatch(addTodo({
        ...todo,
        id: newtodo.key
      }));
    });
  }
};

export let addTodo = (todo) => {
  return{
    type: "ADD_TODO",
    todo
  }
};

export let toggleTodoWithFirebase = (id, completed) =>{
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates  = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(()=>{
      dispatch(updateToggleTodo(updates, id));
    })
  }
};

export let updateToggleTodo = (updates, id) => {
  return{
    type: "UPDATETOGGLE_TODO",
    updates,
    id
  }
};
