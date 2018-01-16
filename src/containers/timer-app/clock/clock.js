/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';


import './clock.css';
class Clock extends Component {
    constructor(props) {
        super(props);

        this._formatSeconds = this._formatSeconds.bind(this);
    }

  componentWillReceiveProps(nextProps){
      if(this.props.totalSeconds !== nextProps.totalSeconds)
        console.log("nestProps",nextProps)
  }

  _formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds/60);

        if(seconds < 10){
            seconds = "0" + seconds
        }

        if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    render() {
        let {totalSeconds} = this.props;
        return (
        <div className="clock-main">
                <div className="clock-text">
                    {this._formatSeconds(totalSeconds)}
                </div>
            </div>
        )
    }
}

Clock.defaultProps = {
    totalSeconds: 0
};

export default Clock;
