player_score = 0;
computer_score = 0;
round_score = 0;
die = null;
turn = "player";
roll_again = prompt("Roll?");

function game_round(){
   
	if (turn == "player"){
	     roll_again
    }
		while (roll_again == "yes"){
			 die = (Math.floor(Math.random() * 6) + 1 )
            console.log(die + " player die roll");
        
			if (die != 1){
                 round_score += die
                 console.log(round_score + "round score");
                 roll_again = prompt("Roll again?")
            }
			if (die == 1){
			    round_score = 0
                turn = "computer"
                { break; }
            }
            if (roll_again =="no"){
                player_score += round_score
                console.log(player_score + "player score");
                console.log(round_score + "round score");
                round_score = 0
                turn = "computer"
            }
        }
            // player_score += round_score
            // console.log(player_score + "player score");
            // console.log(round_score + "round score");
			// roll_again = prompt("Roll again?")

       

	if (turn == "computer"){
        
		 roll_again = "yes"
    }
		while (roll_again == "yes"){
			 die = (Math.floor(Math.random() * 6) + 1 )
        	console.log(die + " computer die roll")
        
			if (die != 1){
				 round_score += die
            }
			if (die == 1){
				 round_score = 0
                 turn = "player"
                 { break; }
            }
			if(round_score <= 13){
				 roll_again = "yes"
            }
            else{
                computer_score += round_score
                console.log(computer_score + "computer score");
             console.log(round_score + "round score");
                roll_again = "no"
                turn = "player"
           }
        }
           
           
             
};
// game_round()
while (computer_score  < 100 || player_score < 100){
	game_round()
};

if (computer_score >= 100 || player_score >= 100){
    end_game()
};

function end_game(){
    if (player_score >= 100){
        alert("You win!")
    }
    if (computer_score >= 100){
        alert("You lose!")
    }
};