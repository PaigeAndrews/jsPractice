let playerTotalScoreDisplay = document.querySelector("#playerTotalScore")
let computerTotalScoreDisplay = document.querySelector("#computerTotalScore")
let playerRoundScoreDisplay = document.querySelector("#playerRoundScoreDisplay")
let computerRoundScoreDisplay = document.querySelector("#computerRoundScoreDisplay")
let rollButton = document.querySelector("#rollDie")
let holdButton = document.querySelector("#hold")


let mainPictures = ["D:\Pictures\1-\human.png", "D:\Pictures\1-\humanTWO.png", "D:\Pictures\1-\robot-face-6-1074719.png",
"D:\Pictures\1-\robot-face-6-1074719TWO.png"];

let dicePictures =["D:\Pictures\1-\die1.png", "D:\Pictures\1-\2.png", "D:\Pictures\1-\3.png",
"D:\Pictures\1-\4.png", "D:\Pictures\1-\5.png", "D:\Pictures\1-\6.png"
];

roll_btn.addEventListener("click", playerTurn);


// playerScore = 0;
// computerScore = 0;
// roundScore = 0;
// die = null;
// turn = "player";
// rollAgain = null;

// function playerTurn(){
//     roundScore = 0
//     rollAgain = prompt("Roll?")
    
//     while (rollAgain == "yes"){

     
//         die = (Math.floor(Math.random() * 6) + 1 )
//         console.log(`The player rolled a ${die}`)

//         if (die != 1){
//             roundScore += die

//             if (playerScore + roundScore >= 100){
//             alert("You win!")
//             break
//            }
//            playerScore.innerHTML = playerScore    
//             console.log("Player round score: " + roundScore);
//             rollAgain = prompt("Roll again?")
//         } else {
//             console.log("Player turn over")
//             rollAgain = "no"
//             roundScore = 0
//         }

        
//     }
     
//     playerScore += roundScore
//     console.log(playerScore + "player score");
//     console.log(roundScore + "player round score");
//     turn = "computer"
        
// };


// function computerTurn(){
//     roundScore = 0
//     turn = "computer"
//     rollAgain = "yes"

//     while (rollAgain == "yes"){

       
//         die = (Math.floor(Math.random() * 6) + 1 )
//         console.log(die + " computer die roll")
    
//         if (die != 1){
//             roundScore += die
//             if (computerScore + roundScore >= 100){
//             alert("You lose!")
//             break
//             }
//         } else {
//             roundScore = 0
//             rollAgain = "no"
//         }

//         if (roundScore > 14){
//             if (computerScore + roundScore >= 100){
//             alert("You lose!")
//             }
//             console.log(computerScore + "computer score");
//             console.log(roundScore + "computer round score");
//             rollAgain = "no"
//         } 

//     }
//     computerScore += roundScore
//     console.log(computerScore + "computer score");
//     console.log(roundScore + "computer round score"); 
//     turn = "player"

// };

// while (computerScore  < 100 && playerScore < 100){
//     if (turn == "player"){
//         playerTurn()
//     } else {
//         computerTurn()
//     }
// };

// console.log("The end.")

