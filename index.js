var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var sqlite3 = require('sqlite3').verbose();
var firebase = require('firebase');
var database = new Firebase("https://game-plan-4263.firebaseio.com");
//var db = new sqlite3(':memory:');
//var database = require('sqlite3.js');
//var db = openDatabase('mydb', '4.0.0', 'my first database', 2 * 1024 * 1024);
//create connection to database
//if the database is NOT found, create one
//var db = new sqlite3.Database('Game-Plan users');
/*db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS user (username TEXT, password TEXT, level INT)");

});*/
/*
function createDb(){
    console.log("creating Database

}*/
/*app.get('/', function(req, res){
    res.send('');
});*/
/*app.get('/createnewuser', function(req,res){
    res.send('<h1>Create New User Menu<h1>');
});
app.get('/play', function(req,res){
    res.send('<h1>Play game<h1>');
});*/

/*http.listen(6969, function() {
    console.log('listening on *:6969');
})*/


var ref = firebase.database().ref();
ref.on("value", function(snapshot){
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});

