import React, { Component } from 'react'

const WeatherForm = props => (
    <div className="mb-2">
    <form  onSubmit={props.getWeather}>

        <div className="row text-center">
        
        <div className="col"><input type="text" class="form-control" name="city" placeholder="City Name..." /></div>
        <div className="col"><input type="text" class="form-control" name="country" placeholder="Country Name..." /></div>
        <div className="col"><button className="btn btn-primary">Get Weather</button></div>
        

        </div>
    </form>
</div>
)

export default WeatherForm;