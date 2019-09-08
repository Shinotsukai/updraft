import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 66;

export default class ProgressBars extends Component {
    render() {
        return (
            <div>
                <div className="row">
    <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Flight Status</h5>
        <div className="mb-2" style={{width: '25%', marginLeft: '40%'}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`}  />
        </div>
      </div>
    </div>
    <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Battery Status</h5>
        <div className="mb-2" style={{width: '25%', marginLeft: '40%'}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`}  />
        </div>
      </div>
    </div>
    <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Project Status</h5>
        <div className="mb-2" style={{width: '25%', marginLeft: '40%'}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`}  />
        </div>
      </div>
    </div>
    <div className="col-sm-3 mb-4">
      <div className="card text-center">
        <h5 className="card-header mb-2">Maintenance Status</h5>
        <div className="mb-2" style={{width: '25%', marginLeft: '40%'}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`}  />
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
