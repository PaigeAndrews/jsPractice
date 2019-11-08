// There is a single operator in JavaScript, capable of providing the remainder 
// of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, 
// possibly zero. Return that value.

function remainder(x, y) {
	return (x % y)
}

// Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1 
}

// Create a function that takes a 
// number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return (num +1)
}

// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	return (arr[0])
}

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return((base * height) / 2)
}
// or

triArea = (base, height) =>{
	return base * height/2
}

// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60
}
// or

convert =(minutes) =>{
    return minutes * 60
}

// Write a function that takes two integers hours minutes and converts them to seconds.

convert = (hours, minutes) =>{
	return (((hours*60)*60)+ (minutes *60))
}

// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested for to have an equality matching.

function checkEquality(a, b) {
  return a === b
}

// Create a function that takes in three arguments (prob, prize, pay) 
// and returns true if prob * prize > pay; otherwise return false.
// Note: A profitable gamble is a game that yields a positive net profit, where net profit is calculated 
// in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
	 if ((prob * prize) > pay){
		 return true;
	 }else{ return false;}
}

// or

// Create a function that returns true if a string is empty and false otherwise.

const str = "hello";

function isEmpty(str) {
	if (str == ""){
		return true;
	}else return false;
}

// Write a function that returns the length of a string. Make your function recursive.

const str = "apple"
length = (str) => {
	return str.length
}

// Fix the code in code tab to pass this challenge (only syntax errors). 
// function squaed(b) {
// 	return $a*$a;
// }
function squared(b) {
	return b**2
}
// or
squared = (b) =>{ return b**2}






