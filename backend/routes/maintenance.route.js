const router = require('express').Router();
let MaintenanceLog = require('../models/maintenancelog.model')

//List All

router.route('/').post((req,res) => {
    const userID = req.body.id;
    MaintenanceLog.find({userID})
    .populate('drone_id')
    .then(maintenancelogs => res.json(maintenancelogs))
    .catch(err => res.status(400).json('Error: '+err));
});

//Create

router.route('/add').post((req,res) => {
const drone_id = req.body.drone_id;
const maintenanceAction = req.body.maintenanceAction;
const maintenanceNotes = req.body.maintenanceNotes;
const maintenanceStatus = req.body.maintenanceStatus;
const maintenanceDate = Date.parse(req.body.maintenanceDate);
const userID = req.body.userID;

const newMaintenanceLog = new MaintenanceLog ({
    drone_id,
    maintenanceAction,
    maintenanceNotes,
    maintenanceStatus,
    maintenanceDate,
    userID,
});

newMaintenanceLog.save()
.then(() => res.json('Maintenance Log Added!'))
.catch(err => res.status(400).json('Error: '+err));

});

//List One

router.route('/:id').post((req,res) => {
    const userID = req.body.id;
    MaintenanceLog.find({userID})
    MaintenanceLog.findById(req.params.id)
    .populate('drone_id')
    .then(maintenancelog => res.json(maintenancelog))
    .catch(err => res.status(400).json('Error: '+err));
});

//Delete

router.route('/:id').delete((req,res) => {
    MaintenanceLog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Maintenance Log Deleted!'))
    .catch(err => res.status(400).json('Error: '+err));
});

//Update

router.route('/update/:id').post((req,res) => {
    MaintenanceLog.findById(req.params.id)
    .then(maintenancelog => {        
        maintenancelog.maintenanceAction = req.body.maintenanceAction;
        maintenancelog.maintenanceNotes = req.body.maintenanceNotes;
        maintenancelog.maintenanceStatus = req.body.maintenanceStatus;
        maintenancelog.maintenanceDate = Date.parse(req.body.maintenanceDate);

        maintenancelog.save()
        .then(() => res.json('Maintenance Log Updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;