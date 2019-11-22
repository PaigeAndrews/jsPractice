player_score = 0;
computer_score = 0;
round_score = 0;
die = null;
turn = "player";
roll_again = prompt("Roll?");

function player_turn(){
    round_score = 0
    roll_again = "yes"
    
		while (roll_again == "yes"){
			die = (Math.floor(Math.random() * 6) + 1 )
            console.log(`The player rolled a ${die}`)
        
			if (die != 1){
                round_score += die
                console.log("Player round score: " + round_score);
                roll_again = prompt("Roll again?")
            } else {
                console.log("Player turn over")
                roll_again = "no"
		        round_score = 0
                
            }
        }
        player_score += round_score
        console.log(player_score + "player score");
        console.log(round_score + "player round score");

    if(roll_again == "no"){
        if (player_score >= 100){
            alert("You win!")
        }
        else if (computer_score >= 100){
        alert("You lose!")
        } else{
            computer_turn()
        }
    }
    
        
};


function computer_turn(){
    round_score = 0
    turn = "computer"
    roll_again = "yes"

		while (roll_again == "yes"){
			die = (Math.floor(Math.random() * 6) + 1 )
        	console.log(die + " computer die roll")
        
			if (die != 1){
				round_score += die
            } else {
				round_score = 0
                roll_again = "no"
            }

            if (round_score > 14){
                computer_score += round_score
                console.log(computer_score + "computer score");
                console.log(round_score + "computer round score");
                roll_again = "no"
            } 
        }
        computer_score += round_score
        console.log(computer_score + "computer score");
        console.log(round_score + "computer round score"); 

    if(roll_again == "no"){
        if (player_score >= 100){
            alert("You win!")
        }
        else if (computer_score >= 100){
        alert("You lose!")
        } 
    }
        
};

// function end_game(){
//     if (player_score >= 100){
//         alert("You win!")
//     }
//     if (computer_score >= 100){
//         alert("You lose!")
//     }
// };


while (computer_score  < 100 || player_score < 100){
	player_turn()
};

// end_game()


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.player-0-panel,
.player-1-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
}



/**********************************************
*** PLAYERS
**********************************************/

.player-name {
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}

.player-score {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: #EB4D4D;
    margin-bottom: 130px;
}

.active { background-color: #f7f7f7; }
.active .player-name { font-weight: 300; }

.active .player-name::after {
    content: "\2022";
    font-size: 47px;
    position: absolute;
    color: #EB4D4D;
    top: -7px;
    right: 10px;
    
}

.player-current-box {
    background-color: #EB4D4D;
    color: #fff;
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 12px;
    color: #222;
}

.player-current-score {
    font-size: 30px;
}

button {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}

button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}

i {
    color: #EB4D4D;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.btn-new { top: 45px;}
.btn-roll { top: 403px;}
.btn-hold { top: 467px;}

.dice, .dice2 {
    position: absolute;
    height: 100px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
    top: 190px;
}
.dice {
   left: 35%;
}
.dice2 {
    left: 55%;
}

.winner { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #EB4D4D; }
.winningScore {
    position: absolute;
    top: 80px;
    left: 45%;
}