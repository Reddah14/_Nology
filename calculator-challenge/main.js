const displayScreen = document.querySelector("#output-screen");

/* events for displaying numbers */

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

button_Zero.addEventListener("click", event => {
  displayScreen.value += 0;
  console.log(typeof parseInt(displayScreen.value)); // need to parse to convert into number (output is "string")
});

button_One.addEventListener("click", event => {
  displayScreen.value += 1;
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