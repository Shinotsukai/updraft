//imports

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Server connection

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

//connect to mongoDB

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established!");
})


//routers

const droneinfoRouter = require('./routes/droneinfo.route');

app.use('/Fleet/ManageDrone', droneinfoRouter);


//Check server is running

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
