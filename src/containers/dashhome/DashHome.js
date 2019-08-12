import React, { Component } from 'react'
import ProgressBars from './ProgressBars';


export default class DashHome extends Component {
    render() {
        return (
<div>
  {/*weather and welcome*/}
  <div className="row">
    <div className="col-sm-5 mb-4">
      <div className="card">
        <h5 className="card-header mb-2">Welcome back *insert-name*</h5>
        <p className="card-text mb-2" style={{padding: 10}}>To be changed but could mention any outstanding tasks / pfco renewal etc</p>
      </div>
    </div>
    <div className="col-sm-7 mb-4">
      <div className="card" style={{textAlign: 'right'}}>
        <h5 className="card-header">Local Weather</h5>
        <a className="weatherwidget-io" href="https://forecast7.com/en/52d49n1d89/birmingham/" data-label_1="BIRMINGHAM" data-label_2="WEATHER" data-theme="original">BIRMINGHAM WEATHER</a>
        
      </div>
    </div>
  </div>
  {/*Progress bars*/}
  <ProgressBars />
  {/* tables*/}
  <div className="row">
    <div className="col-sm-12 col-md-6 mb-4">
      <div className="card">
        <h5 className="card-header">Recent battery cycles</h5>
        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Battery</th>
              <th>Capacity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Inspire 1</td>
              <td>3600</td>
              <td><span className="badge badge-success" style={{padding: 5}}>available</span></td>
            </tr>
            <tr>
              <td scope="row">Gens Ace</td>
              <td>1300</td>
              <td><span className="badge badge-danger" style={{padding: 5}}>needs charging</span></td>
            </tr>
            <tr>
              <td scope="row">Gens Ace</td>
              <td>1300</td>
              <td><span className="badge badge-warning" style={{padding: 5}}>assigned to job</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 mb-4">
      <div className="card">
        <h5 className="card-header">Recent Maintenance tasks</h5>
        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Drone</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">GepRC KX5</td>
              <td>Resolder esc wiring</td>
              <td><span className="badge badge-success" style={{padding: 5}}>complete</span></td>
            </tr>
            <tr>
              <td scope="row">Micro Quad 2inch</td>
              <td>Replace front right motor</td>
              <td><span className="badge badge-warning" style={{padding: 5}}>awaiting parts</span></td>
            </tr>
             <tr>
              <td scope="row">Afro BF-EX</td>
              <td>To be rebuilt</td>
              <td><span className="badge badge-danger" style={{padding: 5}}>incomplete</span></td>
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

