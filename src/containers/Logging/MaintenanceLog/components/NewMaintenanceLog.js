import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class AddMaintenanceLog extends Component {

    constructor(props){
        super(props);

        this.onChangedrone = this.onChangedrone.bind(this);
        this.onChangemaintenanceAction = this.onChangemaintenanceAction.bind(this);
        this.onChangemaintenanceNotes = this.onChangemaintenanceNotes.bind(this);
        this.onChangemaintenanceDate = this.onChangemaintenanceDate.bind(this);
        this.onChangemaintenanceStatus = this.onChangemaintenanceStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            drone_id: '',
            maintenanceAction: '',
            maintenanceNotes: '',
            maintenanceDate: new Date(),
            maintenanceStatus: 'Incomplete',
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

    onChangemaintenanceAction(e) {
        this.setState(
            {maintenanceAction: e.target.value}
            );
    }

    onChangemaintenanceNotes(e){
        this.setState(
            {maintenanceNotes: e.target.value}
        );
    }

    onChangemaintenanceDate(date){
        this.setState(
            {maintenanceDate: date}
        );
    }

    onChangemaintenanceStatus(e) {
        this.setState(
            {maintenanceStatus:e.target.value}
        );
    }

    onSubmit(e) {
        e.preventDefault();

        const logmaintenance = {
            drone_id:this.state.drone_id,
            maintenanceAction:this.state.maintenanceAction,
            maintenanceNotes:this.state.maintenanceNotes,
            maintenanceDate:this.state.maintenanceDate,
            maintenanceStatus:this.state.maintenanceStatus,
            userID: this.state.userID
        }

        console.log(logmaintenance);

        axios.post('http://localhost:5000/Logging/MaintenanceLog/add', logmaintenance)
        .then(res => console.log(res.data));

    
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
    <div className="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Add New maintenance Log</h5>
        
        <div className="mb-2">
            
                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Date</span>
                    </div>
                    <input type="text" value={this.state.maintenanceDate} onChange={this.onChangemaintenanceDate} className="form-control" placeholder="Date"  aria-describedby="basic-addon1" />
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
                        <span className="input-group-text" id="basic-addon1">Maintenance Action</span>
                    </div>
                    <input type="text" value={this.state.maintenanceAction} onChange={this.onChangemaintenanceAction} className="form-control" placeholder="maintenance Time"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Maintenance Notes</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.maintenanceNotes} onChange={this.onChangemaintenanceNotes} placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Status</span>
                    </div>
                    <select ref="userInput"
                    required
                    className="form-control" value={this.state.maintenanceStatus} onChange={this.onChangemaintenanceStatus}>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Awaiting Parts">Awaiting Parts</option>
                        <option value="Complete">Complete</option>
                        </select>
                    
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


AddMaintenanceLog.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(AddMaintenanceLog);
  
  