/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import './controls.css'
class Controls extends Component {
    constructor(props) {
        super(props);

        this._renderStartStopedButtons = this._renderStartStopedButtons.bind(this);
        this._changeStatus = this._changeStatus.bind(this);
    }

    _changeStatus(newStatus){
        this.props.onStatusChanged(newStatus);
    }

    _renderStartStopedButtons (){
        let {countStatus} = this.props;
        console.log(countStatus);
        if(countStatus === 'start') {
            return <button className="button secondary" onClick={()=> {this._changeStatus("paused")}}>Pause</button>
        }
        else{
            return <button className="button primary" onClick={()=> {this._changeStatus("start")}}>Start</button>
        }
    }


    render() {

        return (
            <div className="controls">
                {this._renderStartStopedButtons()}
                <button className="button alert hollow" onClick={()=> {this._changeStatus("stop")}}>Clear</button>
            </div>
        )
    }
}

export default Controls;
