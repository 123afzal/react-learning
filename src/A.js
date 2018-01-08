/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import B from './B'

class A extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var numbers = [1,3,5,7,9]
        return(
            <div style={{color:"#fff"}}>
                <h1>Rendering Component A</h1>
                <h2>Now calling Component</h2>
                <B numbers={numbers}/>
            </div>
        )
    }
}

export default A