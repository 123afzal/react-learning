/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import './timer-controls.css'
class TimerControls extends Component {
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
            return <button className="button secondary" onClick={()=> {this._changeStatus("stop")}}>Stop</button>
        }
        else if(countStatus !== 'start'){
            return <button className="button primary" onClick={()=> {this._changeStatus("start")}}>Start</button>
        }
    }


    render() {

        return (
            <div className="controls-t">
                {this._renderStartStopedButtons()}
                <button className="button alert hollow" onClick={()=> {this._changeStatus("clear")}}>Clear</button>
            </div>
        )
    }
}

export default TimerControls;
