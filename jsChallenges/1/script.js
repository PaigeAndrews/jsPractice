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

// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
	return str.search(/a|e|i|o|u/i);
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and
//  cookies for Santa! Create a function that accepts a Date object and returns true
//   if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date
//    month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();
  
  if(day == 24 && month == 11) {
    return true
  } else {
    return false
  }
}

// Create a function that takes a number as an argument. Add up all the numbers from 1
//  to the number you passed to the function. For example, if the input is 4 then your function 
//  should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number){
  var sum = 0;
  for(var i = 1; i <= number; i++){
    sum += i;
  }
  return sum;
}

addUp(600);


// Create a function that returns true if two arrays contain identical values, and false otherwise.

var checkEquals = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

// Create a function that takes an array of items, removes all 
// duplicate items and returns a new array in the same sequential order as
//  the old array (minus duplicates)

function removeDups(arr) {
  return [...new Set(arr)];
}

// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
	return function() {
		return str;
	}
}

// Create a function that takes an array of numbers and return the first and last 
// elements as a new array.

function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}

// or
function firstLast(arr) {
	return [arr[0], arr.pop()]
}

// Create a function that takes an array of names and returns an array with the first 
// letter capitalized.

function strCapper(str){
  let newStr = "";
  newStr += str.charAt(0).toUpperCase() + str.slice(1)

  return newStr
};

function arrPasser(passedArray){
  let workingArray = []

  for (i=0; i< passedArray.length; i++){
    workingArray.push(strCapper(passedArray[i]))
  }

  return workingArray
}

console.log(arrPasser(['Samuel', 'Mabelle', 'Letitia', 'Meridith']))


// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
	let total = 0;
	for(let [R1, R2] of arr) {
		if (R1 === R2) {
			total = 0;
			break;
		}
		total += (R1 + R2);
	}
	return total;
}


// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
	if ((Math.min(...arr1) > Math.min(...arr2)) &&
	Math.max(...arr1) < Math.max(...arr2)){
		return true;
	}else{
		return false;
	}
}


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
	return str.split(' ').length;
}


// Create a function that takes an object and returns the keys and values as separate arrays.
function keysAndValues(obj) {
	return [Object.keys(obj),Object.values(obj)]
}

// Write a function that converts an object into an array, where each element represents a key-value pair.

function toArray(obj) {
	return Object.entries(obj)
}

// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr) {
	return arr.map(x => x * -1)
}

// Create a function that takes an array of students and returns an array of student names.

// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function getStudentNames(students) {
	return students.map( x => x.name)
}

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Examples
// Go(1) ➞ "-"

// Go(5) ➞ "-----"

// Go(3) ➞ "---"

function Go(num) {
	return "-".repeat(num)
}

// even odd numbers

for (var i = 0; i < 100; i++){
		if(i==0){
		continue;
	}
    // check that the number is even
    if (i % 2 == 0){
		 document.write(i + " is an even number.");
         continue;
    }
    // if we got here, then i is odd.
	document.write(i + " is an odd number.");
}

// Write a for loop that will iterate from 0 to 10. For each iteration of the for 
// loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (var i = 0; i < 10; i++){	
	let result = i * 8;
	document.write(`${i} * 8 = ${result} ,`)
	}

// Imagine a school that kids attend for 6 years. In each year, there are five groups 
// started, marked with the letters a, b, c, d, e. For the first year, the groups are 1a, 
// 1b, 1c, 1d, 1e and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.

// Write a function that returns the groups in the school by year (as a string), separated
//  with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".

function printAllGroups() {
	let arr=  ["a", "b", "c", "d", "e"]
	let arr2 = []
	for (i=1; i<7; i++){
		for(let letter of arr){
			arr2.push(`${i}${letter}`)
		}
	} 
	return arr2.join(", ")
}

// Create a function that reverses a boolean value and returns the string "boolean expected"
//  if another variable type is given.

function reverse(bool) {
	if (bool === true){
		return false
	} else if(bool ===false){
		return true
	} else{
		return "boolean expected"
	}
}

// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
	return arr.map(x => x * arr.length)
}
// or
function multiplyByLength(arr) {
	let multiply = arr.map(function(x)  {
    return x * arr.length
	})
		return multiply
}												 

