let database = [
    {
        username: "conny",
        password: "supersecret"
    },
    {
        username:"Eren",
        password: "mikasalovesme"
    },
    {
        username:"Hange",
        password: "titans4lyfe"
    }
    
];

let newsFeed = [
    {
        username: "Sasha",
        timeline: "I wish I had a potato!"
    },
    {
        username: "Mikasa",
        timeline: "Is Eren alright?"
    }
];

function isUserValid(username, password){
for (var i=0; i < database.length; i++) {
    if (database[i].username && password === database[i].password){
       return true;
    }
    }
    return false;
}

function signIn(username, password){
     if (isUserValid(username, password)){
        console.log(newsFeed);
    } else{
        alert ("Sorry, wrong username or password!");
    }
}

let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");




signIn(userNamePrompt, passwordPrompt);