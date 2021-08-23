"use strict";

//alert("its working"); **make sure is properly linked to the html file
var heading = document.querySelector("#heading");
var button = document.querySelector("#button"); // INLINE EVENTS -> ADDING FUNCTIONS TO THE HTML

var handleHover = function handleHover() {
  //alert("Hello from the handleOver function")
  var content = heading.textContent;
  var updatedContent = content.toUpperCase() + " JS did this";
  heading.textContent = updatedContent;
}; // WRITE A FUNCTION TO RUN ON CLICK OF THE BUTTON
// BUTTON TEXT TO -> CLICKED
// ADD VALID CLASS TO BUTTON


var handleClick = function handleClick() {
  var updatedContent = "Clicked :)";
  button.textContent = updatedContent;
  button.classList.add("valid");
}; // EVENT LISTENERS


var textInputs = document.querySelectorAll(".text-input"); //addEventListener(event, () => { FUNCTION YOU WANT TO APPLY WHEN THE EVENT HAPPENS })

textInputs[0].addEventListener("focus", function () {
  //alert("From the event listener")
  textInputs[0].classList.add("valid");
});
textInputs[1].addEventListener("input", function (event) {
  console.log(event.target.value);
  console.log(event);
});
var nameForm = document.querySelector("#name-form");
var nameInput = document.querySelector("#name-input");
var namesList = document.querySelector("#names-list");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stops page from refreshing
  // we store the input that is introduced by the user

  var inputValue = nameInput.value; // set to a variable whatever we want to add to the html

  var listHTML = "<li>".concat(inputValue, "</li>"); // add it to html

  namesList.innerHTML += listHTML;
});