//imports

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


//list component

const BatteryInfoList = props => (  

    <div className="col-sm-12 col-md-4 mb-4">
        <div className="card h-100 text-center">
            <h5 className="card-header mb-2">{props.batteryitem.batteryName}</h5>
      <div className="mb-2">
             <ul  className="list-group list-group-flush DroneManage">
              <li  className="list-group-item">Capacity: {props.batteryitem.batteryCapacity} mAh</li>
              <li  className="list-group-item">Cell Count: {props.batteryitem.batteryCellCount}</li>
              <li  className="list-group-item"><span className="badge badge-success" >Available</span></li>
            </ul>
          <div  style={{marginTop: 10}}>
              <NavLink to={"/Dashboard/Fleet/ManageBattery/EditBattery/"+props.batteryitem._id}><button className="btn btn-primary btn-circle" title="Edit Battery" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></NavLink> <NavLink to={"/Dashboard/Fleet/ManageBattery/ViewBattery/"+props.batteryitem._id}><button className="btn btn-primary btn-circle" title="View Drone" data-toggle="modal" data-target="#ViewDrone"><i  className="fas fa-list" style={{fontSize:"20px", marginLeft:"1px", marginTop:"5px"}}></i></button></NavLink>
          </div>
      </div>
    </div>
  </div>


)


class ManageBattery extends Component {

  //set initial state

  constructor(props) {
    super(props);

    this.state = {batterylists: []};
  }

//load data when component mounts

  componentDidMount () {

    const { user } = this.props.auth;
    
    axios.post('/api/Fleet/ManageBattery', user)
    .then(response => {
      this.setState({batterylists: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

// pass props to component

  ListBattery() {
    
    return this.state.batterylists
    .map(currentbatterylist => {
      return <BatteryInfoList batteryitem={currentbatterylist} key={currentbatterylist._id}/>;
    })
  }


  //display to page
  
    render() {
        return (
            <div>
               <div className="row mb-4">
                   <div className="col-xs-12 col-sm-8"><h2>Battery Management</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Fleet Management > <b>Manage Battery</b> <br /> <NavLink to="/Dashboard/Fleet/ManageBattery/NewBattery"><button style={{marginTop: 10}} className="btn btn-secondary">+ New Battery</button></NavLink></div>

               </div>
<div className="row">
{this.ListBattery()}
</div>


            </div>
        )
    }
}

ManageBattery.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ManageBattery);

