import React, { Component } from 'react'
import DashHome from './dashhome/DashHome';
import {Route, Switch} from 'react-router-dom';
import '../assets/css/core.css';
import '../assets/css/style.css';
import Test from './Test/Test';
import ManageDrone from './Fleet/ManageDrone/ManageDrone';
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
                    <Route path="/Fleet/ManageDrone" component={ManageDrone} />
                    <Route path="/Logging/FlightLog" component={FlightLog} />
                </Switch>
                
            </div>
        )
    }
}
