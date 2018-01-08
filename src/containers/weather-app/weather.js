/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import WeatherForm from './weather-form';
import WeatherMessage from './weather-message'
import axios from 'axios';


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state={
            location: "Karachi",
            temprature: 23
        };
        this._handleSearch = this._handleSearch.bind(this);

    }

    _handleSearch(location) {
        console.log("my location", location);
        let that = this;
        let url = "http://samples.openweathermap.org/data/2.5/weather?&appid=1335797e295a465cd4751e7a3d4d14a8";
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${url}&q=${encodedLocation}`;
        axios.get(requestURL)
            .then(function (response) {
                if(response.status === 200){
                    console.log(response);
                    that.setState({
                        location: location,
                        temprature: response.data.main.temp
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var {location, temprature} = this.state;
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this._handleSearch}/>
                <WeatherMessage location={location} temprature={temprature}/>
            </div>
        )
    }
}

export default Weather;
