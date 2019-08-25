import React, { Component } from 'react'
import ProgressBars from './ProgressBars';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WeatherCheck from '../../components/weather/weather';



class DashHome extends Component {
  
    render() {
      const { user } = this.props.auth;
        return (
<div>
  {/*weather and welcome*/}
  <div className="row">
    <div className="col-sm-5 mb-4">
      <div className="card">
        <h5 className="card-header mb-2">Welcome back {user.username}</h5>
        <p className="card-text mb-2" style={{padding: 10}}>Your user id is: {user.id}</p>
      </div>
    </div>
    <div className="col-sm-7 mb-4">

          <WeatherCheck/>

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

DashHome.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(DashHome);
