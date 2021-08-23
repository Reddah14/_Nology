// Challenge
const firstName = "Homer";
const lastName = "Simpson";

console.log(firstName + lastName); // HomerSimpson
console.log(`Hello my name is ${firstName} ${lastName}.`);  // Hello my name is Homer Simpson.

let age = 30;
age += 11;
console.log(age); // 41

age -= 15; 
console.log(age); // 26

console.log(firstName + age); // Homer26


// EXTENSION
// typeof -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

console.log(typeof "anything"); // string
console.log(typeof ("2" * 10)); // undefined <- wrong | its number

console.log("hello" * 10); // NaN (not a number)

// BOOLEAN -> TRUE or FALSE

let validUser = true;
validUser = false;

// LOGICAL OPERATORS -> COMPARE VALUES -> BOOLEAN

age = "17";

// == -> EQUALITY -> NOT GOING TO CHECK THE TYPE

let validAge = age == 17; // BOOLEAN

console.log(validAge); // true

// === -> STRICT EQUALITY -> CHECK TYPE AS WELL

validAge = age === 17;

console.log(validAge); // false

// Logical operators

// ==​ Equal to (no data type check)
// ===​ Equal to and type equal
// ! bang operator -> negates comparison
// !=​ Not equal to (no data type check)
// >​ Greater than
// <​ Less than
// >=​ Greater than or equal to
// <= Less than or equal to 

// console.log(2 === 2);              -> true 
// console.log("disco" !== "shoes");  -> true
// console.log(4 < 2);                -> false
// console.log(10 > 2);               -> true
// console.log(72 >= 72);             -> true
// console.log(!true);                -> false
// console.log(45 == "45");           -> true
// console.log(1 != "1");             -> false
// console.log(2 > "12");             -> false


// ** IF YOU SELECT A LINE AND RUN IT, IT WILL ONLY RUN WHAT ITS BEEN SELECTED

// "!="  -> DONT CHECK TYPE
// "!==" -> ALSO CHECKS TYPE

//CHAIN COMPARISONS

// && -> LOGICAL AND -> ALL OF THE COMPARISONS NEED TO BE TRUE

console.log(2 === 2 && 18 > 10 && 2 * 4 == 8); // true
console.log(2 === 2 && 18 < 10); // false

// || -> LOGICAL OR -> ONE NEED TO BE TRUE

console.log(2 === 2 || 18 < 10); // true
console.log(2 === 1 || 18 < 10); // false

age = 9;

if (age > 18) {
  // code to do something -> if statement is true
  console.log("Hello from the if statement");
} else if (age > 10) {
  // if the IF is false && its condition is true
  console.log("Hello from the else if");
} else {
  // if all above are false
  console.log("Hello from the else");
}


// If a name, is a coaches name, log "It's a coach"

// If a greeting, is bonjour, log "comment ca va"

// If a score, reaches ten, log "you won the game" otherwise "you didn't win the game"

// If age, is greater than or equal to 65, log "Time to retire" otherwise "Get to work"

// If hasCovid OR isShielding, log "time to isolate", else log "Keep social distancing"

// If age, greater than 18, and isBritish, "You can vote in the next election"