"use strict";

var express = require('express');
var app = express();

//require and initialize db here

require('./config/middleware.js')(app, express); 

exports = module.exports = app;
