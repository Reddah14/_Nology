"use strict";

//alert("Bonjour !");
// change welcome message
var welcomeTitle = document.querySelector("#welcome-title");
var updatedWelcome = "Welcome to Nology Conference 2021!";
welcomeTitle.textContent = updatedWelcome; // add valid class to 1st input when focus

var formInputs = document.querySelectorAll(".form-input");
formInputs[0].addEventListener("focus", function () {
  formInputs[0].classList.add("valid");
}); // create handle register function & pop up

var handleRegister = function handleRegister() {
  alert("Register form submitted! 😀");
}; // create handle input change function to validate


formInputs[0].addEventListener("input", function (event) {
  if (event.target.value) {
    formInputs[0].classList.add("valid");
  } else {
    formInputs[0].classList.add("invalid");
  }
});
formInputs[1].addEventListener("input", function (event) {
  if (event.target.value) {
    formInputs[1].classList.add("valid");
  } else {
    formInputs[1].classList.add("invalid");
  }
}); // extension DONT WORK !! wrong approach - need apply -> https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
//summary list

var summaryList = document.querySelector("#summary-list");
var summaryForm = document.querySelector("#summary-form");
var summaryInput = document.querySelector("#summary-input");
summaryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var inputValue = summaryInput.value;
  var listHTML = "<li>".concat(inputValue, "</li>");
  summaryList.innerHTML += listHTML;
});