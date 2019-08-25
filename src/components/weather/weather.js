import React, { Component } from 'react';
import WeatherForm from './weatherform';
import WeatherDisplay from './weatherdisplay';

const API_KEY = "546116de7f4dbe46a3605901db981365";


export default class WeatherCheck extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        visibility: undefined,
        windspeed: undefined,
        winddirection: undefined,
        description: undefined,
        error: undefined

    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

        const data = await api_call.json();
       if (city && country) {
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            visibility: data.visibility,
            windspeed: data.wind.speed,
            winddirection: data.wind.deg,
            description: data.weather[0].description

        })
       } else {
           this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            visibility: undefined,
            windspeed: undefined,
            winddirection: undefined,
            description: undefined,
            error: 'Please enter in details'

           })

       }
    }

    render() {
        return (


            <div className="card" style={{textAlign: 'right'}}>
        <h5 className="card-header mb-2">Check Weather: {this.state.city} - {this.state.country} </h5>
        <WeatherForm getWeather={this.getWeather}  />
                <WeatherDisplay 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                visibility={this.state.visibility}
                windspeed={this.state.windspeed}
                winddirection={this.state.winddirection}
                description={this.state.description}
                error={this.state.error}
                />
        
      </div>
    




        )
    }
}
