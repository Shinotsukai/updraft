//includes
const router = require('express').Router();
let DroneInfo = require('../models/drone.model');

//creating routes

//list all route
router.route('/').post((req,res) => {
    const userID = req.body.id;
    DroneInfo.find({userID})
    .then(droneinfos => res.json(droneinfos))
    .catch(err => res.status(400).json('Error: '+err));
});


//Add new route

router.route('/add').post((req, res) => {
    const droneMake = req.body.droneMake;
    const droneModel = req.body.droneModel;
    const droneMTOW = req.body.droneMTOW;
    const droneSize = Number(req.body.droneSize);
    const droneMotorType = req.body.droneMotorType;
    const droneMotorNumber = Number(req.body.droneMotorNumber);
    const droneEngineSize = Number(req.body.droneEngineSize);
    const dronePower = req.body.dronePower;
    const droneProp = Number(req.body.droneProp);
    const droneFC = req.body.droneFC;
    const droneTX = req.body.droneTX;
    const droneRX = req.body.droneRX;
    const droneNotes = req.body.droneNotes;
    const userID = req.body.userID;

    const newDrone = new DroneInfo ({
        droneMake,
        droneModel,
        droneMTOW,
        droneSize,
        droneMotorType,
        droneMotorNumber,
        droneEngineSize,
        dronePower,
        droneProp,
        droneFC,
        droneTX,
        droneRX,
        droneNotes,
        userID
    });

    newDrone.save()
    .then(() =>res.json('New drone added!'))
    .catch(err => res.status(400).json('Error: ' +err));

});

//Display single item

router.route('/:id').get((req,res) => {
    DroneInfo.findById(req.params.id)
    .then(droneinfo => res.json(droneinfo))
    .catch(err => res.status(400).json('Error: ' +err));
});

//Delete single item

router.route('/:id').delete((req,res) => {
    DroneInfo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Drone Deleted!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

//Update single item

router.route('/update/:id').post((req,res) => {
    DroneInfo.findById(req.params.id)
    .then(droneinfo => {
        droneinfo.droneMake = req.body.droneMake;
        droneinfo.droneModel = req.body.droneModel;
        droneinfo.droneMTOW = req.body.droneMTOW;
        droneinfo.droneSize = Number(req.body.droneSize);
        droneinfo.droneMotorType = req.body.droneMotorType;
        droneinfo.droneMotorNumber = Number(req.body.droneMotorNumber);
        droneinfo.droneEngineSize = Number(req.body.droneEngineSize);
        droneinfo.dronePower = req.body.dronePower;
        droneinfo.droneProp = Number(req.body.droneProp);
        droneinfo.droneFC = req.body.droneFC;
        droneinfo.droneTX = req.body.droneTX;
        droneinfo.droneRX = req.body.droneRX;
        droneinfo.droneNotes = req.body.droneNotes;
        droneinfo.userID = req.body.userID;

        droneinfo.save()
        .then(() => res.json('Drone Updated'))
        .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
});


//Exports

module.exports = router;

