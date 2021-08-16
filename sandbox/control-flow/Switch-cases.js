const counter = 1;

if (counter) {  // if counter = 0 => dont run
  console.log("runs");
}

// falsey values
const zero = 0            // falsey
const emptyString = "";   //falsey
const noValue = undefined // falsey
const noValueYet = null   // falsey
const notrue = false      // falsey
// Everything else is true

if (counter === 0) {
  // do something
  // Make the message explode
}

if (!counter) { // if counter is falsey (so its 0)
  // do something
  // Make the message explode 
}

//CODE ALONG CHALLENGE

// Grade calculator for students
// Where they input there grade and find out there percentages

//Grading system (A - E)

let grade = "B";
// This will get changed inside the switch case
let percentage; // empty variable = undefined

switch (grade) { // grade will be the input will get from user in this case(param)
  case "A":
    percentage = "90-100%"; // if grade(input) is "A" -> THEN this code here will run
    break; // !!!! MUST ADD "break" OTHERWISE WILL RUN ON EVERY CASE UP TO THE BOTTOM
  case "B":
    percentage = "75-89%";
    break;
  case "C":
    percentage = "50-74%";
    break;
  case "D":
    percentage = "25-49%";
    break;
  case "E":
    percentage = "0-24%";
    break;
  default:
    percentage = "Not an accepted input, please try again xx";
}

console.log(percentage);


/* tests / sandbox */
const addNumber1 = "12";
const addNumber2 = 24;

let result = 0;

result = parseInt(addNumber1) + addNumber2;
console.log(result);

let house = true;
console.log(typeof house);

