import Person from './scripts/classes/Person'

const Ish = new Person();

// Exercise #1 - How can we make this function more testable?
// Refactor this bit of code so it's more testable

// Possible switch case?
const translateEnglishToFrench = (englishWord) => {
  let frenchWord;

  if (englishWord === "hello") {
    frenchWord = "bonjour";
  } else if (englishWord === "goodbye") {
    frenchWord = "Au revoir";
  } else {
    frenchWord = "Unavailable";
  }

  return frenchWord;
};

// Not pure - DOM interaction - No return necessary
const printTranslateResult = (translatedWord) => {
  const translateResult = document.querySelector(".translate-result");

  translateResult.innerHTML = translatedWord;
};

document.querySelector(".translate-btn").addEventListener("click", (evnt) => {
  // Is user input from the DOM
  const englishWord = document.querySelector(".input-box").value;

  // 1. Translate the word
  const frenchWord = translateEnglishToFrench(englishWord);
  // 2. Put it on the page
  printTranslateResult(frenchWord);
  
});

// document.getElementById("translate-btn").addEventListener("click", (evnt) => {
//   const englishWord = document.getElementById(".input-box").value;

//   if (englishWord == "hello") {
//     document.getElementById("translate-result").innerHTML = "bonjour";
//   } else if (englishWord == "goodbye") {
//     document.getElementById("translate-result").innerHTML = "Au revoir";
//   } else {
//     document.getElementById("translate-result").innerHTML = "Unavailable";
//   }
// });
// Untestable - Jest doesn't know about the document
// DOM iteraction is inherently impure

// To make it testable -
// Seperate logic and DOM iteraction
// Pass  englishWord to another function => frenchWord
// Print frenchWord in another function