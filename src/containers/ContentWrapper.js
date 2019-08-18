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

export default class ContentWrapper extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Switch>
                    <Route exact path="/" component={DashHome} />
                    <Route path="/Test" component={Test} />
                    <Route path="/Projects/ProjectList" component={ProjectList} />
                    <Route path="/Projects/Project" component={Project} />
                    <Route path="/Projects/ManageCheckList" component={ManageCheckList} />
                    <Route exact path="/Fleet/ManageDrone" component={ManageDrone} />
                    <Route exact path="/Fleet/ManageDrone/NewDrone" component={NewDrone} />
                    <Route path="/Fleet/ManageDrone/EditDrone/:id" component={EditDrone} />
                    <Route exact path="/Fleet/ManageDrone/ViewDrone/:id" component={ViewDrone} />
                    <Route path="/Logging/FlightLog" component={FlightLog} />
                </Switch>
                
            </div>
        )
    }
}
