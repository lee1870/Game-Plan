const clickTheButton = document.getElementById("clickButton");
const dontClickTheButton = document.getElementById("dontClickButton");
const newQuestion = document.getElementById("newQuestion");
//const postComment = document.getElementById("postComment");
//const commentField = document.getElementById("inputComment");
//const goToPlayGameButton = document.getElementById("goToPlayGameButton");
var question;
var numYes;
var numNo;
readFromDB();

function readFromDB() {
    // Read in the questions in the database
    var emptyQuestions = [];
    var emptyKeys = [];
    firebase.database().ref().child('Questions').once('value', function (snap) { 
        Object.keys(snap.val()).forEach(function(body) {
            emptyQuestions.push(snap.val()[body]);
            console.log(snap.val());
        });

        // Get a random story
        var numQuestions = emptyQuestions.length;
        var questionIndex = Math.floor(Math.random() * numQuestions);
        // Get the variables necessary for the program
        question = emptyQuestions[questionIndex].body;
        numYes = emptyQuestions[questionIndex].yes;
        numNo = emptyQuestions[questionIndex].no;

        localStorage.setItem("numNo", numNo);
        localStorage.setItem("numYes",numYes);
        // Get the base page set up
    });
}


clickTheButton.addEventListener("click", function() {
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
  numYes = numYes + 1;
  window.location.href= "index.html";
});

dontClickTheButton.addEventListener("click", function() {
  numNo = numNo + 1;
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
});

newQuestion.addEventListener("click", function() {
  readFromDB();
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
  //re render the page
});
