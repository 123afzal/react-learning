/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

class B extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var numbers = this.props.numbers;
        var listItems = numbers.map((number) => <li key={number.toString()}> { number*2 } </li>)
        return(
            <ul>{listItems}</ul>
        )
    }
}

export default B