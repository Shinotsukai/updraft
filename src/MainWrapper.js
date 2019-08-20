import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import './assets/css/core.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import ContentWrapper from './containers/ContentWrapper';

export default class MainWrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                <Header />
                
                <ContentWrapper />
                
                </div>
            </div>
        )
    }
}
