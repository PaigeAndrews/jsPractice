let wordList = `Afraid
Apparition
Bat
Bloodcurdling
Bloody
Bones
Broomstick
Cackle
Cadaver
Carved
Casket
Cauldron
Cemetery
Cobweb
Coffin
Corpse
Creepy
Decapitated
Decomposing
Eerie
Fangs
Frightening
Ghost
Ghoulish
Goblin
Gory
Grim Reaper
Gruesome
Haunted
Horrifying
Howling
Lantern
Lurking
Macabre
Magic
Mausoleum
Morbid
Mummy
Occult
Owl
Petrified
Phantom
Poltergeist
Scary
Scream
Shadow
Skeleton
Skull
Specter
Spell
Spider
Spirit
Superstition
Tomb
Trick
Undead
Unearthly
Unnerving
Vampire
Warlock
Werewolf
Witch
Wizard
Wraith
Zombie`.toLowerCase()

let difficulty
let randomWord

let easyList = []
let mediumList = []
let hardList = []
let indexesOfMyWord = []
let usedLetters = []
wordList = wordList.split("\n")
let inputField = document.querySelector(".inputField")
let instructions = document.querySelector(".instructions")
let underscores = document.querySelector(".underscores")




for (word of wordList){
  if(word.length <= 4){
    easyList.push(word)
  } else if (word.length > 4 && word.length <= 6){
    mediumList.push(word)
  } else {
    hardList.push(word)
  }
}

// for(index of word){
//   indexesOfMyWord.push("_")
// }

function wordChooser(easyList, mediumList, hardList){
  difficulty = prompt("Easy, Medium, or Hard").toLowerCase()
  
  while(difficulty != "easy" && difficulty != "medium" && difficulty != "hard"){
    difficulty = prompt("Your choice must be Easy, Medium, or Hard").toLowerCase()
  }

  if(difficulty == "easy"){
    randomWord = easyList[Math.floor(Math.random() * easyList.length)]
  } else if (difficulty == "medium") {
    randomWord = mediumList[Math.floor(Math.random() * mediumList.length)]
  } else {
    randomWord = hardList[Math.floor(Math.random() * hardList.length)]
  }
  
  randomWord = randomWord.split("")
  activeWordFunction()
}


function activeWordFunction(){
  for(n=0; n < randomWord.length; n++) {
    indexesOfMyWord.push("_")
  } 
  
  underscores.innerHTML = indexesOfMyWord;
}

function replacingLetter(){
  for(i=0; i <= randomWord.length - 1; i++){
    
    if(randomWord[i] == inputField.value.toLowerCase()){
      indexesOfMyWord[i] = inputField.value
    }
  }

  underscores.innerHTML = indexesOfMyWord
  instructionsDisplay()
}

function instructionsDisplay(){
  if (randomWord.includes(inputField.value)){
    usedLetters.push(inputField.value)
    instructions.innerHTML = "You got one!";
    instructions.innerHTML = "You've used these letters: " + usedLetters;
  } else if (usedLetters.includes(inputField.value)){
     instructions.innerHTML ="You already guessed \"" + inputField.value + "\"!";
  } else {
    instructions.innerHTML = "Guess another letter!";
  }   
}

wordChooser(easyList, mediumList, hardList)


inputField.addEventListener("keydown",function(event){
  if(event.which == "13"){
    replacingLetter()

    inputField.value = ""
  }
  
})

console.log("underscores", indexesOfMyWord, "random word", randomWord)
