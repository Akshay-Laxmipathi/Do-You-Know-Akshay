var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Akshay?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
    console.log("-------------");
}

var questions = [{
  question: "Where does Akshay live? ",
  answer: "bangalore"
}, {
  question: "Who is Akshay's favourite superhero? ",
  answer: "iron man"
}, {
  question: "What is Akshay's favourite colour? ",
  answer: "blue"
}, {
  question: "What is Akshay's favourite dish? ",
  answer: "pav bhaji"
}, {
  question: "What is Akshay's favourite sweet? ",
  answer: "gulab jamun"
}]

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You SCORED: ", score);