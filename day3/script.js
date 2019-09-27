let database = [
    {
        username: "conny",
        password: "supersecret"
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

let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    } else{
        alert ("Sorry, wrong username or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);