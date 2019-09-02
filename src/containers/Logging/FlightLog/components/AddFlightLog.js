import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class AddFlightLog extends Component {

    constructor(props){
        super(props);

        this.onChangedrone = this.onChangedrone.bind(this);
        this.onChangeflightDetails = this.onChangeflightDetails.bind(this);
        this.onChangeflightTime = this.onChangeflightTime.bind(this);
        this.onChangeflightDate = this.onChangeflightDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            drone_id: '',
            flightDetails: '',
            flightTime: 0,
            flightDate: new Date(),
            userID: '',
            dronedetails: []
        }
    }

    componentDidMount() {

        const { user } = this.props.auth;

        axios.post('http://localhost:5000/Fleet/ManageDrone', user)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    dronedetails: response.data,
                    drone_id: response.data[0]._id
                })
                
            }
        })
        
        this.setState({
            userID: user.id
        })

    }

    onChangedrone (e) {
        this.setState(
            {drone_id: e.target.value}
        );
    }

    onChangeflightDetails(e) {
        this.setState(
            {flightDetails: e.target.value}
            );
    }

    onChangeflightTime(e){
        this.setState(
            {flightTime: e.target.value}
        );
    }

    onChangeflightDate(date){
        this.setState(
            {flightDate: date}
        );
    }

    onSubmit(e) {
        e.preventDefault();

        const logflight = {
            drone_id:this.state.drone_id,
            flightDetails:this.state.flightDetails,
            flightTime:this.state.flightTime,
            flightDate:this.state.flightDate,
            userID: this.state.userID
        }

        console.log(logflight);

        axios.post('http://localhost:5000/Logging/FlightLog/add', logflight)
        .then(res => console.log(res.data));

    
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
    <div className="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Add New Flight Log</h5>
        
        <div className="mb-2">
            
                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Date</span>
                    </div>
                    <input type="text" value="" onChange={this.onChangeflightDate} className="form-control" placeholder="Date"  aria-describedby="basic-addon1" />
                </div>


                

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Used</span>
                    </div>
                    <select ref="userInput" required className="form-control" value={this.state.drone_id} onChange={this.onChangedrone}>
                        {this.state.dronedetails.map(dronedetail => {
                            return <option key={dronedetail.id} value={dronedetail._id}>{dronedetail.droneModel}</option>
                        })}
                    </select>
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Flight Time</span>
                    </div>
                    <input type="text" value={this.state.flightTime} onChange={this.onChangeflightTime} className="form-control" placeholder="Flight Time"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Flight Details</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.flightDetails} onChange={this.onChangeflightDetails} placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">User ID</span>
                    </div>
                    <input type="text" className="form-control"  value={this.state.userID} placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>

                



                </div>
      </div>
    
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary">Save changes</button>        
      </div>
      </div>
        
      </form>
        )
    }
}


AddFlightLog.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(AddFlightLog);
  
  