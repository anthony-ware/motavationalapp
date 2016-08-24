var express = require('express');
var app = express();
var pickOne = require('pick-one');


var motivations = require('motivations');

app.get("/", function(request,response) {
	response.send(pickOne(motivations));
	
});

module.exports = app;