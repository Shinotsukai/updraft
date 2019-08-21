//imports

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


//list component

const DroneList = props => (  

    <div className="col-sm-3 mb-4">
        <div className="card text-center">
            <h5 className="card-header mb-2">{props.droneitem.droneModel}</h5>
      <div className="mb-2">
             <ul class="list-group list-group-flush DroneManage">
              <li class="list-group-item">Make: {props.droneitem.droneMake}</li>
              <li class="list-group-item">MTOW: {props.droneitem.droneMTOW}</li>
              <li class="list-group-item">Size: {props.droneitem.droneSize}</li>
              <li class="list-group-item"><span className="badge badge-success" >Available</span></li>
            </ul>
          <div style={{marginTop: 10}}>
              <NavLink to={"/Dashboard/Fleet/ManageDrone/EditDrone/"+props.droneitem._id}><button className="btn btn-primary btn-circle" title="Edit Drone" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></NavLink> <NavLink to={"/Dashboard/Fleet/ManageDrone/ViewDrone/"+props.droneitem._id}><button className="btn btn-primary btn-circle" title="View Drone" data-toggle="modal" data-target="#ViewDrone"><i class="fas fa-list" style={{fontSize:"20px", marginLeft:"1px", marginTop:"5px"}}></i></button></NavLink>
          </div>
      </div>
    </div>
  </div>


)


class ManageDrone extends Component {

  //set initial state

  constructor(props) {
    super(props);

    this.state = {dronelists: []};
  }

//load data when component mounts

  componentDidMount () {
    
    axios.get('http://localhost:5000/Fleet/ManageDrone')
    .then(response => {
      this.setState({dronelists: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

// pass props to component

  ListDrone() {
    const { user } = this.props.auth;
    return this.state.dronelists
    .filter(dronelist => dronelist.userID === user.id)
    .map(currentdronelist => {
      return <DroneList droneitem={currentdronelist} key={currentdronelist._id}/>;
    })
  }


  //display to page
  
    render() {
        return (
            <div>
               <div className="row mb-4">
                   <div className="col-xs-12 col-sm-8"><h2>Drone Management</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Fleet Management > <b>Manage Drone</b> <br /> <NavLink to="/Dashboard/Fleet/ManageDrone/NewDrone"><button style={{marginTop: 10}} className="btn btn-secondary">+ New Drone</button></NavLink></div>

               </div>
<div className="row">
{this.ListDrone()}
</div>


            </div>
        )
    }
}

ManageDrone.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ManageDrone);

