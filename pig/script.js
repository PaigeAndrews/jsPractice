player_score = 0
computer_score = 0
round_score = 0
die = 0
turn = "player"
roll_again = prompt("Roll the die?")

function game_round(){
	if (turn == "player"){
		let roll_again = "yes"
    }
		while (roll_again = "yes"){
			let die = (Math.floor(Math.random() * 6) + 1 )
	
			if (die != 1){
				 round_score += die
            }
			else{
				let round_score = 0
            }
            player_score += round_score
			roll_again = prompt("Roll again?")

            if (roll_again =="no"){
                let turn = "computer"
            }
        }
	if (turn == "computer"){
		let roll_again = "yes"
    }
		while (roll_again == "yes"){
			let die = (Math.floor(Math.random() * 6) + 1 )
        	

			if (die != 1){
				 round_score += die
            }
			else{
				let round_score = 0
            }
			if (round_score <= 15){
				let roll_again = "yes"
            }
			else{
				let roll_again = "no"
            }
        }
		 computer_score += round_score
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