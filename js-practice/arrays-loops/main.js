// Arrays prevent us from writing multiple variables

const firstPet = "dog";
const secondPet = "cat";
const thirdPet = "rabbit";

console.log(firstPet, secondPet, thirdPet);

const petArr = ["dog", "cat", "rabbit"]; // naming convention use "petArr" and NOT petsArray

console.log(petArr);
console.table(petArr);

// ADDING TO THE END OF THE ARRAY
const newLength = petArr.push("guinea pig");

// REMOVE FROM THE END
const lastPet = petArr.pop();
console.log(lastPet);

// ADD TO THE BEGINNING
petArr.unshift("imaginary hippo");

// REMOVE FROM THE BEGINNING 
petArr.shift();



const person = {
  name: "max",
  lastName: "hola"
}

console.table(person);

// How JavaScript stores this data types ************

// Primitive land
let colour = "orange";
let favouriteColour = colour;

colour = "blue";

console.log(colour, favouriteColour); // blue orange

// Complex land
// Stores a reference to the data (not as the primitives)
const colourArr = ["orange", "blue", "red"];

const favouriteColourArr = colourArr;

colourArr.push("green");
colourArr.push("purple");

console.log(colourArr); // ["orange", "blue", "red", "green", "purple"]
console.log(favouriteColourArr); //  ["orange", "blue", "red", "green", "purple"]

// To make a copy of an array (shallow copy) [shallow -> poco profunda] :::> WILL COPY THE ARRAY NOT WHAT IS INSIDE

const colourCopy = [...colourArr]; // this way you will shallow copy the array, AND THEN when you change the original array, THE COPY WILL NOT BE AFFECTED

colourArr.push("turquoise");
console.log(colourCopy);
console.log(colourArr);

// Using arrays for IF statements
// Check if someone is a coach, console.log("its a coach!") if they are
// If not, log "Not a coach!"

const coachArr = ["matt", "charlie", "andy", "sam", "ash", "calum", "remy"];
let student = "jerome";

if (coachArr.includes(person)) { // Easier to read
  console.log("It's a coach");
} else {
  console.log("Not a coach!");
}

if (coachArr.indexOf(person) !== -1) { // This one is more efficient
console.log("It's a coach");
} else {
  console.log("Not a coach!");
}




/* MULTIDIMENSIONAL ARRAYS */


const multidimensionalArr = [
  [1, 2, 3],
  [4, 5, 6]
]

console.table(multidimensionalArr);

// in order to make a copy of this one you should loop first through the "outside" array AND THEN => use the spread operator(...) on the "inside" array