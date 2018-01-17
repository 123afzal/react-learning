// var action = require('./actions/index');
// var store = require('../redux-starting/store/configStore').configure();
// console.log("Starting Redux Applicatoion");
//
// store.subscribe(() => {
//   let state = store.getState();
//   // console.log("searchText", state.searchText);
//   // document.getElementById('root').innerHTML = state.searchText;
//
//   if(state.map.isFecthing){
//     document.getElementById('root').innerHTML = "Loading"
//   } else if(state.map.url) {
//     document.getElementById('root').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
//   }
//
//   console.log("New state", store.getState());
// });
//
// let currentState = store.getState();
// console.log("currentState", currentState);
//
// store.dispatch(action.fetchingData());
//
// store.dispatch(action.changeSearchText("Walking"));
// store.dispatch(action.changeSearchText("Eat!"));
//
// store.dispatch(action.changeShowCompleted(true));
//
// store.dispatch(action.addTodo("Eat!"));
// store.dispatch(action.addTodo("Go to Walk"));
// store.dispatch(action.addTodo("Go to Dinner"));
// // console.log("New state after dispatch", store.getState());