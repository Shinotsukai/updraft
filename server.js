//imports

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

//Server connection

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || 8080;

//Body Parser middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

//connect to mongoDB

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established!");
})

//middleware

app.use(passport.initialize());
require('./backend/passport')(passport);


//routers

const droneinfoRouter = require('./backend/routes/droneinfo.route');
const userRouter = require('./backend/routes/user.route');
const batteryInfoRouter = require('./backend/routes/batteryinfo.route');
const flightLogRouter = require('./backend/routes/flightlog.route');
const maintenanceRouter = require('./backend/routes/maintenance.route');

app.use('/api/Fleet/ManageDrone', droneinfoRouter);
app.use('/api/Fleet/ManageBattery', batteryInfoRouter);
app.use('/api/Logging/FlightLog', flightLogRouter);
app.use('/api/Logging/MaintenanceLog', maintenanceRouter);

app.use('/api/users', userRouter)



//Check server is running

app.get('/ping', function (req, res) {
    return res.send('pong');
   });
   
   app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
