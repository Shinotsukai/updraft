import React from 'react'


const WeatherDisplay = props => (
    <div>
    {props.city && props.country ? (
        <div>
            <div className="container">

            <div className="row">
                

                    <table className="table table-responsive table-striped text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Temperature</th>
                                <th>Description</th>
                                <th>Humidity</th>
                                <th>Visibility</th>
                                <th>Speed</th>
                                <th>Direction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{props.temperature}&deg;C</td>
                                <td>{props.description}</td>
                                <td>{props.humidity}</td>
                                <td>{props.visibility}</td>
                                <td>{props.windspeed}</td>
                                <td>{props.winddirection}&deg;</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            </div>



            
        </div>
    ) : (
        <div className="container">

        <div className="row">
            

                <table className="table table-responsive table-striped text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>Temperature</th>
                            <th>Description</th>
                            <th>Humidity</th>
                            <th>Visibility</th>
                            <th>Speed</th>
                            <th>Direction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="6">{props.error}</td>
                            
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        </div>
    )}

</div>
)

export default WeatherDisplay;


