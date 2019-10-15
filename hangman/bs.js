let input = document.querySelector(".input")
let underscores = document.querySelector(".underscores")
let displayLettersUsed = document.querySelector(".displayLettersUsed")
let instructions = document.querySelector(".instructions")
let instructionsResponse = document.querySelector(".instructionsResponse")
//let submit = document.querySelector(".submit")

//let inputField = input.value

// instructions = "Easy medium or hard?";
// function field(){
//     console.log(input.value)
// }
// document.write("Easy medium or hard?");
// input.addEventListener('click', function(e){
//     //field()
//     e.preventDefault()
//     console.log(input.value);
//     }
// )


input.addEventListener('keyup', function (event) {
    //check to see if the enter key was pressed
    if (event.which === 13) {
      //if so, run the addTask function
      console.log(input.value);
      input.value = ""
    }
  });
// var width = window.innerWidth,
// height = window.innerHeight,
// c = document.getElementById('c'),
// ctx = c.getContext('2d');
// c.width = width;
// c.height = height;

// var paint = [];

// var totalPaints = width/50;
// var size = 20;

// function init(){
//     for (var i = 0; i < totalPaints; i++){
//         addPaint();
//     }
//     setInterval( update, 40 );
// }

// function drawPaint(x,y,size, colour) {
//     ctx.beginPath();
//     ctx.arc(x, y, size ,0 , Math.PI*2, true);
//     ctx.closePath();
// 	ctx.fillStyle=colour;
// 	ctx.fill();
// }

// function update(){
//     for (var i = 0; i < paint.length; i++){
//         paint[i].y = paint[i].y + paint[i].v;
//         if (paint[i].y > height + 60){
//             paint.splice(i,1);
//             addPaint();
//         }
//         drawPaint(paint[i].x, paint[i].y, paint[i].s, paint[i].c);
//     }
// }

// function addPaint(){
//     //Try 50 times
//     var i = 50;
//     while(i > 0){
//         size = Math.random() * size + 10;
//         x = Math.random() * width;

//         found = false;

//         //Dont Allow drips ontop of each other (Overtaking drops destroy the prettyness)
//         for (var j = 0; j < paint.length; j++){
//             if ((x + size > paint[j].x) && (x - size < paint[j].x + paint[j].s)){
//                 found = true;
//                 break;
//             }

//             if ((x - size < paint[j].x) && (x + size > paint[j].x - paint[j].s)){
//                 found = true;
//                 break;
//             }
//         }

//         if (found === false){
//             paint.push({s:size,
//                        x:x,
//                        y:-60,
//                        v:(Math.random() * 2) + 2,
//                        c:'#' + (Math.random() * 0x313131 + 0xaaaaaa | 0).toString(16)});
// 			i--;
//             return;
//         }
//     }
// }
// init();


let wordList = `able
about
account
acid
across
act
addition
adjustment
advertisement
after
again
against
agreement
air
all
almost
among
amount
amusement
and
angle
angry
animal
answer
ant
any
apparatus
apple
approval
arch
argument
arm
army
art
as
at
attack
attempt
attention
attraction
authority
automatic
awake
baby
back
bad
bag
balance
ball
band
base
basin
basket
bath
be
beautiful
because
bed
bee
before
behaviour
belief
bell
bent
berry
between
bird
birth
bit
bite
bitter
black
blade
blood
blow
blue
board
boat
body
boiling
bone
book
boot
bottle
box
boy
brain
brake
branch
brass
bread
breath
brick
bridge
bright
broken
brother
brown
brush
bucket
building
bulb
burn
burst
business
but
butter
button
by
cake
camera
canvas
card
care
carriage
cart
cat
cause
certain
chain
chalk
chance
change
cheap
cheese
chemical
chest
chief
chin
church
circle
clean
clear
clock
cloth
cloud
coal
coat
cold
collar
colour
comb
come
comfort
committee
common
company
comparison
competition
complete
complex
condition
connection
conscious
control
cook
copper
copy
cord
cork
cotton
cough
country
cover
cow
crack
credit
crime
cruel
crush
cry
cup
cup
current
curtain
curve
cushion
damage
danger
dark
daughter
day
dead
dear
death
debt
decision
deep
degree
delicate
dependent
design
desire
destruction
detail
development
different
digestion
direction
dirty
discovery
discussion
disease
disgust
distance
distribution
division
do
dog
door
doubt
down
drain
drawer
dress
drink
driving
drop
dry
dust
ear
early
earth
east
edge
education
effect
egg
elastic
electric
end
engine
enough
equal
error
even
event
ever
every
example
exchange
existence
expansion
experience
expert
eye
face
fact
fall
false
family
far
farm
fat
father
fear
feather
feeble
feeling
female
fertile
fiction
field
fight
finger
fire
first
fish
fixed
flag
flame
flat
flight
floor
flower
fly
fold
food
foolish
foot
for
force
fork
form
forward
fowl
frame
free
frequent
friend
from
front
fruit
full
future
garden
general
get
girl
give
glass
glove
go
goat
gold
good
government
grain
grass
great
green
grey
grip
group
growth
guide
gun
hair
hammer
hand
hanging
happy
harbour
hard
harmony
hat
hate
have
he
head
healthy
hear
hearing
heart
heat
help
high
history
hole
hollow
hook
hope
horn
horse
hospital
hour
house
how
humour
I
ice
idea
if
ill
important
impulse
in
increase
industry
ink
insect
instrument
insurance
interest
invention
iron
island
jelly
jewel
join
journey
judge
jump
keep
kettle
key
kick
kind
kiss
knee
knife
knot
knowledge
land
language
last
late
laugh
law
lead
leaf
learning
leather
left
leg
let
letter
level
library
lift
light
like
limit
line
linen
lip
liquid
list
little
living
lock
long
look
loose
loss
loud
love
low
machine
make
male
man
manager
map
mark
market
married
mass
match
material
may
meal
measure
meat
medical
meeting
memory
metal
middle
military
milk
mind
mine
minute
mist
mixed
money
monkey
month
moon
morning
mother
motion
mountain
mouth
move
much
muscle
music
nail
name
narrow
nation
natural
near
necessary
neck
need
needle
nerve
net
new
news
night
no
noise
normal
north
nose
not
note
now
number
nut
observation
of
off
offer
office
oil
old
on
only
open
operation
opinion
opposite
or
orange
order
organization
ornament
other
out
oven
over
owner
page
pain
paint
paper
parallel
parcel
part
past
paste
payment
peace
pen
pencil
person
physical
picture
pig
pin
pipe
place
plane
plant
plate
play
please
pleasure
plough
pocket
point
poison
polish
political
poor
porter
position
possible
pot
potato
powder
power
present
price
print
prison
private
probable
process
produce
profit
property
prose
protest
public
pull
pump
punishment
purpose
push
put
quality
question
quick
quiet
quite
rail
rain
range
rat
rate
ray
reaction
reading
ready
reason
receipt
record
red
regret
regular
relation
religion
representative
request
respect
responsible
rest
reward
rhythm
rice
right
ring
river
road
rod
roll
roof
room
root
rough
round
rub
rule
run
sad
safe
sail
salt
same
sand
say
scale
school
science
scissors
screw
sea
seat
second
secret
secretary
see
seed
seem
selection
self
send
sense
separate
serious
servant
sex
shade
shake
shame
sharp
sheep
shelf
ship
shirt
shock
shoe
short
shut
side
sign
silk
silver
simple
sister
size
skin
skirt
sky
sleep
slip
slope
slow
small
smash
smell
smile
smoke
smooth
snake
sneeze
snow
so
soap
society
sock
soft
solid
some
son
song
sort
sound
soup
south
space
spade
special
sponge
spoon
spring
square
stage
stamp
star
start
statement
station
steam
steel
stem
step
stick
sticky
stiff
still
stitch
stocking
stomach
stone
stop
store
story
straight
strange
street
stretch
strong
structure
substance
such
sudden
sugar
suggestion
summer
sun
support
surprise
sweet
swim
system
table
tail
take
talk
tall
taste
tax
teaching
tendency
test
than
that
the
then
theory
there
thick
thin
thing
this
thought
thread
throat
through
through
thumb
thunder
ticket
tight
till
time
tin
tired
to
toe
together
tomorrow
tongue
tooth
top
touch
town
trade
train
transport
tray
tree
trick
trouble
trousers
true
turn
twist
umbrella
under
unit
up
use
value
verse
very
vessel
view
violent
voice
waiting
walk
wall
war
warm
wash
waste
watch
water
wave
wax
way
weather
week
weight
well
west
wet
wheel
when
where
while
whip
whistle
white
who
why
wide
will
wind
window
wine
wing
winter
wire
wise
with
woman
wood
wool
word
work
worm
wound
writing
wrong
year
yellow
yes
yesterday
you
young
Bernhard
Breytenbach
Android`


wordList = wordList.split("\n")
let easyList = []
let mediumList = []
let hardList = []





//console.log(wordList)

for (word of wordList){
  if(word.length <= 4){
    easyList.push(word)
  } else if (word.length > 4 && word.length <= 6){
    mediumList.push(word)
  } else {
    hardList.push(word)
  }
}

let letterGuess = input.innerHTML
let response = instructionsResponse.value;

// let letterGuess = prompt("Guess a letter from the alphabet");
// let letterGuess 

let randomWord
activeWord = []
let usedLetters = [letterGuess];
let wrongLetters = [];
// input.value.innerHTML = letterGuess; 

 function wordChooser(easyList, mediumList, hardList){
    if (response === "easy" || response === "Easy"){
    randomWord = easyList[Math.floor(Math.random() * easyList.length)]
    return randomWord.length;
     for(n=0; n < randomWord.length; n++) {
      console.log(String(n).replace(String(n), '_'));
      console.log("_")
      activeWord.push("_")
     }
    } else if(response === "medium" || response === "Medium"){
    randomWord = mediumList[Math.floor(Math.random() * mediumList.length)]  
     for(n=0; n < randomWord.length; n++) {
       activeWord.push("_")
    }} else {
     randomWord = hardList[Math.floor(Math.random() * hardList.length)]
     for(n=0; n < randomWord.length; n++) {
        activeWord.push("_")
     }
  } 

    return randomWord
}

instructionsResponse.addEventListener('click', function (event) {
  if (event.which === 13){
    wordChooser(easyList, mediumList, hardList)
    console.log("eventTest")
  }

  console.log("Hiiii")
   if (event.which === 13) {  
       console.log(instructionsResponse.value);
      instructionsResponse.value = ""
    }
});
  
//     instructionsResponse.addEventListener('keyup', function (event) {
//     //check to see if the enter key was pressed
//     if (event.which === 13) {  
//        console.log(instructionsResponse.value);
//       instructionsResponse.value = ""
//     }
// });
  
   
randomWord = wordChooser(easyList, mediumList, hardList);



console.log(activeWord)
console.log(randomWord);

underscores.innerHTML = activeWord;

// if(randomWord.includes(letterGuess)){
//   console.log("True")
// } else{
//   console.log("False")
// }


 if (randomWord.includes(letterGuess)){
      usedLetters.push(letterGuess)
      console.log("You got one!");
      console.log("You've used these letters: " + usedLetters);
    else if (usedLetters.includes(letterGuess)){
     console.log("You already guessed \"" + letterGuess + "\"!");
      } else{
        console.log("Try again");
  }   
  
displayLettersUsed.innerHTML = lettersUsed;


// let myPrompt

while(wrongLetters.length <= 5){
  document.getElementByClass("instructions").innerHTML = "easy medium or hard";
   
    if(wrongLetters.length >=6){
      console.log( "Sorry! You lose! The word was " + randomWord)
 } 
}

let myArray = []



// while(myArray.length <= 4){
//   myPrompt = prompt("Type in a letter!")
//   myArray.push(myPrompt)

//   console.log(myPrompt, myArray)
// }


 myWord = randomWord.split("")
myList = []


for(index of myWord){
  myList.push("_")
}

for(i=0; i <= randomWord.length - 1; i++){
  console.log(myWord[i])
  if(myWord[i] == letterGuess){
    myList[i] = letterGuess
  }
}

console.log(myWord, myList)

 






// // if (randomWord.indexOf(letterGuess) != -1){ // if the character is found
// //   for (var i = 0; i < randomWord.length; i ++){ // loop on all characters
// //      if (randomWord[i] == letterGuess) // if this is an occurance
// //          console.log("True");
// //         }
// //       }else{
// //         console.log("false")
// //       } 
    

// comments = function () {
//   showLives.innerHTML = "You have " + lives + " lives";
//   if (lives < 1) {
//     showLives.innerHTML = "Game Over";
//   }
//   for (var i = 0; i < geusses.length; i++) {
//     if (counter + space === geusses.length) {
//       showLives.innerHTML = "You Win!";
//     }
//   }
// }
