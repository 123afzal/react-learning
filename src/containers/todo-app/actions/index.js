import firebase, {firebaseRef, gitHubProvider}  from '../firebase'
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
  return (dispatch, getState)=>{
    let todo = {
      todo: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let uid = getState().auth.uid;
    let newtodo = firebaseRef.child(`users/${uid}/todos`).push(todo);

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
    let uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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
    type: 'UPDATETOGGLE_TODO',
    updates,
    id
  }
};

export let startAddTodo = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);
    todosRef.once('value').then((snapshot)=>{
      var todos = snapshot.val() || {};
      var newTodos = [];

      Object.keys(todos).map((todoId)=>{
        newTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      dispatch(addTodos(newTodos))
    })
  }
};

export let addTodos = (todos) =>{
  return {
    type: "ADD_TODOS",
    todos
  }
};

export let startDeleteTodoWithFireBase = (id) => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    let todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.child(id).remove()
      .then(()=>{
        console.log("success");
        dispatch(deleteTodo(id))
      },(e)=>{
        console.log("error occured in deleting", e)
      });
  }
};

export let deleteTodo = (id) => {
  console.log("actions", id);
  return {
    type: "DELETE_TODO",
    id
  }
};

export let startEditTodoWithFireBase = (id, newTodo) => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    let todosRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    let updatedTodo = {
      todo: newTodo
    };
    return todosRef.update(updatedTodo).then(()=>{
      console.log("successfully updated");
      dispatch(editTodo(id, newTodo));
    },(err)=>{
      console.log("Error while deleting", err);
    })
  }
};

export let editTodo = (id, newTodo) => {
  console.log("I am in action", id, newTodo);
  return{
    type:"EDIT_TODO",
    id,
    newTodo
  }
};

//Login with fire-base then used this user uid to login
export let loginWithFirebase = ()=>{
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(gitHubProvider).then((res)=>{
      console.log("Loginn success", res)
    },
      (e)=>{
      console.log("can't logged in", e)
      })
  }
};

export let logOutwithFirebase = ()=>{
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(()=>{
      console.log("Successfully Signed Out");
    })
  }
};

//User Authentication Actions
export let login = (id) => {
  return{
    type: "LOGIN",
    id
  }
};

export let logout = () =>{
  return{
    type:"LOGOUT"
  }
};