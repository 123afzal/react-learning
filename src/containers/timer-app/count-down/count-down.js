/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import CountDownForm from '../count-down-form/count-down-form'
import Clock  from '../clock/clock'
import Controls from '../controls/controls'


import './count-down.css';
class CountDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            countDownStatus: "stop"
        };

        this._handleSetCountDown = this._handleSetCountDown.bind(this);
        this._startTimer = this._startTimer.bind(this);
        this._clearTimer = this._clearTimer.bind(this);
        this._renderControlArea = this._renderControlArea.bind(this);
        this._handleStatusChanged = this._handleStatusChanged.bind(this);
    }

    _handleStatusChanged(newStatus){
        this.setState({
            countDownStatus: newStatus
        });
    }

    _startTimer(){
        this.timer = setInterval(
            ()=>{
                let newCount = this.state.count - 1;
              this.setState({
                  count: newCount >=0 ? newCount: 0
              });
                if(newCount === 0){
                    this.setState({
                        countDownStatus: "stop"
                    })
                }
            }
        , 1000)
    }

    _clearTimer(){
        clearInterval(this.timer);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.countDownStatus !== prevState.countDownStatus){
            switch (this.state.countDownStatus) {
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

    _handleSetCountDown(seconds){
        this.setState({
            count: seconds,
            countDownStatus: "start"
        });
    }

    _renderControlArea() {
        if(this.state.countDownStatus === "stop"){
            return <CountDownForm onSetCountDown={this._handleSetCountDown}/>
        }
        else{
            return <Controls countStatus={this.state.countDownStatus} onStatusChanged={this._handleStatusChanged}/>
        }
    }

    render() {
        let {count} = this.state;
        return (
            <div className="count-down">
                <Clock totalSeconds={count}/>
                {this._renderControlArea()}
            </div>
        )
    }
}

export default CountDown;
