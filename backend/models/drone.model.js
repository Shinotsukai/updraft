//imports

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Drone Schema

const DroneSchema = new Schema ({

    droneMake: {type: String, required: true},
    droneModel: {type: String, required: true},
    droneMTOW: {type: String, required: true},
    droneSize: {type: Number, required: true},
    droneMotorType: {type: String, required: true},
    droneMotorNumber: {type: Number, required: true},
    droneEngineSize: {type: Number, required: true},
    dronePower: {type: String, required: true},
    droneProp: {type: Number, required: true},
    droneFC: {type: String, required: true},
    droneTX: {type: String, required: true},
    droneRX: {type: String, required: true},
    droneNotes: {type: String, required: false},

},

{
    timestamps: true,
});


//export schema
const DroneInfo = mongoose.model('DroneInfo', DroneSchema);
module.exports = DroneInfo;
