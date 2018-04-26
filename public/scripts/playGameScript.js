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
    firebase.database().ref().child('Questions').once('value', function (snap) { 
        Object.keys(snap.val()).forEach(function(body) {
            emptyQuestions.push(snap.val()[body]);
        });

        // Get a random story
        var numQuestions = emptyQuestions.length;
        var questionIndex = Math.floor(Math.random() * numQuestions);
        // Get the variables necessary for the program
        question = emptyQuestions[questionIndex].body;
        numYes = emptyQuestions[questionIndex].yes;
        numNo = emptyQuestions[questionIndex].no;
        // Get the base page set up
    });
}


clickTheButton.addEventListener("click", function() {
  console.log(question);
  console.log(numYes);
  console.log(numNo);
  //window.location.href= "createQuestion.html";
});

dontClickTheButton.addEventListener("click", function() {
  
});


