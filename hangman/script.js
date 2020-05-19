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
let playAgain = document.getElementById("playAgain")
let modal = document.getElementById("modal")
let easyGame = document.getElementById("easy")
let mediumGame = document.getElementById("medium")
let hardGame = document.getElementById("hard")
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

easyGame.addEventListener("click",function(){
  difficulty = "easy"
  modal.style.display = "none"
  wordChooser(easyList, mediumList, hardList)
})

mediumGame.addEventListener("click",function(){
  difficulty = "medium"
  modal.style.display = "none"
  wordChooser(easyList, mediumList, hardList)
})

hardGame.addEventListener("click",function(){
  difficulty = "hard"
  modal.style.display = "none"
  wordChooser(easyList, mediumList, hardList)
})

function wordChooser(easyList, mediumList, hardList){
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
      indexesOfMyWord[i] = inputField.value.toLowerCase()
    }
  }
  underscores.innerHTML = indexesOfMyWord
  instructionsDisplay()
}

function instructionsDisplay(){
  console.log(randomWord)
  if (usedLetters.includes(inputField.value.toLowerCase())){
    instructions.innerHTML ="You already guessed \"" + inputField.value + "\"!";
  }else if (inputField.value.length >=2){
    instructions.innerHTML = "Can't guess two or more letters at once"
  }else if (randomWord.includes(inputField.value.toLowerCase())){
    usedLetters.push(inputField.value.toLowerCase())
    instructions.innerHTML = `You got one! <br> Youve used these letters: ${usedLetters} ${wrongLetters}`;
  } else if (!inputField.value.match(/^[A-Za-z]+$/) ){
    console.log(inputField.value)
    instructions.innerHTML = "Please guess only letters"
  }else if (randomWord.includes != inputField.value.toLowerCase() ){
    wrongLetters.push(inputField.value.toLowerCase())
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
       playAgain.style.display = "inline-block"
    }else if(lives <= 0){
      instructions.innerHTML = `Sorry, you lose! The word was ${randomWord.join('')}`
      playAgain.style.display = "inline-block"
      inputField.style.display = "none"
    } 
    hangman.innerHTML = `Lives: ${lives}`
}


inputField.addEventListener("keydown",function(event){
  if(event.which == "13"){
    replacingLetter()
    inputField.value = ""
  }
})

playAgain.addEventListener("click",function(){
  location.reload();
    return false;
})









