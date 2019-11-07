

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
	
	let pictures = ["https://pbs.twimg.com/media/C7eHxsZU8AImIxQ.jpg", "https://media1.tenor.com/images/8761b6f3456bf50d2c7d52d08ae86eeb/tenor.gif?itemid=9411057", "https://media.giphy.com/media/xUPGcHGUU3d1kYENLq/giphy.gif", "https://media.giphy.com/media/gvRcXbKhO8fBe/giphy.gif"];
	let messages = ["Great job! You know it all!", "That's just.. okay", "You really need to do better.", "Good Job!! But there's room for improvement."];
	let score;

	if (correct == 0) {
		score = 2;
	}else if (correct > 0 && correct < 5) {
		score = 1;
	}else if (correct == 8) {
		score = 0;
	}else if (correct == 5 && correct <8){
		score = 3;
	}

	document.getElementById("after_btn").style.visibility = "visible";
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = `You got ${correct} correct.`
	document.getElementById("picture").src = pictures[score];
	


}

  function scrollToTop() { 
	window.location.reload();
     window.scrollTo(0, 0); 
        } 	
  
  