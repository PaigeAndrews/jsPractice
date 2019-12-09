// player_score = 0;
// computer_score = 0;
// round_score = 0;
// die = null;
// turn = "player";
// roll_again = null;

// function player_turn(){
//     round_score = 0
//     roll_again = prompt("Roll?")
    
//     while (roll_again == "yes"){

     
//         die = (Math.floor(Math.random() * 6) + 1 )
//         console.log(`The player rolled a ${die}`)
    
//         if (die != 1){
//             round_score += die

//             if (player_score + round_score >= 100){
//             alert("You win!")
//             break
//            }

//             console.log("Player round score: " + round_score);
//             roll_again = prompt("Roll again?")
//         } else {
//             console.log("Player turn over")
//             roll_again = "no"
//             round_score = 0
//         }

        
//     }
     
//     player_score += round_score
//     console.log(player_score + "player score");
//     console.log(round_score + "player round score");
//     turn = "computer"
        
// };


// function computer_turn(){
//     round_score = 0
//     turn = "computer"
//     roll_again = "yes"

//     while (roll_again == "yes"){

       
//         die = (Math.floor(Math.random() * 6) + 1 )
//         console.log(die + " computer die roll")
    
//         if (die != 1){
//             round_score += die
//             if (computer_score + round_score >= 100){
//             alert("You lose!")
//             break
//             }
//         } else {
//             round_score = 0
//             roll_again = "no"
//         }

//         if (round_score > 14){
//             if (computer_score + round_score >= 100){
//             alert("You lose!")
//             }
//             console.log(computer_score + "computer score");
//             console.log(round_score + "computer round score");
//             roll_again = "no"
//         } 

//     }
//     computer_score += round_score
//     console.log(computer_score + "computer score");
//     console.log(round_score + "computer round score"); 
//     turn = "player"

// };

// while (computer_score  < 100 && player_score < 100){
//     if (turn == "player"){
//         player_turn()
//     } else {
//         computer_turn()
//     }
// };

// console.log("The end.")

