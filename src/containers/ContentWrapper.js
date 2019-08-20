import React, { Component } from 'react'
import DashHome from './dashhome/DashHome';
import {Route, Switch} from 'react-router-dom';
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
import PrivateRoute from "../components/private-route/PrivateRoute";

export default class ContentWrapper extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                <PrivateRoute exact path="/Dashboard" component={DashHome} />
                    <PrivateRoute exact path="/Dashboard/Test" component={Test} />
                    <PrivateRoute path="/Dashboard/Projects/ProjectList" component={ProjectList} />
                    <PrivateRoute path="/Dashboard/Projects/Project" component={Project} />
                    <PrivateRoute path="/Dashboard/Projects/ManageCheckList" component={ManageCheckList} />
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone" component={ManageDrone} />
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone/NewDrone" component={NewDrone} />
                    <PrivateRoute path="/Dashboard/Fleet/ManageDrone/EditDrone/:id" component={EditDrone} />
                    <PrivateRoute exact path="/Dashboard/Fleet/ManageDrone/ViewDrone/:id" component={ViewDrone} />
                    <PrivateRoute path="/Dashboard/Logging/FlightLog" component={FlightLog} />
                
                </Switch>
                
            </div>
        )
    }
}


