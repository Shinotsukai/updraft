import React, { Component } from 'react'


export default class MaintenanceLog extends Component {
    render() {
        return (
<div>

                <div className="row mb-4">
                   <div className="col-xs-12 col-sm-6"><h2>Maintenance Log</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Logging > <b>Maintenance log</b><br /> <button style={{marginTop: 10}} className="btn btn-secondary" data-toggle="modal" data-backdrop="static" data-target="#NewFlightLog">Add Flight</button></div>
                   
               </div>


        <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="card">
        
        <table className="table table-responsive table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Aircraft</th>
              <th>Action Taken</th>
              <th>Notes</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           <tr >
              <td >08/08/2019</td>
              <td>KX-5</td>
              <td>Motor Replacement</td>
              <td>what a pain</td>
              <td>Available</td>
              <td><button className="btn btn-primary btn-circle" title="Edit Flight"  data-toggle="modal" data-backdrop="static" data-target="#EditFlightLog"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>

            <tr >
              <td >08/08/2019</td>
              <td>KX-5</td>
              <td>Motor Replacement</td>
              <td>what a pain</td>
              <td>Available</td>
              <td><button className="btn btn-primary btn-circle" title="Edit Flight"  data-toggle="modal" data-backdrop="static" data-target="#EditFlightLog"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>

            <tr >
              <td >08/08/2019</td>
              <td>KX-5</td>
              <td>Motor Replacement</td>
              <td>what a pain</td>
              <td>Available</td>
              <td><button className="btn btn-primary btn-circle" title="Edit Flight"  data-toggle="modal" data-backdrop="static" data-target="#EditFlightLog"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>


              
            
          </tbody>
        </table>
      </div>
    </div>

    </div>
                
            </div>
        )
    }
}
