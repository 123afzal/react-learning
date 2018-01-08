/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import './count-down-form.css';
class CountDownForm extends Component {
    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e){
        e.preventDefault();

        let strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = "";
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        }
    }

    render() {

        return (
            <div className="count-down-form">
                <form ref="form" onSubmit={this._onSubmit}>
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
}

export default CountDownForm;
