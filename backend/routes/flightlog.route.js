const router = require('express').Router();
let FlightLog = require('../models/flightlog.model')

//List All

router.route('/').post((req,res) => {
    const userID = req.body.id;
    FlightLog.find({userID})
    .populate('drone_id')
    .then(flightlogs => res.json(flightlogs))
    .catch(err => res.status(400).json('Error: '+err));
});

//Create

router.route('/add').post((req,res) => {
const drone_id = req.body.drone_id;
const flightDetails = req.body.flightDetails;
const flightTime = Number(req.body.flightTime);
const flightDate = Date.parse(req.body.flightDate);
const userID = req.body.userID;

const newFlightLog = new FlightLog ({
    drone_id,
    flightDetails,
    flightTime,
    flightDate,
    userID,
});

newFlightLog.save()
.then(() => res.json('Flight Log Added!'))
.catch(err => res.status(400).json('Error: '+err));

});

//List One

router.route('/:id').get((req,res) => {
    FlightLog.findById(req.params.id)
    .then(flightlog => res.json(flightlog))
    .catch(err => res.status(400).json('Error: '+err));
});

//Delete

router.route('/:id').delete((req,res) => {
    FlightLog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Flight Log Deleted!'))
    .catch(err => res.status(400).json('Error: '+err));
});

//Update

router.route('/update/:id').post((res,req) => {
    FlightLog.findById(req.params.id)
    .then(flightlog => {
        flightlog.drone_id = req.body.drone_id;
        flightlog.flightDetails = req.body.flightDetails;
        flightlog.flightTime = Number(req.body.flightTime);
        flightlog.flightDate = Date.parse(req.body.flightDate);

        flightlog.save()
        .then(() => res.json('Flight Log Updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;