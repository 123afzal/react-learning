/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

class WeatherMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>It is {this.props.temprature}'C in {this.props.location}</h3>
            </div>
        )
    }
}

export default WeatherMessage;
