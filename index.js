var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3(':memory:');
//var database = require('sqlite3.js');
//var db = openDatabase('mydb', '4.0.0', 'my first database', 2 * 1024 * 1024);
//create connection to database
//if the database is NOT found, create one
var db = new sqlite3.Database('Game-Plan users');
db.serialize(function() {
    db.run("CREATE TABLE user (username TEXT, password TEXT, level INT)");

});
/*
function createDb(){
    console.log("creating Database

}*/
app.get('/', function(req, res){
    res.send('<h1>Hello world<h1>');
});

http.listen(6969, function() {
    console.log('listening on *:6969');
})

