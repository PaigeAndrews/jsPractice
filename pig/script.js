let playerTotalScoreDisplay = document.querySelector("#playerTotalScore")
let computerTotalScoreDisplay = document.querySelector("#computerTotalScore")
let playerRoundScoreDisplay = document.querySelector("#playerRoundScoreDisplay")
let computerRoundScoreDisplay = document.querySelector("#computerRoundScoreDisplay")
let playerDiceImage = document.querySelector("#playerDiceImage")
let computerDiceImage = document.querySelector("#computerDiceImage")
let rollButton = document.querySelector("#rollDie")
let holdButton = document.querySelector("#hold")
let playerIcon = document.querySelector("#playerIcon")
let computerIcon = document.querySelector("#computerIcon")

// the sites images: the main icon of robot and player and red eyes signifying whose turn is current
let mainPictures = ["images/human.png", "images/humanTWO.png", "images/robot-face-6-1074719.png",
"images/robot-face-6-1074719TWO.png"];

// the site images: each face of the die 
let dicePictures = ["images/die1.png", "images/2.png", "images/3.png",
"images/4.png", "images/5.png", "images/6.png"
];

// listening for a click on roll die button
rollButton.addEventListener("click", playerTurn);

// listening for a click of the hold your turn button that switches to the computers turn
holdButton.addEventListener("click", function(){
    playerScore += roundScore
    playerTotalScoreDisplay.innerHTML = playerScore
    playerRoundScoreDisplay.innerHTML = 0
    computerTurn()
});

playerScore = 0;
computerScore = 0;
roundScore = 0;
die = null;
turn = null;
rollAgain = null;


// Controls the logic when it is the player's turn
function playerTurn(){
    turn = "player"
    playerIcon.src = mainPictures[1]
    computerIcon.src = mainPictures[2]
    
    
        die = (Math.floor(Math.random() * 6) + 1 )
        playerDiceImage.src = dicePictures[die - 1]
        console.log(`The player rolled a ${die}`)

        if (die != 1){
            roundScore += die
            
            if (playerScore + roundScore >= 100){
                alert("You win!")
            }
            playerRoundScoreDisplay.innerHTML = roundScore  
            console.log("Player round score: " + roundScore);
        } else {
            roundScore = 0
            playerRoundScoreDisplay.innerHTML = roundScore
            console.log("Player turn over")
            computerTurn()            
        }

    console.log(playerScore + "player score");
    console.log(roundScore + "player round score");      
};


// Controls the logic when it is the player's turn
function computerTurn(){
    roundScore = 0
    turn = "computer"
    playerIcon.src = mainPictures[0]
    computerIcon.src = mainPictures[3]
    rollAgain = "yes"

    while (rollAgain == "yes"){

       
        die = (Math.floor(Math.random() * 6) + 1 )
        computerDiceImage.src = dicePictures[die - 1]
        console.log(die + " computer die roll")
    
        if (die != 1){
            roundScore += die
            computerRoundScoreDisplay.innerHTML = roundScore
            if (computerScore + roundScore >= 100){
                alert("You lose!")
                break
            }
        } else {
            roundScore = 0
            computerRoundScoreDisplay.innerHTML = roundScore
            rollAgain = "no"
        }

        if (roundScore > 14){
            if (computerScore + roundScore >= 100){
            alert("You lose!")
            }
           
            console.log(computerScore + "computer score");
            console.log(roundScore + "computer round score");
            rollAgain = "no"
        } 

    }
    computerScore += roundScore
    computerTotalScoreDisplay.innerHTML = computerScore
    roundScore = 0
    computerRoundScoreDisplay.innerHTML = roundScore
    console.log(computerScore + "computer score");
    console.log(roundScore + "computer round score"); 
    turn = "player"

};
