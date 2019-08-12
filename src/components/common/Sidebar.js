import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {UncontrolledCollapse} from 'reactstrap';


export default class Sidebar extends Component {

    
    render() {
        return (
<div>
  <nav id="sidebar" style={{overflowY:"auto"}}>
    <div>
      {/* Nav Item  */}
      <li className="list-unstyled components sidebar-header">
        <div style={{width: '100%'}} className="text-center">
          <a href="#" id="userSubmenu" data-toggle="collapse"  className="dropdown-toggle text-center" width="100%">
            <img className="img-profile rounded-circle mb-2" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            <br />
            <span className="mr-2  d-lg-inline text-gray-600 ">Valerie Luna</span>
            <br />
            <span className="mr-2  d-lg-inline text-gray-600 ">Remote Pilot</span></a></div>
                <UncontrolledCollapse toggler="#userSubmenu">
        <ul className=" list-unstyled text-center" >
          <li><NavLink to="#">
              <i className="fas fa-user fa-sm fa-fw " /> Manage Profile
            </NavLink></li>
          <li><NavLink to="#">
              <i className="fas fa-cogs fa-sm fa-fw" /> Settings
            </NavLink></li>

          {/* <div class="dropdown-divider"></div> */}
          <li><NavLink to="#" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw" /> Sign Out
            </NavLink></li>
        </ul>
         </UncontrolledCollapse>
      </li>
      
    </div>
    <ul className="list-unstyled components text-center">
        <li>
        <button className="btn btn-secondary mb-2" >+ Create New Project</button>
      </li>
      <li><NavLink to="/">Dashboard Home</NavLink></li>
       <li>
        <a href="#" id="Projects"  className="dropdown-toggle">Project Management</a>
           <UncontrolledCollapse toggler="#Projects">
        <ul className="dropdown list-unstyled" >
          <li>
            <NavLink to="/Projects/ProjectList">Project List</NavLink>
          </li>
          <li>
            <NavLink to="/Projects/ManageCheckList">Manage Check-lists</NavLink>
          </li>
        </ul>
        </UncontrolledCollapse>
      </li>
      <li>
        <a href="#" id="Drone" className="dropdown-toggle">Fleet Management</a>
           <UncontrolledCollapse toggler="#Drone">
        <ul className=" list-unstyled" id="pageSubmenu">
          <li>
            <NavLink to="/Fleet/ManageDrone">Manage Drones</NavLink>
          </li>
          <li>
            <NavLink to="#">Manage Batteries</NavLink>
          </li>
          <li>
            <NavLink to="#">Manage Assets</NavLink>
          </li>
        </ul>
        </UncontrolledCollapse>
      </li>
         <li>
        <a href="#" id="Logging" className="dropdown-toggle">Logging</a>
           <UncontrolledCollapse toggler="#Logging">
        <ul className=" list-unstyled" id="pageSubmenu">
          <li>
            <NavLink to="/Logging/FlightLog">Flight log</NavLink>
          </li>
          <li>
            <NavLink to="#">Battery Log</NavLink>
          </li>
          <li>
            <NavLink to="#">Maintenance Log</NavLink>
          </li>
        </ul>
        </UncontrolledCollapse>
      </li>
         <li>
        <a href="#" id="Reporting" className="dropdown-toggle">Reporting</a>
           <UncontrolledCollapse toggler="#Reporting">
        <ul className=" list-unstyled" id="pageSubmenu">
          <li>
            <NavLink to="#">Flight Report</NavLink>
          </li>
          <li>
            <NavLink to="#">Job Report</NavLink>
          </li>
          <li>
            <NavLink to="#">Asset Report</NavLink>
          </li>
        </ul>
        </UncontrolledCollapse>
      </li>



      
      <div className="text-center d-lg-none" style={{width: '100%'}}><button id="sidebarCollapse2" className="btn btn-link text-center  rounded-circle mr-3">
          <i className="fa fa-bars" style={{color: '#fff'}} />
        </button>
      </div>
    </ul>
  </nav>
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <NavLink to="#" className="btn btn-danger" style={{color: 'white'}} data-dismiss="modal">Logout</NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
