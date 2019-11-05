const quizQuestions = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const buttons = document.getElementById('button');
const buttons2 = document.getElementsByClassName('buttons2');


let question1 = {
      question: "Who is the strongest fighter?",
      answers: ["Mikasa", "Conny", "Levi"],
      correctAnswer: "Levi"
};
     
    
const question2 = {
      question: "Who used to live out in the woods outside the walls?",
      answers: ["Kenny", "Christa", "Sasha"],
      correctAnswer: "Sasha"
};
      
const question3 = {
      question: "Who had the biggest titan form?",
      answers: ["Bertholt", "Reiner", "Rod Reiss"],
      correctAnswer: "Rod Reiss"
};                                            

function firstQ(){
  quizQuestions.innerHTML = question1.question

  for (var i = 0; i < question1.answers.length; i++) {
    buttons2.innerHTML = buttons + question1.answers[i] 
  } 
  
  if (buttons.addEventListener("click",value1)){
        
  }
 
  submitButton.addEventListener("click", secondQ);
};



function value1(){
  for (letter in question1.answers) {
    console.log(buttons.value)
}};

function secondQ(){
  
quizQuestions.innerHTML = question2.question
for (var i = 0; i < question2.answers.length; i++) {
    buttons.innerHTML += "<button>" + question2.answers[i] + "</button>";
    } 
 submitButton.addEventListener("click", thirdQ)
};

function thirdQ(){
  quizQuestions.innerHTML = question3.question
  for (var i = 0; i < question3.answers.length; i++) {
    buttons.innerHTML += "<button>" + question3.answers[i] + "</button>";
    } 
 submitButton.addEventListener("click", results)

};

function results(){
  buttons.innerHTML = ""
  submitButton.style.display= 'none';
  quizQuestions.innerHTML = " youre score is: "
  resultsContainer.innerHTML = " score "
};

firstQ();


