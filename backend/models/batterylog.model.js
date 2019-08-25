const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batteryLogSchema = new Schema ({

    battery_id:{type:string, required:true},
    batteryLogDate: {type:Date, required:true},
    batteryLogChargeDate: {type:Date, required:false},



},
{
    timestamps: true,
});

const BatteryLog = mongoose.model('BatteryLog', batteryLogSchema);
module.exports = BatteryLog;