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

firebaseRef.update({
  '/app/appName': "Todo App",
  'user/age': 21
}).then(()=>{
  console.log("Success in first call of update");
},(e)=>{
  console.log("error occurs in first call of update")
  });

firebaseRef.child('app').update({
  appName: "Puran wala Todo"
}).then(()=>{
  console.log("Success in second call of update")
}, ()=>{
  console.log("error occurs in second call of update")
});

firebaseRef.child('user').update({
  age: 23
}).then(()=>{
  console.log("Success in third call of update");
}, ()=>{
  console.log("error occurs in third call of update");
});

// firebaseRef.child('user').set({
//   name: "Muneeb"
// });
