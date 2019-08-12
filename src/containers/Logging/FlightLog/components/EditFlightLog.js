import React, { Component } from 'react'

export default class EditFlightLog extends Component {
    render() {
        return (
            <div class="modal fade" id="EditFlightLog" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
   <div className="card text-center">
        <h5 className="card-header mb-2">Flight Log</h5>
        <div className="mb-2">
               <ul class="list-group list-group-flush DroneManage">
                <li class="list-group-item">Date</li>
                <li class="list-group-item">Drone Used</li>
                <li class="list-group-item">Flight Time</li>
                <li class="list-group-item">Notes</li>


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
