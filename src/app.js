import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


import './assets/css/core.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Register from './containers/Landing/register';
import Login from './containers/Landing/login';
import PrivateRoute from "./components/private-route/PrivateRoute";
import MainWrapper from './MainWrapper';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
            <div className="container">
            <div className="row">

            Landing page -> <br />
            <NavLink to="/login"> Login </NavLink> | <br /> 
            <NavLink to="/Register"> Register </NavLink><br />
            </div>
            <div className="row"> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
                         
              <PrivateRoute  path="/Dashboard" component={MainWrapper} />
            

            </div>
            </div>
            </Router>
            </Provider>
        )
    }
}
