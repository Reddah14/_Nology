function handleSubmitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
            
  let userSubscribeDetails = {
    name,
    email
  }

  alert("THANKS " + userSubscribeDetails.name.toUpperCase() + ", WE'LL BE IN TOUCH SHORTLY!");
  
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}