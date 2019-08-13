import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
<div>
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    {/* Sidebar Toggle (Topbar) */}
    <button id="sidebarCollapse" className="btn btn-link  rounded-circle mr-3">
      <i className="fa fa-bars" />
    </button>
    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - Alerts */}
      <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-bell fa-fw" />
          {/* Counter - Alerts */}
          <span className="badge badge-danger badge-counter">3+</span>
        </a>
        {/* Dropdown - Alerts */}
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">
            Alerts Center
          </h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-primary">
                <i className="fas fa-file-alt text-white" />
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 12, 2019</div>
              <span className="font-weight-bold">A new monthly report is ready to download!</span>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-success">
                <i className="fas fa-donate text-white" />
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 7, 2019</div>
              $290.29 has been deposited into your account!
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-warning">
                <i className="fas fa-exclamation-triangle text-white" />
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 2, 2019</div>
              Spending Alert: We've noticed unusually high spending for your account.
            </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </div>
      </li>
      {/* Nav Item - Messages */}
      <div className="topbar-divider  d-sm-block" />
      {/* Nav Item - User Information */}
      <li className="nav-item dropdown no-arrow">
        <div className="nav-link">
          <span className="mr-2  d-lg-inline text-gray-600 text-center ">Quad Focus Photography</span>
        </div>
        {/* Dropdown - User Information */}
      </li>
    </ul>
  </nav>
</div>

        )
    }
}
