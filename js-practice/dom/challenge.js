//alert("Bonjour !");

// change welcome message
const welcomeTitle = document.querySelector("#welcome-title");
const updatedWelcome = "Welcome to Nology Conference 2021!";
welcomeTitle.textContent = updatedWelcome;

// add valid class to 1st input when focus
const formInputs = document.querySelectorAll(".form-input")

formInputs[0].addEventListener("focus", () => {
  formInputs[0].classList.add("valid");
});

// create handle register function & pop up
const handleRegister = () => {
  alert("Register form submitted!😀");
}

// create handle input change function to validate
formInputs[0].addEventListener("input", event => {
  if (event.target.value) {
    formInputs[0].classList.add("valid");
  } else {
    formInputs[0].classList.add("invalid");
  }
});

formInputs[1].addEventListener("input", event => {
  if (event.target.value) {
    formInputs[1].classList.add("valid");
  } else {
    formInputs[1].classList.add("invalid");
  }
});
  // extension DONT WORK !! wrong approach - need apply -> https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
//summary list
const summaryList = document.querySelector("#summary-list");
const summaryForm = document.querySelector("#summary-form");
const summaryInput = document.querySelector("#summary-input");

summaryForm.addEventListener("submit", event => {
  event.preventDefault();

  const inputValue = summaryInput.value;

  const listHTML = `<li>${inputValue}</li>`;

  summaryList.innerHTML += listHTML;
})