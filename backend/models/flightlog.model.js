const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightLogSchema = new Schema ({

    drone_id:{type:mongoose.Schema.Types.ObjectId, ref:'DroneInfo'},
    flightDetails:{type:String, required:true},
    flightTime:{type:Number, required:true},
    flightDate:{type:Date, required:true},
    userID:{type:String,required:true},

},
{
    timestamps:true,
});

const flightLog = mongoose.model('flightLog', flightLogSchema);
module.exports = flightLog;