import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'


export default class LandingPage extends Component {
    render() {
        return (
            
                 <div className="wrapper">
                     <div className="content">
                     <div className="container-fluid">
                         

                     <div className="row  text-center">
<div className="col-12">
<h2>Welcome to upDraft</h2></div>

</div>

<div className="row text-center">

    <div className="col=12 text-center">

        <h5>Please either login or create an account</h5>
<NavLink to="/login"> <button className="btn btn-primary">Login</button> </NavLink> 
<NavLink to="/Register"><button className="btn btn-secondary"> Register</button> </NavLink><br />

</div>
</div>

</div>
</div>
</div>

                
            
        )
    }
}
