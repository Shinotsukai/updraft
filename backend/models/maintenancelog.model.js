const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceLogSchema = new Schema ({

    drone_id: {type:string, required:true},
    maintenanceAction: {type:string, required:true},
    maintenanceNotes: {type:string, required:true},
    maintenanceStatus:{type:string, required:true},
    maintenanceDate:{type:date, required:true},
    userID:{type:String,required:true},

},
{timestamps:true,});

const maintenanceLog = mongoose.model('maintenanceLog', maintenanceLogSchema);
module.exports = maintenanceLog;