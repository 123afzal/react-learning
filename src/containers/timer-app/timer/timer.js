/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import Clock  from '../clock/clock';
import Controls from '../controls/controls'

import './timer.css';
class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            timerStatus: "stop"
        };

        this._handleStatusChanged = this._handleStatusChanged.bind(this);
        this._startTimer = this._startTimer.bind(this);
        this._clearTimer = this._clearTimer.bind(this);
    }

    _handleStatusChanged(newStatus){
        console.log("newStatus", newStatus);
        this.setState({
            timerStatus: newStatus
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus){
            switch (this.state.timerStatus) {
                case "start":
                    this._startTimer();
                    break;
                case "stop":
                    this.setState({ count : 0});
                case "paused":
                    this._clearTimer();
                    this.timer = undefined;
                    break;
            }
        }
    }

    _startTimer(){
        this.timer = setInterval(
            () => {
                let newCount = this.state.count + 1;
                this.setState({
                    count: newCount
                })
            }
        , 1000)
    }

    _clearTimer(){
        clearInterval(this.timer);
    }

    render() {
        let { count, timerStatus } = this.state;
        return (
            <div className="timer">
                <Clock totalSeconds={count}/>
                <Controls countStatus={timerStatus} onStatusChanged={this._handleStatusChanged}/>
            </div>
        )
    }
}

export default Timer;
