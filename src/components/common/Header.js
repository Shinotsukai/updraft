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
