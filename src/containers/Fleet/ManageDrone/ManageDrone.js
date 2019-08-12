import React, { Component } from 'react';
import ViewDrone from './components/ViewDrone';
import EditDrone from './components/EditDrone';
import NewDrone from './components/NewDrone';


export default class ManageDrone extends Component {
    render() {
        return (
            <div>
               <div className="row mb-4">
                   <div className="col-xs-12 col-sm-8"><h2>Drone Management</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Fleet Management > <b>Manage Drone</b> <br /> <button style={{marginTop: 10}} className="btn btn-secondary" data-toggle="modal" data-backdrop="static" data-target="#NewDrone">+ New Drone</button></div>
               </div>
               <NewDrone />
<div className="row">


    <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Inspire 1</h5>
        <div className="mb-2">
               <ul class="list-group list-group-flush DroneManage">
                <li class="list-group-item">Drone Image</li>
                <li class="list-group-item">DJI</li>
                <li class="list-group-item"><span className="badge badge-success" >Available</span></li>
              </ul>
            <div style={{marginTop: 10}}> <button className="btn btn-primary btn-circle" title="Edit Drone" data-backdrop="static" data-toggle="modal" data-target="#EditDrone"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button> <button className="btn btn-primary btn-circle" title="View Drone" data-toggle="modal" data-target="#ViewDrone"><i class="fas fa-list" style={{fontSize:"20px", marginLeft:"1px", marginTop:"5px"}}></i></button></div>
        </div>
      </div>
    </div>

        <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Mavic Pro</h5>
        <div className="mb-2">
               <ul class="list-group list-group-flush DroneManage">
                <li class="list-group-item">Drone Image</li>
                <li class="list-group-item">DJI</li>
                <li class="list-group-item"><span className="badge badge-danger" >Unavailable</span></li>
              </ul>
            <div style={{marginTop: 10}}> <button className="btn btn-primary btn-circle" title="Edit Drone" data-backdrop="static" data-toggle="modal" data-target="#EditDrone"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button> <button className="btn btn-primary btn-circle" title="View Drone" data-toggle="modal" data-target="#ViewDrone"><i class="fas fa-list" style={{fontSize:"20px", marginLeft:"1px", marginTop:"5px"}}></i></button></div>
        </div>
      </div>
    </div>

        <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">KX-5</h5>
        <div className="mb-2">
               <ul class="list-group list-group-flush DroneManage">
                <li class="list-group-item">Drone Image</li>
                <li class="list-group-item">GepRC</li>
                <li class="list-group-item"><span className="badge badge-warning" >Assigned to job</span></li>
              </ul>
            <div style={{marginTop: 10}}> <button className="btn btn-primary btn-circle" title="Edit Drone" data-backdrop="static" data-toggle="modal" data-target="#EditDrone"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button> <button className="btn btn-primary btn-circle" title="View Drone" data-toggle="modal" data-target="#ViewDrone"><i class="fas fa-list" style={{fontSize:"20px", marginLeft:"1px", marginTop:"5px"}}></i></button></div>
        </div>
      </div>
    </div>

</div>

<EditDrone />
<ViewDrone />

            </div>
        )
    }
}
