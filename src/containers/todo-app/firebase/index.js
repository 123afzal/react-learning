import firebase from 'firebase'

try{
  var config = {
    apiKey: "AIzaSyCH_td4QXvSDXqJ5mdejBuUOzi1kLAnHoU",
    authDomain: "my-todo-app-53dbe.firebaseapp.com",
    databaseURL: "https://my-todo-app-53dbe.firebaseio.com",
    projectId: "my-todo-app-53dbe",
    storageBucket: "my-todo-app-53dbe.appspot.com",
    messagingSenderId: "124366382881"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export var gitHubProvider = new firebase.auth.GithubAuthProvider();

export default  firebase;