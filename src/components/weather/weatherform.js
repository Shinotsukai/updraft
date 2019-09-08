import React from 'react'

const WeatherForm = props => (
    <div className="card-body text-center">
    <form  onSubmit={props.getWeather}>

    <ul className="list-group list-group-flush">
    <li className="list-group-item"><input type="text" className="form-control" name="city" placeholder="City Name..." /></li>
    <li className="list-group-item"><input type="text" className="form-control" name="country" placeholder="Country Name..." /></li>
    <li className="list-group-item"><button className="btn btn-primary">Get Weather</button></li>
  </ul>
    </form>
</div>
)

export default WeatherForm;