const createQuestionButton = document.getElementById("createQuestion");
const inputQuestion = document.getElementById("inputQuestion");
//const questionDatabase = firebase.database().ref().child('Questions');
const inputUser = document.getElementById("inputUser");
const toIndexButton = document.getElementById("backToIndex");
createQuestionButton.addEventListener("click", function() {
  console.log("create a question");
  addQuestion(inputQuestion.value, inputUser.value);
  //window.location.href= "index.html";
});
toIndexButton.addEventListener("click", function() {
  console.log("going back to index");
  window.location.href= "index.html";  
});

function addQuestion(question, user){
  console.log("The question is! " + question);
  //console.log(questionID);
  console.log(question);
  var rootRef = firebase.database().ref();
  var questionRef = rootRef.child('Questions');
  var newQuestionRef = questionRef.push();
  var numRef = rootRef.child('NumQuestions');
  var numWhatever = firebase.database().ref('NumQuestions');
  console.log(numWhatever);
  newQuestionRef.set({
    "body": question,
    "user": user,
    "yes" : 0,
    "no"  : 0
  });
  console.log("After pushing new question");
  /*
  firebase.database().ref().child('Questions').child(questionID).set({
    "body": question,
    "yes": 0,
    "no": 0
  });*/

}
