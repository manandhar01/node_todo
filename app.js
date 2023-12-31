var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// use body-parser
app.use(express.urlencoded({extended: false}));

// static files
app.use(express.static('./public'));

// fire controller
todoController(app);


// listen to port
app.listen(3000);
console.log('You are listening to port 3000');