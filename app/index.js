const express = require('express');
const exphbs= require ('express-handlebars');
const app = express();
const pickOne = require('pick-one');
const motivations = require('motivations');

app.use(express.static('./app/public'));


app.engine('handlebars' , exphbs({
  defaultLayout: 'main', 
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');






app.get("/", function(request,response) {
	
	var motivation= pickOne(motivations);
	response.render('motivation', {motivation: motivation})
	// response.send(pickOne(motivations));
});

module.exports = app;