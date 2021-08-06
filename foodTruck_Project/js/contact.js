function deleteMessages() {
  if (window.sessionStorage.getItem('messages')) {
    window.sessionStorage.removeItem('messages');
  }

  renderMessages();
}

function submitMessage(event) {
  // prevent default form submission behaviour
  event.preventDefault();

  // getting input and create variables for each one
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const message = document.getElementById("message").value;

  // create object with this variables
  const messageObject = {
    email, fullName, message
  }

  // fetching existing messages from sessionStorage
  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages = 
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }

  // adding my object to the messages
  currentMessages.push(messageObject);
  
  // add updated messages to sessionStorage
  window.sessionStorage.setItem(
    "messages",
    JSON.stringify(currentMessages)
  );

  renderMessages();
}

function renderMessages() {
  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages = 
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }

  let listItems = [];

  for (let i = 0; i < currentMessages.length; i++) {
    let listItem = "";
    const currentMessage = currentMessages[i];

    listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email}</dt>`;
    listItem += `<dd>${currentMessage.message}</dd>`;

    listItem += `<br />`;

    listItems.push(listItem);
  }

  let dlElement = document.getElementById('currentMessages');
  dlElement.innerHTML = listItems.join('');
  // IF WAS JUST TEXT WOULDNT NEED TO USE JOIN METHOD => document.getElementById("demo").innerHTML = text;
}

renderMessages();