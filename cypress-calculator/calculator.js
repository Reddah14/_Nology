const screen = document.querySelector(".calculator__screen");
const numbers = document.querySelectorAll(".calculator__number");
const plus = document.querySelector(".calculator__operator--plus");
const minus = document.querySelector(".calculator__operator--minus");
const times = document.querySelector(".calculator__operator--times");
const divide = document.querySelector(".calculator__operator--divide");
const equals = document.querySelector(".calculator__operator--equals");
const clear = document.querySelector(".calculator__operator--clear");

const operators = [plus, minus, times, divide];

let firstNumber = null;
let secondNumber = null;
let savedNumber = 0;

screen.value = savedNumber;

let operator = null;

const handleNumbers = (event) => {
  const number = event.target.innerHTML;

  if (["+", "-", "*", "/", "ERR"].includes(screen.value) || savedNumber !== null) {
    screen.value = number;
    savedNumber = null;
  } else {
    screen.value += number;
  }
};

const handleOperator = (event) => {
  if (operator) return;

  const chosenOperator = event.target.innerHTML;

  if (firstNumber === null) {
    firstNumber = parseFloat(screen.value);
  }

  operator = chosenOperator;
  screen.value = operator;
};

const calculate = () => {
  if (firstNumber === null || operator === null) return;
  secondNumber = parseFloat(screen.value);

  let answer;
  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
      break;
    default:
      answer = "ERR";
      break;
  }

  answer = Number.isNaN(answer) ? "ERR" : answer;

  if (typeof answer === "number") {
    savedNumber = answer;
    firstNumber = null;
    operator = null;
  } else {
    reset();
  }

  screen.value = answer;
};

const reset = () => {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  savedNumber = 0;
  screen.value = savedNumber;
};

numbers.forEach((number) => {
  number.addEventListener("click", handleNumbers);
});

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperator);
});

equals.addEventListener("click", calculate);

clear.addEventListener("click", reset);