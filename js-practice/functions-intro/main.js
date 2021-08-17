// Syntax
// ES5 - Hoisted when run

/* 
function sendMessage(user, message) {
  // In here you write the function
  return user + ": " + message;
}; 

*/

// ES6 - Arrow function (needs to be declared before you run it or call it)

/* const sendMessage = (user, message) => {
  //in here you write the function
  return user + ": " + message;
} */

// shorter way
/* 
const sendMessage = (user, message = "No message sent") => {
  user + ": " + message
}; */
    // IF message has no value we give it a default value (message = "No message sent") 
/* let thingToLog = sendMessage("Matt", "Hello!");
console.log(thingToLog);

thingToLog = sendMessage("Matt", "How are you!");
console.log(thingToLog);

thingToLog = sendMessage("Matt");
console.log(thingToLog);
 */
// Scoping - Global vs Block
/* 
const globalScoped = 100;

console.log(globalScoped); */

/* if(globalscoped > 50) {
  //whatever happens here is block scoped
  const blockScoped = 200;
  console.log(globalScoped);
  console.log(blockScoped);
}

console.log(blockScoped); */

/* const getLargestNumber = (num1, num2) => {
  let largestNumber;

  if (num1 > num2) {
    const name = "Matt"
    largestNumber = num1;
  } else {
    const name = "Joaquin"
    largestNumber = num2;
  }

  return largestNumber;

  return num1 > num2 ? num1 : num2;
} */

// const getLargestnumber = (num1, num2) => num1 > num2 ? num1 : num2;

/* console.log(getLargestNumber(20,50));
 */
// Callbacks

const modifyText = (text, callbackFn) => {
  const  modifiedText = callbackFn(text);

  return modifiedText;
};

const paragraph = modifyText("lorem ipsum", (text) => {
  return text.toUpperCase();
});

console.log(paragraph);