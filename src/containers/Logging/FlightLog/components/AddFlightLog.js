import React, { Component } from 'react'

export default class AddFlightLog extends Component {
    render() {
        return (
            <div class="modal fade" id="NewFlightLog" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Add New Flight Log</h5>
        <div className="mb-2">
                <div class="input-group mb-3 col">

                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Date</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Date"  aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3 col">

                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Drone Used</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Drone Used" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3 col">

                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Flight Time</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Flight Time"  aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3 col">

                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Notes</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Notes"  aria-describedby="basic-addon1" />
                </div>

                




      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save changes</button>        
      </div>
    </div>
  </div>
</div>
        )
    }
}
