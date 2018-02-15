/**
 * Created by ikhlasfirlana on 2/15/18.
 */
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set port
var port = process.env.PORT || 80;

// Route
var index = require('./route/index');
index.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);

app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!')
});