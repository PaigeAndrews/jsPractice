player_score = 0;
computer_score = 0;
round_score = 0;
die = null;
turn = "player";
roll_again = true;

function game_round(){
	if (turn == "player"){
	     roll_again = "yes"
    }
		while (roll_again = "yes"){
			 die = (Math.floor(Math.random() * 6) + 1 )
            console.log(die + " player die roll");
			if (die != 1){
				 round_score += die
            }
			else{
			    round_score = 0
            }
            player_score += round_score
            console.log(player_score + "player score");
            console.log(round_score + "round score");
			roll_again = prompt("Roll again?")

            if (roll_again =="no"){
                 turn = "computer"
            }
        }
	if (turn == "computer"){
		 roll_again = "yes"
    }
		while (roll_again == "yes"){
			 die = (Math.floor(Math.random() * 6) + 1 )
        	console.log(die + " computer die roll")

			if (die != 1){
				 round_score += die
            }
			else{
				 round_score = 0
            }
			if (round_score <= 15){
				 roll_again = "yes"
            }
			else{
				 roll_again = "no"
            }
        }
		 computer_score += round_score
          console.log(computer_score + "computer score");
            console.log(round_score + "round score");
};

while (computer_score  < 100 && player_score < 100){
	game_round()
};

while(computer_score == 100 || player_score == 100){
    end_game()
};

function endgame(){
    if (player_score == 100){
        alert("You win!")
    }
    if (computer_score == 100){
        alert("You lose!")
    }
};