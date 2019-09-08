const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batterySchema = new Schema ({
    batteryName: {type: String, required:true},
    batteryCapacity: {type:Number, required:true},
    batteryCellCount: {type:Number,required:true},
    batteryNotes:{type:String, required:false},
    userID:{type:String,required:true}

},

{
    timestamps: true,
});

const BatteryInfo = mongoose.model('BatteryInfo', batterySchema);

module.exports = BatteryInfo;