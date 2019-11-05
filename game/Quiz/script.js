// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// (function() {
//   function buildQuiz() {
//     // we'll need a place to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // we'll want to store the list of answer choices
//       const answers = [];

//       // and for each available answer...
//       for (letter in currentQuestion.answers) {
//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//       );
//     });

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join("");
//   }

//   function showResults() {
//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll(".answers");

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if (userAnswer === currentQuestion.correctAnswer) {
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = "lightgreen";
//       } else {
//         // if answer is wrong or blank
//         // color the answers red
//         answerContainers[questionNumber].style.color = "red";
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   const quizContainer = document.getElementById("quiz");
//   const resultsContainer = document.getElementById("results");
//   const submitButton = document.getElementById("submit");
//   const myQuestions = [
//     {
//       question: "Who is the strongest?",
//       answers: {
//         a: "Superman",
//         b: "The Terminator",
//         c: "Waluigi, obviously"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "What is the best site ever created?",
//       answers: {
//         a: "SitePoint",
//         b: "Simple Steps Code",
//         c: "Trick question; they're both the best"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Where is Waldo really?",
//       answers: {
//         a: "Antarctica",
//         b: "Exploring the Pacific Ocean",
//         c: "Sitting in a tree",
//         d: "Minding his own business, so stop asking"
//       },
//       correctAnswer: "d"
//     }
//   ];

//   // display quiz right away
//   buildQuiz();

//   // on submit, show results
//   submitButton.addEventListener("click", showResults);
// })();




const quizQuestions = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const buttons = document.getElementById('button');
// const buttons2 = document.getElementsByClassName('button');


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
    buttons.innerHTML += "<button>" + question1.answers[i] + "</button>"
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


