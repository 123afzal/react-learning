import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCH_td4QXvSDXqJ5mdejBuUOzi1kLAnHoU",
  authDomain: "my-todo-app-53dbe.firebaseapp.com",
  databaseURL: "https://my-todo-app-53dbe.firebaseio.com",
  projectId: "my-todo-app-53dbe",
  storageBucket: "my-todo-app-53dbe.appspot.com",
  messagingSenderId: "124366382881"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    appName: "My Todo Application",
    version: 1.0
  },
  isRunning: true,
  user:{
    name: "afzal",
    age: 22
  }
}).then(()=>{
  console.log("Success")
}, (e)=>{
  console.log("failure")
});

// dealing with arrays
// var todosRef = firebaseRef.child('todos');
//
// todosRef.on("child_added", (snapshot)=>{
//   console.log("child_added in todos", snapshot.key, snapshot.val())
// });
//
// todosRef.on("child_removed", (snapshot)=>{
//   console.log("child_removed in todos", snapshot.key, snapshot.val())
// });
//
// todosRef.on("child_changed", (snapshot)=>{
//   console.log("child_changed in todos", snapshot.key, snapshot.val())
// });
//
// var newTodo = todosRef.push({
//   text: "go to walk"
// });
//
// newTodo = todosRef.push({
//   text: "go to dinner"
// }).then(()=>{
//   console.log('go to dinner')
// })



// console.log("New todo Id", newTodo);
