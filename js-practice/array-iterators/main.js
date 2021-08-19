const ages = [33, 12, 20, 16, 5, 54, 21, 44, 142];
const colors = ["red", "yellow", "pink", "green", "orange", "purple", "blue"];

for (let index = 0; index < ages.length; index++) {
  const age = ages[index];
  console.log(age);
}

        // FOREACH FUNCTION

ages.forEach((age, index, array) => { /* USE "_," if dont wanna use that parameter (this is the name convention) */
  console.log("index: ", index);
  console.log("age: ", age);
  console.log("array: ", array);
})

ages.forEach((age) => {
  console.log(`I am ${age} years old`);
})

//CHALLENGE - For each age in ages array, double the age and log a string using that doubled value

/* ages.forEach((age) => {
  const doubledAge = age * 2;
  console.log(`My doubled age is: ${doubledAge}`);
})
 */

        // MAP FUNCTION

// .map(callbackfn)
// Return a new array => Should use map() every time we have to copy an array without modifing the original array (it creates a new array - As forEach it DOESNT!)

const doubleAges = ages.map(age => {
  //because it creates a new array we have to return something
  return age * 2;
})

console.table(ages);
console.table(doubleAges);

const preferredColors = colors.map(color =>`I prefer DARK ${color.toUpperCase()}`);

console.table(preferredColors);

//CHALLENGE - put the square root of each age in the ages array into a new array

//const squareRootAgeArray = ages.map( age => age ** 0.5 ); <-- can also do square root like this
const squareRootAgeArray = ages.map( age => Math.sqrt(age) );
console.log(squareRootAgeArray);

        // FILTER FUNCTION

// Filter() - Creates smaller arrays based on conditions
// Will return true o false

const agesThatCanGoToThePub = ages.filter(age => {
  //Returns "true" or "false" && write the condition on the return!!
  console.log(age >= 18);

  return age >= 18; // here on the return we specify the CONDITION
});

console.table(ages);
console.table(agesThatCanGoToThePub);

// filter out words that have less than 5 letters

const shortColors = colors.filter(color => {
  //condition
  return color.length >= 5;
})

console.table(colors);
console.table(shortColors);

// Challenge - filter the even numbers in the ages array

const evenAges = ages.filter( age => {
  //condition
  return age % 2 === 0;
})

console.table(ages);
console.table(evenAges);