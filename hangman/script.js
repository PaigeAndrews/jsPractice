let wordList = `Afraid
Apparition
Bat
Bloodcurdling
Bloody
Brew
Bone
Boo
Broomstick
Cackle
Cadaver
Carved
Casket
Cauldron
Cemetery
Cobweb
Coffin
Concoction
Corpse
Creepy
Dark
Death
Decapitated
Decomposing
Dracula
Dusk
Eerie
Fangs
Frankenstein
Frightening
Ghost
Ghoulish
Goblin
Gory
GrimReaper
Grotesque
Gruesome
Haunted
Headless
Horrifying
Howling
Imp
Infect
Lantern
Lurking
Lycanthrope
Macabre
Magic
Mausoleum
Maze
Morbid
Monster
Mummy
Occult
Ogre
Owl
Petrified
Phantom
Phenomenon
Poltergeist
Scar
Scary
Scream
Shadow
Skeleton
Skull
Specter
Spell
Spider
Spirit
Soul
Supernatural
Superstition
Tomb
Trick
Undead
Unearthly
Unnerving
Vampire
Voodoo
Warlock
Werewolf
Witch
Wizard
Wraith
Yelp
Zombie`.toLowerCase()

let difficulty
let randomWord
let wrongLetters = []
let easyList = []
let mediumList = []
let hardList = []
let indexesOfMyWord = []
let usedLetters = []
wordList = wordList.split("\n")
let inputField = document.querySelector(".inputField")
let instructions = document.querySelector(".instructions")
let underscores = document.querySelector(".underscores")
let hangman = document.querySelector(".hangman")
let lives = 6




for (word of wordList){
  if(word.length <= 4){
    easyList.push(word)
  } else if (word.length > 4 && word.length <= 6){
    mediumList.push(word)
  } else {
    hardList.push(word)
  }
}


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

  if (usedLetters.includes(inputField.value)){
    instructions.innerHTML ="You already guessed \"" + inputField.value + "\"!";
  }else if (inputField.value.length >=2){
    instructions.innerHTML = "Can't guess two or more letters at once"
  }
  else if (randomWord.includes(inputField.value)){
    usedLetters.push(inputField.value)
    instructions.innerHTML = `You got one! <br> Youve used these letters: ${usedLetters} ${wrongLetters}`;
  } else if (randomWord.includes != inputField.value ){
    wrongLetters.push(inputField.value)
    instructions.innerHTML = `Oops! This letter is not in the word <br> Guess another letter! <br> Youve used these letters: ${usedLetters} ${wrongLetters}`
    lives--
    
  }
  winLose()
}
   
function winLose(){
  
    if(indexesOfMyWord.includes("_") != true){
       inputField.style.display = "none"
       instructions.innerHTML = "You win! Congratulations!!"
       underscores.innerHTML = `${randomWord.join('')}`
    }else if(lives <= 0){
      instructions.innerHTML = `Sorry, you lose! The word was ${randomWord.join('')}`

      inputField.style.display = "none"
    }  
    
    hangman.innerHTML = `Lives: ${lives}`
}


wordChooser(easyList, mediumList, hardList)


inputField.addEventListener("keydown",function(event){
  if(event.which == "13"){
  
    replacingLetter()

    inputField.value = ""
  }
  
})

console.log("underscores", indexesOfMyWord, "random word", randomWord)








