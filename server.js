var express = require('express');

//Create our app

var App = express();

App.use(express.static('public'));

App.listen(8080, function(){
    console.log('Express server is up on port 8080');
});