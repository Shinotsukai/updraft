import React, { Component } from 'react'

export default class EditDrone extends Component {
    render() {
        return (
            <div class="modal fade" id="EditDrone" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Drone Name</h5>
        <div className="mb-2">
               <ul class="list-group list-group-flush DroneManage">
               <li class="list-group-item">Drone Make</li>
                <li class="list-group-item">Drone Model</li>
                <li class="list-group-item">MTOW</li>
                <li class="list-group-item">Size</li>
                <li class="list-group-item">Motor Type</li>
                <li class="list-group-item">Number of motors</li>
                <li class="list-group-item">Engine Size</li>
                <li class="list-group-item">Power Source</li>
                <li class="list-group-item">Prop Size</li>
                <li class="list-group-item">Flight Control System</li>
                <li class="list-group-item">Control TX</li>
                <li class="list-group-item">Control RX</li>
                <li class="list-group-item">Notes</li>
                <li class="list-group-item"><span className="badge badge-info " style={{padding: 10}}>Status</span></li>
              </ul>
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
