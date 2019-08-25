const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightLogSchema = new Schema ({

    drone_id:{type:string, required:true},
    flightDetails:{type:string, required:true},
    flightTime:{type:Number, required:true},
    flightDate:{type:Date, required:true},

},
{
    timestamps:true,
});

const flightLog = mongoose.model('flightLog', flightLogSchema);
module.exports = flightLog;