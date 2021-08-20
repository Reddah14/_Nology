let number_A = null;
let number_B = null;
let result = null;
let operation = null;

const displayScreen = document.querySelector("#output-screen");
console.log(displayScreen.value);
/* numbers */
const button_Zero = document.querySelector("#zero-btn");
const button_One = document.querySelector("#one-btn");
const button_Two = document.querySelector("#two-btn");
const button_Three = document.querySelector("#three-btn");
const button_Four = document.querySelector("#four-btn");
const button_Five = document.querySelector("#five-btn");
const button_Six = document.querySelector("#six-btn");
const button_Seven = document.querySelector("#seven-btn");
const button_Eight = document.querySelector("#eight-btn");
const button_Nine = document.querySelector("#nine-btn");

/* operations */
const button_Sum = document.querySelector("#plus-btn");
const button_Minus = document.querySelector("#minus-btn");
const button_Multiply = document.querySelector("#multiply-btn");
const button_Divide = document.querySelector("#divide-btn");

const button_Equal = document.querySelector("#equal-btn");
const button_Clear = document.querySelector("#clear-btn");

button_Equal.addEventListener("click", event => {
  if (number_A === null) {
    displayScreen.value = "3RR😵R"    
  } else if (number_A) {
    number_B = parseInt(displayScreen.value);
  }
  
  if (operation === "sum") {
    result = number_A + number_B;
    displayScreen.value = result;
  }
});

button_Clear.addEventListener("click", event => {
  displayScreen.value = null;
  number_A = null;
  number_B = null;
  operation = null;
  result = null;
});

button_Sum.addEventListener("click", event => {
  number_A = parseFloat(displayScreen.value);
  displayScreen.value = "+";
  operation = "sum";

  console.log(number_A);
  console.log(typeof number_A);
});

/* event listeners for numbers */
button_Zero.addEventListener("click", event => {
  displayScreen.value += 0;
  console.log(typeof parseFloat(displayScreen.value)); // need to parse to convert into number (output is "string")
});

button_One.addEventListener("click", event => {
  displayScreen.value += 1;

  console.log(number_A);
});

button_Two.addEventListener("click", event => {
  displayScreen.value += 2;
});

button_Three.addEventListener("click", event => {
  displayScreen.value += 3;
});

button_Four.addEventListener("click", event => {
  displayScreen.value += 4;
});

button_Five.addEventListener("click", event => {
  displayScreen.value += 5;
});

button_Six.addEventListener("click", event => {
  displayScreen.value += 6;
});

button_Seven.addEventListener("click", event => {
  displayScreen.value += 7;
});

button_Eight.addEventListener("click", event => {
  displayScreen.value += 8;
});

button_Nine.addEventListener("click", event => {
  displayScreen.value += 9;
});