import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">Client Name:</li>
                              <li class="list-group-item">Address:</li>
                              <li class="list-group-item">Contact Number</li>
                              <li class="list-group-item">Start Date:</li>
                             </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            This is for a map
                            </div>                            
                        </div>
                    </div>

                </div>

                {/* This is for project information cards */}
                <div className="row">

                <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">Aircraft</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">Crew</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">Pre Planning</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">Onsite Planning</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">Risk Assessment</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center mb-4">    
                        <div className="card">
                            <div className="card-header">CheckLists</div>
                            <div className="card-body"> text to relate to title<br />
                            <button className="btn btn-primary btn-circle"><i className="fas fa-edit" style={{fontSize:"20px", marginLeft:"3px", marginTop:"1px"}}></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
