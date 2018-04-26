const clickTheButton = document.getElementById("clickButton");
const dontClickTheButton = document.getElementById("dontClickButton");
const createQuestion = document.getElementById("createQuestion");

//const postComment = document.getElementById("postComment");
//const commentField = document.getElementById("inputComment");
//const goToPlayGameButton = document.getElementById("goToPlayGameButton");
var question;
var questionID;
var numYes;
var numNo;
readFromDB();

function readFromDB() {
    // Read in the questions in the database
    var emptyQuestions = [];
    var emptyKeys = [];

    firebase.database().ref().child('Questions').once('value', function (snap) { 
        console.log(Object.keys(snap.val()));
        emptyKeys = Object.keys(snap.val());
        Object.keys(snap.val()).forEach(function(body) {
            emptyQuestions.push(snap.val()[body]);
            console.log(snap.val()[body]);
        });
        
        // Get a random story
        var numQuestions = emptyQuestions.length;
        var questionIndex = Math.floor(Math.random() * numQuestions);
        // Get the variables necessary for the program
        question = emptyQuestions[questionIndex].body;
        questionID = emptyKeys[questionIndex];
        numYes = emptyQuestions[questionIndex].yes;
        numNo = emptyQuestions[questionIndex].no;
        user = emptyQuestions[questionIndex].user;
        localStorage.setItem("numNo", numNo);
        localStorage.setItem("numYes",numYes);
        document.getElementById("displayQuestion").innerHTML = question;
        document.getElementById("displayName").innerHTML = user;
        // Get the base page set up
    });
}


clickTheButton.addEventListener("click", function() {
  numYes = numYes + 1;
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
  console.log("ID : " + questionID);
  localStorage.setItem("numYes", numYes);

  updateQuestion();
  
  setTimeout(function(){
    window.location.href= "results.html";
    //do what you need here
  }, 1000);

  //window.location.href= "results.html";
});

dontClickTheButton.addEventListener("click", function() {
  numNo = numNo + 1;
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
  console.log("ID : " + questionID);
  localStorage.setItem("numNo",numNo);

  updateQuestion();

  setTimeout(function(){
    window.location.href= "results.html";
    //do what you need here
  }, 1000);
  //window.location.href= "results.html";
});

createQuestion.addEventListener("click", function() {
//  readFromDB();
  console.log(question);
  console.log("NumYes: " + numYes);
  console.log("NumNo: " + numNo);
  console.log("ID : " + questionID);
  window.location.href= "askQuestion.html";
  //re render the page
});


function updateQuestion() {
  firebase.database().ref('Questions/' + questionID).set({
    "yes": numYes,
    "no": numNo,
    "body": question,
    "user": user
  });
}
