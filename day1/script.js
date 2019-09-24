let num1 = Number(prompt("Enter your first number"));
let val = prompt(" Choose +, -, /, or * ");
let num2 = Number(prompt("Enter your second number"));

 
if(val == "+"){
    alert(num1 + num2)
}else if(val == "-"){
    alert(num1 - num2)
}else if(val == "/"){
    alert(num1 / num2)
}else if(val == "*"){
    alert(num1 * num2)
}else{console.log("You done goofed")}
