const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceLogSchema = new Schema ({

    drone_id: {type:mongoose.Schema.Types.ObjectId, ref:'DroneInfo'},
    maintenanceAction: {type:String, required:true},
    maintenanceNotes: {type:String, required:true},
    maintenanceStatus:{type:String, required:true},
    maintenanceDate:{type:Date, required:true},
    userID:{type:String,required:true},

},
{timestamps:true,});

const maintenanceLog = mongoose.model('maintenanceLog', maintenanceLogSchema);
module.exports = maintenanceLog;