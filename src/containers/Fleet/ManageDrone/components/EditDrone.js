//imports

import React, { Component } from 'react';
import axios from 'axios';


export default class EditDrone extends Component {

    constructor(props) {
        super(props);
        this.onChangedroneMake = this.onChangedroneMake.bind(this);
        this.onChangedroneModel = this.onChangedroneModel.bind(this);
        this.onChangedroneMTOW = this.onChangedroneMTOW.bind(this);
        this.onChangedroneSize = this.onChangedroneSize.bind(this);
        this.onChangedroneMotorType = this.onChangedroneMotorType.bind(this);
        this.onChangedroneMotorNumber = this.onChangedroneMotorNumber.bind(this);
        this.onChangedroneEngineSize = this.onChangedroneEngineSize.bind(this);
        this.onChangedronePower = this.onChangedronePower.bind(this);
        this.onChangedroneProp = this.onChangedroneProp.bind(this);
        this.onChangedroneFC = this.onChangedroneFC.bind(this);
        this.onChangedroneTX = this.onChangedroneTX.bind(this);
        this.onChangedroneRX = this.onChangedroneRX.bind(this);
        this.onChangedroneNotes = this.onChangedroneNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            droneMake: '',
            droneModel:'',
            droneMTOW: 0,
            droneSize: 0,
            droneMotorType: '',
            droneMotorNumber: 0,
            droneEngineSize: 0,
            dronePower: 0,
            droneProp: 0,
            droneFC: '',
            droneTX: '',
            droneRX: '',
            droneNotes: '',

        }
    }

    componentDidMount () {
      axios.get('http://localhost:5000/Fleet/ManageDrone/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          droneMake: response.data.droneMake,
            droneModel: response.data.droneModel,
            droneMTOW: response.data.droneMTOW,
            droneSize: response.data.droneSize,
            droneMotorType: response.data.droneMotorType,
            droneMotorNumber: response.data.droneMotorNumber,
            droneEngineSize: response.data.droneEngineSize,
            dronePower: response.data.dronePower,
            droneProp: response.data.droneProp,
            droneFC: response.data.droneFC,
            droneTX: response.data.droneTX,
            droneRX: response.data.droneRX,
            droneNotes: response.data.droneNotes
        })
      })
      .catch(function(error){
        console.log(error);
      })
    }

    onChangedroneMake(e) {
        this.setState(
            {droneMake:e.target.value}
        )
    }

    onChangedroneModel(e) {
        this.setState(
            {droneModel:e.target.value}
        )
    }

    onChangedroneMTOW(e) {
        this.setState(
            {droneMTOW:e.target.value}
        )
    }

    onChangedroneSize(e) {
        this.setState(
            {droneSize:e.target.value}
        )
    }

    onChangedroneMotorType(e) {
        this.setState(
            {droneMotorType:e.target.value}
        )
    }

    onChangedroneMotorNumber(e) {
        this.setState(
            {droneMotorNumber:e.target.value}
        )
    }

    onChangedroneEngineSize(e) {
        this.setState(
            {droneEngineSize:e.target.value}
        )
    }

    onChangedronePower(e) {
        this.setState(
            {dronePower:e.target.value}
        )
    }

    onChangedroneProp(e) {
        this.setState(
            {droneProp:e.target.value}
        )
    }

    onChangedroneFC(e) {
        this.setState(
            {droneFC:e.target.value}
        )
    }

    onChangedroneTX(e) {
        this.setState(
            {droneTX:e.target.value}
        )
    }

    onChangedroneRX(e) {
        this.setState(
            {droneRX:e.target.value}
        )
    }

    onChangedroneNotes(e) {
        this.setState(
            {droneNotes:e.target.value}
        )
    }

    onSubmit(e) {
        e.preventDefault();

        const drone = {
            droneMake: this.state.droneMake,
            droneModel: this.state.droneModel,
            droneMTOW: this.state.droneMTOW,
            droneSize: this.state.droneSize,
            droneMotorType: this.state.droneMotorType,
            droneMotorNumber: this.state.droneMotorNumber,
            droneEngineSize: this.state.droneEngineSize,
            dronePower: this.state.dronePower,
            droneProp: this.state.droneProp,
            droneFC: this.state.droneFC,
            droneTX: this.state.droneTX,
            droneRX: this.state.droneRX,
            droneNotes: this.state.droneNotes
        
        }

        console.log(drone);

        axios.post('http://localhost:5000/Fleet/ManageDrone/update/'+this.props.match.params.id,drone)
        .then(res => console.log(res));

        window.location = '/Fleet/ManageDrone';
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
            
  
    <div className="modal-content">
   <div className="card text-center">
   
        <h5 className="card-header mb-2">Add New Drone</h5>
        <div className="mb-2">
                <div className="input-group mb-3 col">

                    

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Make</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneMake} onChange={this.onChangedroneMake} placeholder="Drone Name"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Model</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneModel} onChange={this.onChangedroneModel} placeholder="Drone Model" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Size</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneSize} onChange={this.onChangedroneSize} placeholder="Drone Make"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">MTOW</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneMTOW} onChange={this.onChangedroneMTOW} placeholder="MTOW"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Motor Type</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneMotorType} onChange={this.onChangedroneMotorType} placeholder="Size"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Number of Motors</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneMotorNumber} onChange={this.onChangedroneMotorNumber} placeholder="Number-Motors"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Engine Size</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneEngineSize} onChange={this.onChangedroneEngineSize} placeholder="Power (KV)"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Power Source</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.dronePower} onChange={this.onChangedronePower} placeholder="Power Source"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Prop Size</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneProp} onChange={this.onChangedroneProp} placeholder="Prop-Size"  aria-describedby="basic-addon1" />
                </div>

                                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Flight Control System</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneFC} onChange={this.onChangedroneFC} placeholder="FC"  aria-describedby="basic-addon1" />
                </div>

                                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Control TX</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneTX} onChange={this.onChangedroneTX} placeholder="ControlTX"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Control RX</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneRX} onChange={this.onChangedroneRX} placeholder="ControlRX"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Notes</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.droneNotes} onChange={this.onChangedroneNotes} placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>

            
      </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary">Save changes</button>        
      </div>

      
    </div>
  

</form>
        )
    }
}
