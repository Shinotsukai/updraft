import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddFlightLog from './components/AddFlightLog'
import EditFlightLog from './components/EditFlightLog'



//list component


const FlightLogData = props => (  

  <tr>
              <td >{props.flightloglist.flightDate.substring(0,10)}</td>
              <td>{props.flightloglist.drone_id.droneMake}</td>
              <td>{props.flightloglist.drone_id.droneModel}</td>
              <td>{props.flightloglist.flightTime}</td>
              <td>{props.flightloglist.flightDetails}</td>
              <td><button className="btn btn-primary btn-circle" title="Edit Flight"  data-toggle="modal" data-backdrop="static" href="/editflightlog" data-target="#EditFlightLog"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>


)





class FlightLog extends Component {

 //set initial state

 constructor(props) {
  super(props);
  
  this.state = {flightloglists: []}
  
}

//load data when component mounts

componentDidMount () {
  
  const { user } = this.props.auth;
  

    axios.post('http://localhost:5000/Logging/FlightLog',user)
    .then(response => {
    this.setState({flightloglists: response.data})
    console.log(this.state.flightloglists)
  })
  .catch((error) => {
    console.log(error);
  })


}


// pass props to component

ListFlightLog() {
  
  return this.state.flightloglists
  
  .map(currentflightloglist => {
    return <FlightLogData flightloglist={currentflightloglist}  key={currentflightloglist._id}/>;
  })
}





    render() {
        return (
<div>

                <div className="row mb-4">
                   <div className="col-xs-12 col-sm-6"><h2>Flight Records</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Logging > <b>Flight log</b><br /> <button style={{marginTop: 10}} className="btn btn-secondary" data-toggle="modal" data-backdrop="static" data-target="#NewFlightLog">Add Flight</button></div>
                   <AddFlightLog />
               </div>


        <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="card">
        
        <table className="table table-responsive table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>SUA Type</th>
              <th>Airframe</th>
              <th>Flight Time</th>
              <th>Flight Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {this.ListFlightLog()}
 
            
          </tbody>
        </table>
      </div>
    </div>

    </div>
                <EditFlightLog />
            </div>
        )
    }
}

FlightLog.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(FlightLog);

