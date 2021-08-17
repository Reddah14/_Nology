console.log('hola');

// VARIABLES

// let -> able to change
// const -> unable to change

// camelCasing / first word is lowercase -> every other word is capitalized

// name is case sensitive -> name NAME ( not the same)

// = -> assignment operator

let fullName = "Charlie Richardson";
console.log(fullName);

fullName = "Charlie Robin Richardson";
console.log(fullName);

// ALWAYS DECLARE VARIABLES AS CONSTANTS UNTIL YOU NEED TO CHANGE THEM

// Strings
// character or a body of text
// "" '' -> normal strings
// `` -> template strings -> special strings -> `${place js in here}`

const firstName = "Charlie";

const lastName = "Richardson";

fullName = firstName + " " + lastName; // concatenate normal strings

fullName = `${firstName} ${lastName}`; // using template strings

console.log(fullName);


// Numbers

let age = 30;

// MATH OPERATIONS
// () * / + -

console.log(age);
console.log(age / 2);

age = age + 1; // shorter syntax ^^ => age += 1;
// += -= / = *=

console.log(7 / 3);
console.log(Math.round(7 / 3)); 

