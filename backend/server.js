//imports

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

require('dotenv').config();

//Server connection

const app = express();
const port = process.env.port || 5000;

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
require('./passport')(passport);


//routers

const droneinfoRouter = require('./routes/droneinfo.route');
const userRouter = require('./routes/user.route');

app.use('/Fleet/ManageDrone', droneinfoRouter);
app.use('/api/users', userRouter)


//Check server is running

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
