/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

class WeatherForm extends Component {
    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this)
    }

    _onSubmit(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value='';
            this.props.onSearch(location)
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this._onSubmit}>
                    <input type="text" ref="location"/>
                    <button className="button hollow expanded">Get Weather</button>
                </form>
            </div>
        )
    }
}

export default WeatherForm;
