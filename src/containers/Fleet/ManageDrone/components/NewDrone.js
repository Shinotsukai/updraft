import React, { Component } from 'react'

export default class NewDrone extends Component {
    render() {
        return (
            <div className="modal fade" id="NewDrone" tabIndex="-1" role="dialog"  aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Add New Drone</h5>
        <div className="mb-2">
                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Make</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Drone Name"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Model</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Drone Model" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Drone Size</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Drone Make"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">MTOW</span>
                    </div>
                    <input type="text" className="form-control" placeholder="MTOW"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Motor Type</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Size"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Number of Motors</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Number-Motors"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Engine Size</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Power (KV)"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Power Source</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Power Source"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Prop Size</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Prop-Size"  aria-describedby="basic-addon1" />
                </div>

                                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Flight Control System</span>
                    </div>
                    <input type="text" className="form-control" placeholder="FC"  aria-describedby="basic-addon1" />
                </div>

                                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Control TX</span>
                    </div>
                    <input type="text" className="form-control" placeholder="ControlTX"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Control RX</span>
                    </div>
                    <input type="text" className="form-control" placeholder="ControlRX"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Notes</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>


      </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Save changes</button>        
      </div>
    </div>
  </div>
</div>
        )
    }
}
