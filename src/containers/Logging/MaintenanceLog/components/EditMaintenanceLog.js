import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class EditMaintenanceLog extends Component {

    constructor(props){
        super(props);

        this.onChangemaintenanceAction = this.onChangemaintenanceAction.bind(this);
        this.onChangemaintenanceNotes = this.onChangemaintenanceNotes.bind(this);
        this.onChangemaintenanceDate = this.onChangemaintenanceDate.bind(this);
        this.onChangemaintenanceStatus = this.onChangemaintenanceStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            droneMake: '',
            droneModel: '',
            maintenanceAction: '',
            maintenanceNotes: '',
            maintenanceDate: new Date(),
            maintenanceStatus: 'Incomplete',
            
        }
    }

    componentDidMount() {

        const { user } = this.props.auth;

        axios.post('http://localhost:5000/Logging/MaintenanceLog/'+this.props.match.params.id, user)
        .then(response =>
            this.setState({
                droneMake: response.data.drone_id.droneMake,
                droneModel: response.data.drone_id.droneMake,
                maintenanceAction: response.data.maintenanceAction,
                maintenanceNotes: response.data.maintenanceNotes,
                maintenanceDate: new Date(response.data.maintenanceDate),
                maintenanceStatus: response.data.maintenanceStatus,
            }))

        
        
        

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
            
            maintenanceAction:this.state.maintenanceAction,
            maintenanceNotes:this.state.maintenanceNotes,
            maintenanceDate:this.state.maintenanceDate,
            maintenanceStatus:this.state.maintenanceStatus
            
        }

        console.log(logmaintenance);

        axios.post('http://localhost:5000/Logging/MaintenanceLog/update/'+this.props.match.params.id, logmaintenance)
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
                    <input type="text" value={this.state.droneMake} className="form-control" placeholder="maintenance Time"  aria-describedby="basic-addon1" />
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


EditMaintenanceLog.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(EditMaintenanceLog);
  
  