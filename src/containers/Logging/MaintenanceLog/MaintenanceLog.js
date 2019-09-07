import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";





//list component



const MaintenanceLogData = props => (  
  

  <tr>
              <td >{props.maintenanceloglist.maintenanceDate.substring(0,10)}</td>
              
              <td>{props.maintenanceloglist.drone_id.droneModel}</td>
              <td>{props.maintenanceloglist.maintenanceAction}</td>
              <td>{props.maintenanceloglist.maintenanceNotes}</td>
              <td >{props.maintenanceloglist.updatedAt.substring(0,10)}</td>
              <td><span className={props.statusToClassName[props.maintenanceloglist.maintenanceStatus]} style={{padding: 5}}>{props.maintenanceloglist.maintenanceStatus}</span></td>
              <td><NavLink to={"/Dashboard/Logging/MaintenanceLog/EditMaintenanceLog/"+props.maintenanceloglist._id}><button className="btn btn-primary btn-circle" title="Edit maintenance" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></NavLink></td>
            </tr>


)





class MaintenanceLog extends Component {

 //set initial state

 constructor(props) {
  super(props);
  
  this.state = {maintenanceloglists: []}
  
}

//load data when component mounts

componentDidMount () {
  
  const { user } = this.props.auth;
  

    axios.post('http://localhost:5000/Logging/MaintenanceLog',user)
    .then(response => {
    this.setState({maintenanceloglists: response.data})
    console.log(this.state.maintenanceloglists)
  })
  .catch((error) => {
    console.log(error);
  })


}


// pass props to component

ListMaintenanceLog() {

  const statusToClassName = {
    'Complete': "badge badge-success",
    'Awaiting Parts': "badge badge-warning",
    'Incomplete': "badge badge-danger"
  };
  
  return this.state.maintenanceloglists
  
  .map(currentmaintenanceloglist => {
    return <MaintenanceLogData maintenanceloglist={currentmaintenanceloglist} statusToClassName={statusToClassName}  key={currentmaintenanceloglist._id}/>;
  })
}





    render() {
      
        return (
<div>

                <div className="row mb-4">
                   <div className="col-xs-12 col-sm-6"><h2>Maintenance Log</h2></div>
                   <div className="col-xs-12 col-sm-6 text-right"> Home > Logging > <b>Flight log</b><br /> <NavLink to="/Dashboard/Logging/MaintenanceLog/NewMaintenanceLog"><button style={{marginTop: 10}} className="btn btn-secondary">+ New Maintenance Log</button></NavLink></div>
                   
               </div>


        <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="card">
        
        <table className="table table-responsive table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Date Added</th>
              
              <th>Model</th>
              <th>Action Taken</th>
              <th>Notes</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {this.ListMaintenanceLog()}
 
            
          </tbody>
        </table>
      </div>
    </div>

    </div>
                
            </div>
        )
    }
}

MaintenanceLog.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(MaintenanceLog);

