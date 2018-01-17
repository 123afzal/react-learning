import axios from 'axios';

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

export let startLocationFetch = ()=> {
  return{
    type: "START_LOCATION_FETCH"
  }
};

export let stopLocationFetch = (url)=> {
  return {
    type: "STOP_LOCATION_FETCH",
    url
  }
};

export var fetchingData = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get("http://ipinfo.io").then(function (res) {
      let loc = res.data.loc;
      let baseurl = "http://maps.google.com?q=";
      dispatch(stopLocationFetch(baseurl + loc));
    })
  }
};
