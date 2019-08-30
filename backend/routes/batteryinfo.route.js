const router = require('express').Router();
let BatteryInfo = require('../models/battery.model')

router.route('/').post((req,res) => {
    const userID = req.body.id;
    BatteryInfo.find({userID})
    .then(batteryinfos => res.json(batteryinfos))
    .catch(err => res.status(400).json('Error: '+ err));
});

//Create route

router.route('/add').post((req,res) => {
    const batteryName = req.body.batteryName;
    const batteryCapacity = req.body.batteryCapacity;
    const batteryCellCount = Number(req.body.batteryCellCount);
    const batteryNotes = req.body.batteryNotes;
    const userID = req.body.userID;

    const newBattery = new BatteryInfo({
        batteryName,
        batteryCapacity,
        batteryCellCount,
        batteryNotes,
        userID,
    });

    newBattery.save()
    .then(() => res.json('Battery Added'))
    .catch(err => res.status(400).json('Error: '+err));
});

//Find one

router.route('/:id').get((req,res) => {
    BatteryInfo.findById(req.params.id)
    .then(batteryinfo => res.json(batteryinfo))
    .catch(err => res.status(400).json('Error: '+err));
});

//Delete

router.route('/:id').delete((req,res) => {
    BatteryInfo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Battery Deleted!'))
    .catch(err => res.status(400).json('Error: '+err));
});


//Update

router.route('/update/:id').post((req,res) => {
    BatteryInfo.findById(req.params.id)
    .then(batteryinfo => {
        batteryinfo.batteryName = req.body.batteryName;
        batteryinfo.batteryCapacity = req.body.batteryCapacity;
        batteryinfo.batteryCellCount = Number(req.body.batteryCellCount);
        batteryinfo.batteryNotes = req.body.batteryNotes;
        batteryinfo.userID = req.body.userID;

        batteryinfo.save()
        .then(() => res.json('Battery Updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;