const createQuestionButton = document.getElementById("createQuestion");
const inputQuestion = document.getElementById("inputQuestion");
//const questionDatabase = firebase.database().ref().child('Questions');

createQuestionButton.addEventListener("click", function() {
  console.log("create a question");
  addQuestion(inputQuestion.value);
  //window.location.href= "index.html";
});


function addQuestion(question){
  console.log("The question is! " + question);
  //console.log(questionID);
  console.log(question);
  var rootRef = firebase.database().ref();
  var questionRef = rootRef.child('Questions');
  var newQuestionRef = questionRef.push();
  newQuestionRef.set({
    "body": question,
    "yes" : "0",
    "no"  : "0"
  });
  console.log("After pushing new question");
  /*
  firebase.database().ref().child('Questions').child(questionID).set({
    "body": question,
    "yes": 0,
    "no": 0
  });*/

}
