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
                        <span className="input-group-text" id="basic-addon1">Drone Name</span>
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
                        <span className="input-group-text" id="basic-addon1">Drone Make</span>
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
                        <span className="input-group-text" id="basic-addon1">Size</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Size"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Power</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Power (KV)"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Fuel Type</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Fuel Type"  aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 col">

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Blah</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Blah"  aria-describedby="basic-addon1" />
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
