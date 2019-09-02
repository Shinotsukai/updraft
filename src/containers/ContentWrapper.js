import React, { Component } from 'react'
import DashHome from './dashhome/DashHome';
import {Switch} from 'react-router-dom';
import '../assets/css/core.css';
import '../assets/css/style.css';
import Test from './Test/Test';
import ManageDrone from './Fleet/ManageDrone/ManageDrone';
import NewDrone from './Fleet/ManageDrone/components/NewDrone';
import EditDrone from './Fleet/ManageDrone/components/EditDrone';
import ViewDrone from './Fleet/ManageDrone/components/ViewDrone';
import ProjectList from './Projects/ProjectList';
import Project from './Projects/Listing/Project';
import ManageCheckList from './Projects/ManageChecklist';
import FlightLog from './Logging/FlightLog/FlightLog';
import AddFlightLog from './Logging/FlightLog/components/AddFlightLog'
import MaintenanceLog from './Logging/MaintenanceLog/MaintenanceLog';
import NewMaintenanceLog from './Logging/MaintenanceLog/components/NewMaintenanceLog';
import EditMaintenanceLog from './Logging/MaintenanceLog/components/EditMaintenanceLog';
import PrivateRoute from "../components/private-route/PrivateRoute";
import ManageBattery from './Fleet/ManageBattery/ManageBattery';

export default class ContentWrapper extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                <PrivateRoute exact path="/Dashboard" component={DashHome} />
                    <PrivateRoute exact path="/Dashboard/Test" component={Test} />

                    {/* Project Routing */}
                    <PrivateRoute path="/Dashboard/Projects/ProjectList" component={ProjectList} />
                    <PrivateRoute path="/Dashboard/Projects/Project" component={Project} />
                    <PrivateRoute path="/Dashboard/Projects/ManageCheckList" component={ManageCheckList} />

                    {/* Fleet Drone Routing */}
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone" component={ManageDrone} />
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone/NewDrone" component={NewDrone} />
                    <PrivateRoute path="/Dashboard/Fleet/ManageDrone/EditDrone/:id" component={EditDrone} />
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone/ViewDrone/:id" component={ViewDrone} />

                    {/* Battery Routing */}
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageBattery" component={ManageBattery} />

                    {/* Log Routing */}
                    <PrivateRoute exact path="/Dashboard/Logging/FlightLog" component={FlightLog} />
                    <PrivateRoute path="/Dashboard/Logging/FlightLog/AddFlightLog" component={AddFlightLog} />
                    <PrivateRoute exact path="/Dashboard/Logging/MaintenanceLog" component={MaintenanceLog} />
                    <PrivateRoute path="/Dashboard/Logging/MaintenanceLog/NewMaintenanceLog" component={NewMaintenanceLog} />
                    <PrivateRoute path="/Dashboard/Logging/MaintenanceLog/EditMaintenanceLog/:id" component={EditMaintenanceLog} />
                
                </Switch>
                
            </div>
        )
    }
}


