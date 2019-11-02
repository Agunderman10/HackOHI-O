// import express from node-modules
const express = require('express');

// import body-parser from node-modules
const bodyParser = require('body-parser');

// create express application
const app = express();

// make app use body parser for json
app.use(bodyParser.json());

// set port number
const port = 3000;

// set our router = to the routes.js file in the routes folder
const indexRouter = require('./routes/routes.js')

// make the app use the index router we set above
app.use('/', indexRouter);

// make app listen on the desired port number 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})