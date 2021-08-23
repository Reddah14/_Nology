//alert("its working"); **make sure is properly linked to the html file

const heading = document.querySelector("#heading");
const button = document.querySelector("#button");

// INLINE EVENTS -> ADDING FUNCTIONS TO THE HTML

const handleHover = () => {
  //alert("Hello from the handleOver function")

  let content = heading.textContent;
  let updatedContent = content.toUpperCase() + " JS did this";

  heading.textContent = updatedContent;
}

// WRITE A FUNCTION TO RUN ON CLICK OF THE BUTTON
// BUTTON TEXT TO -> CLICKED
// ADD VALID CLASS TO BUTTON

const handleClick = () => {
  let updatedContent = "Clicked :)";
  button.textContent = updatedContent;

  button.classList.add("valid");
};

// EVENT LISTENERS

const textInputs = document.querySelectorAll(".text-input")

//addEventListener(event, () => { FUNCTION YOU WANT TO APPLY WHEN THE EVENT HAPPENS })

textInputs[0].addEventListener("focus", () => {
  //alert("From the event listener")
  textInputs[0].classList.add("valid");
});

textInputs[1].addEventListener("input", event => {
  console.log(event.target.value);
  console.log(event);
});

const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-input");
const namesList = document.querySelector("#names-list");



nameForm.addEventListener("submit", event => {
  event.preventDefault(); // stops page from refreshing

    // we store the input that is introduced by the user
  const inputValue = nameInput.value;

    // set to a variable whatever we want to add to the html
  const listHTML = `<li>${inputValue}</li>`;

    // add it to html
  namesList.innerHTML += listHTML;
})