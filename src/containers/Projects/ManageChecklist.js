import React, { Component } from 'react'

export default class ManageCheckList extends Component {
    render() {
        return (
            <div>

                <div className="row mb-4">
                   <div className="col-xs-12 col-sm-8"><h2>CheckList</h2></div>
                   <div className="col-xs-12 col-sm-4 text-right"> Home > Projects > <b>CheckList</b><br /> <button style={{marginTop: 10}} className="btn btn-secondary" >+ New CheckList</button></div>
               </div>


        <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="card">
        
        <table className="table table-responsive table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th> Name</th>
              <th>Description</th>
              
              <th></th>
            </tr>
          </thead>
          <tbody>
           <tr >
              <td >Pre Flight Checklist</td>
              <td>List of pre flight checks to carry out</td>

              <td><button className="btn btn-primary btn-circle" title="Edit Job" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>

            <tr>
            <td >Flight Checklist</td>
              <td>List of flight checks to carry out</td>

              <td><button className="btn btn-primary btn-circle" title="Edit Job" ><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button></td>
            </tr>

            <tr>
            <td >Post Flight Checklist</td>
              <td>List of Post flight checks to carry out</td>

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
