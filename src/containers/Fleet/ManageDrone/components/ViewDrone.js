//imports

import React, { Component } from 'react';
import axios from 'axios';


export default class ViewDrone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            droneMake: '',
            droneModel:'',
            droneMTOW: 0,
            droneSize: 0,
            droneMotorType: '',
            droneMotorNumber: 0,
            droneEngineSize: 0,
            dronePower: 0,
            droneProp: 0,
            droneFC: '',
            droneTX: '',
            droneRX: '',
            droneNotes: '',

        }
    }

    componentDidMount () {
      axios.get('http://localhost:5000/Fleet/ManageDrone/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          droneMake: response.data.droneMake,
            droneModel: response.data.droneModel,
            droneMTOW: response.data.droneMTOW,
            droneSize: response.data.droneSize,
            droneMotorType: response.data.droneMotorType,
            droneMotorNumber: response.data.droneMotorNumber,
            droneEngineSize: response.data.droneEngineSize,
            dronePower: response.data.dronePower,
            droneProp: response.data.droneProp,
            droneFC: response.data.droneFC,
            droneTX: response.data.droneTX,
            droneRX: response.data.droneRX,
            droneNotes: response.data.droneNotes
        })
      })
      .catch(function(error){
        console.log(error);
      })
    }


    render() {
        return (

          <div className="row">

            <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card h-100">
                        
                          <div className="card-header mb-2"><h5>Drone Details</h5></div>
                        <div className="card-body">
                        <ul class="list-group list-group-flush DroneManage">
                        <li class="list-group-item">Drone Make: {this.state.droneMake}</li>
                        <li class="list-group-item">Drone Model: {this.state.droneModel}</li>
                        <li class="list-group-item">MTOW: {this.state.droneMTOW}</li>
                        <li class="list-group-item">Size: {this.state.droneSize}</li>
                        </ul>
                        </div>
                  </div>
            </div>

            <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card  h-100">
                        <div className="card-header mb-2"><h5>Engine Details</h5></div>
                        <div className="card-body">
                        <ul class="list-group list-group-flush DroneManage">
                        <li class="list-group-item">Motor Type: {this.state.droneMotorType}</li>
                        <li class="list-group-item">Number of motors: {this.state.droneMotorNumber}</li>
                        <li class="list-group-item">Engine Size: {this.state.droneEngineSize}</li>
                        <li class="list-group-item">Power Source: {this.state.dronePower}</li>
                        <li class="list-group-item">Prop Size: {this.state.droneProp}</li>
                        </ul>
                        </div>
                  </div>
            </div>

            <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card  h-100">
                        <div className="card-header mb-2"><h5>Control System</h5></div>
                        <div className="card-body">
                        <ul class="list-group list-group-flush DroneManage">
                        <li class="list-group-item">Flight Control System: {this.state.droneFC}</li>
                        <li class="list-group-item">Control TX: {this.state.droneTX}</li>
                        <li class="list-group-item">Control RX: {this.state.droneRX}</li>
                        </ul>
                        </div>
                  </div>
            </div>

            <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card h-100">
                        <div className="card-header mb-2"><h5>Additional Information</h5></div>
                        <div className="card-body">
                        <ul class="list-group list-group-flush DroneManage">
                        <li class="list-group-item">Notes: {this.state.droneNotes}</li>
                        </ul>
                        </div>
                  </div>

            </div>

            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>        
            </div>



          </div>
            
  

    
  

        )
    }
}
