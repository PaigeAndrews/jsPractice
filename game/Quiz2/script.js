 
function check(){

	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
	let question5 = document.quiz.question5.value;
	let question6 = document.quiz.question6.value;
	let question7 = document.quiz.question7.value;
	let question8 = document.quiz.question8.value;
	let correct = 0;


	if (question1 == "Maria" || question1 == "maria") {
		correct++;
}
	if (question2 == "Levi") {
		correct++;
}	
	if (question3 == "Sasha") {
		correct++;
}
    if (question4 == "Rod Reiss") {
		correct++;
	}

	if (question5 == "c") {
		correct++;
	}

	if(question6 == "a"){
		correct++;
	}

	if(question7 == "b"){
		correct++;
	}

	if(question8 == "b"){
		correct++;
	}
	
	let pictures = ["https://pbs.twimg.com/media/C7eHxsZU8AImIxQ.jpg", "https://media1.tenor.com/images/8761b6f3456bf50d2c7d52d08ae86eeb/tenor.gif?itemid=9411057", "https://vignette.wikia.nocookie.net/shingekinokyojin/images/6/67/Miche%27s_death.png/revision/latest?cb=20170917105509"];
	let messages = ["Great job!", "That's just okay", "You really need to do better"];
	let score;

	if (correct == 0) {
		score = 2;
	}else if (correct > 0 && correct < 8) {
		score = 1;
	}else if (correct == 8) {
		score = 0;
	}

	//Get the button:
myButton = document.getElementById("button");

// When the user clicks on the button, scroll to the top of the document
myButton.onclick = function() {
 topFunction();
};
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = `You got ${correct} correct.`
	document.getElementById("picture").src = pictures[score];
	}
	
//    let submitButton = document.getElementById("button");
//  submitButton.addEventListener("click", check);     
   