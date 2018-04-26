import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAR2FdadMlQgqJAzKJF0mHZGniMMBMS5Rk",
    authDomain: "game-plan-4263.firebaseapp.com",
    databaseURL: "https://game-plan-4263.firebaseio.com",
    projectId: "game-plan-4263",
    storageBucket: "game-plan-4263.appspot.com",
    messagingSenderId: "335501876781"
};
var fire = firebase.initializeApp(config);

var reference = firebase.database().ref().child("questions");
data = {
    "title": test,
    "id": 1,
}
reference.set(data);
export default fire;

