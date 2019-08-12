import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class ProjectList extends Component {
    render() {
        return (
            <div>

                <div className="row mb-4">
                   <div className="col-xs-12 col-sm-8"><h2>Pre Planning</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Projects > <b>Pre-Planning</b></div>
               </div>


        <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="card">
        
        <table className="table table-responsive table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Project Name</th>
              <th>Client Name</th>
              <th>Start date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           <tr >
              <td >Project title</td>
              <td>Cadent</td>
              <td>12/11/2019</td>
              <td>Somewhere in the UK</td>
              <td>Aerial photography to assess pipe work in residential area</td>
              <td><span className="badge badge-warning" style={{padding: 5}}>Quote</span></td>
              <td><NavLink to="/Projects/Project"><button className="btn btn-primary btn-circle" title="Edit Job" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></NavLink></td>
            </tr>

              <tr >
              <td >Project title</td>
              <td>Cadent</td>
              <td>12/11/2019</td>
              <td>Somewhere in the UK</td>
              <td>Aerial photography to assess pipe work in residential area</td>
              <td><span className="badge badge-warning" style={{padding: 5}}>Quote</span></td>
              <td><button className="btn btn-primary btn-circle" title="Edit Job" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>

              <tr >
              <td >Project title</td>
              <td>Cadent</td>
              <td>12/11/2019</td>
              <td>Somewhere in the UK</td>
              <td>Aerial photography to assess pipe work in residential area</td>
              <td><span className="badge badge-warning" style={{padding: 5}}>Quote</span></td>
              <td><button className="btn btn-primary btn-circle" title="Edit Job" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
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
