// Imports
var express = require('express');

// Servers
var app = express();
// Init servers
app.use(express.static('build'));
app.listen(80);
