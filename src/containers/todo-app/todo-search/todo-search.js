/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import './todo-search.css'
import {connect} from 'react-redux'

var actions = require('../actions/index')
class TodoSearch extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var {showCompleted, searchText, dispatch} = this.props;
        return (
            <div className="todo-search">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={()=>{
                        let text = this.refs.searchText.value;
                        dispatch(actions.changeSearchText(text))
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
                            dispatch(actions.changeShowCompleted())
                        }}/>
                        Show Complete Todos
                    </label>
                </div>
            </div>
        )
    }
}

export default connect(
  (state)=>{
      return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
      }
  }
)(TodoSearch);
