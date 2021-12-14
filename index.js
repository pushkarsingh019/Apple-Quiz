var readlineSync = require('readline-sync')

// Input
score = 0
userName = readlineSync.question("Give me your name\n");
console.log("Welcome! ",userName, "to DO YOU KNOW APPLE QUIZ")

// Data structures
var quizQuestions = [
  {
    question: "When was the company apple founded?",
    answer: "1976",
    hint: "One year after microsoft"
  },
  {
    question: "Who founded apple?",
    answer: "Steve Jobs",
    hint: "Comeone, you should know this?"
  }, 
  {
    question: "What is the fullform of mac?",
    answer: "macintosh",
    hint: "Ever heard about the macintosh?"
  },
  {
    question: "What does the i mean in i-phone?",
    answer: "Internet",
    hint: "What is your phone connected to?"
  }
]

var highScore = [
  {
    name: "Steve Jobs",
    score: 3
  },
  {
    name: "Steve Wozniak", 
    score: 3.5
  },
  {
    name: "Pushkar Singh",
    score: 3
  }
]

// Processing
function play(question, answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase == answer.toUpperCase){
    console.log("Right Answer");
    score ++;
  }
  else{
    console.log("Wrong Answer")
    console.log("The correct answer is -->", answer)
  }
  console.log("Your current score is", score)
  console.log(" - - - - - - - - - - - - - -")
}

function printHighScore(){
  console.log("\nHere are the previous high scores")
  for(var j = 0; j < highScore.length; j++){
  var name = highScore[j].name;
  var hscore = highScore[j].score;
  console.log(name, ": ", hscore)
}
}

function checkScore(score){
  for(var z = 0; z < highScore.length; z++){
    if(score > highScore[z].score){
      console.log("You scored the highest uptil this point\n Ping me, Ill update the list :))")
      break;
    }
    else{
      printHighScore()
      break;
    }
  }
}

// output

for (var i = 0; i < quizQuestions.length; i++){
  nowQuestion = quizQuestions[i].question;
  nowAnswer = quizQuestions[i].answer;

  play(nowQuestion, nowAnswer)
}

console.log("Here is your final score ", score)
checkScore(score)
