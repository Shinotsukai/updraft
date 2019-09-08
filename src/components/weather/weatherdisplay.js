import React from 'react'
import WeatherIcon from 'react-icons-weather';
import "./weatherdisplay.css"
import 'react-icons-weather/lib/css/weather-icons-wind.css';


const WeatherDisplay = props => (

<div className="card-body text-center">
{props.city && props.country ? (



    <ul className="list-group list-group-flush">
    <li className="list-group-item">
        <WeatherIcon name="owm" iconId={props.weatherIcon} flip="horizontal" rotate="90" style={{fontSize:'50px'}} /></li>
    <li className="list-group-item"><strong>{props.description}</strong></li>
    <li className="list-group-item"><strong>{props.temperature}&deg;C</strong></li>
    <li className="list-group-item">Min: <strong>{props.temp_min}&deg;C</strong> - Max: <strong>{props.temp_max}&deg;C</strong> </li>
    <li className="list-group-item">Visibility: <strong>{props.visibility}</strong></li>
    <li className="list-group-item">Wind Speed: <strong>{props.windspeed}</strong> <i style={{fontSize:'20px'}}  className={`wi wi-wind towards-${props.winddirection}`}></i></li>
  </ul>


) : (
<div>
    {props.error}
</div>
    )}

</div>

)

export default WeatherDisplay;


