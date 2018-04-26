var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var sqlite3 = require('sqlite3').verbose();
var firebase = require('firebase');
//var database = new Firebase("https://game-plan-4263.firebaseio.com");
//var db = new sqlite3(':memory:');
//var database = require('sqlite3.js');
//var db = openDatabase('mydb', '4.0.0', 'my first database', 2 * 1024 * 1024);
//create connection to database
//if the database is NOT found, create one
//var db = new sqlite3.Database('Game-Plan users');
/*db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS user (username TEXT, password TEXT, level INT)");

});*/
//var db = new firebase
//db.serialize(function() {
//    db.run("CREATE TABLE IF NOT EXISTS user (username TEXT, password TEXT, level INT)");
//});
/*
function createDb(){
    console.log("creating Database

}*/
app.get('/', function(req, res){
    res.send('');
});
/*app.get('/createnewuser', function(req,res){
    res.send('<h1>Create New User Menu<h1>');
});
app.get('/play', function(req,res){
    res.send('<h1>Play game<h1>');
});*/

/*http.listen(6969, function() {
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    console.log("We've got a visitor!");
});
app.get('/createnewuser', function(req,res){
    res.sendFile(__dirname + '/createAccount.html');
//    res.send('<form action="/action_page.php">');
//        res.send('First name: <input type="text" name="fname"><br>');
//        res.send('Last name: <input type="text" name="lname"><br>');
//        res.send('<input type="submit" value = "Submit">');
//    res.send('</form>');
    console.log("Entering create a new user!");
});
app.get('/play', function(req,res){
    res.send('<h1>Play game<h1>');
    console.log("Someone wants to start a game");
});
http.listen(6969, function() {
    console.log('listening on *:6969');
})*/

