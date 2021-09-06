// Promises
// A way of asking for some information and getting it back after some time
// Asynchronous (cant get some info until some process is finished)

// We're Bille Eilish now
// Everyones asking when's your next single coming out?
// Sign up to our mailing list and we'll PROMISE to let you know when something big happens
//Either the single gets dropped
//OR it gets delayed

// I don't know right now, but when I do, I'll let you know. I Promise.

const singleRelease = () => {
  return new Promise((resolve, reject) => { // resolve(what to do when promise is succesful) reject(what to do when the promise fails)
    const chanceOfRelease = Math.random() * 100;
    console.log(chanceOfRelease);

    if (chanceOfRelease > 50) {
      // Call resolve on Promise succes!
      setTimeout(() => resolve("New single dropping!"), 3000);
    } else {
      // Call reject on Promise failure!
      setTimeout(() => reject("No new single for my fake fans!"), 3000);
    }
  });
}
//If it's successful do something OR if it's not do something else


document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault(); // stop page reloading when I submit

  const subText = document.querySelector(".subscription__result");

  singleRelease()
    .then(result => subText.innerHTML = result)
    .catch(error => subText.innerHTML = error);

  // singleRelease()
  // .then(/* result */ giraffe => console.log(/* result */ giraffe)) // ".then" gets called when the promise is "resolved"
  // .catch(error => console.log(error)); // ".catch" gets called when the promise is "rejected"

  subText.innerHTML = "Awaiting information"; // see this line while waiting for the promise "result"
  // *** NOTE : promise IS Asynchronous
})

const tweetHolder = document.querySelector(".tweets__holder");

//fetch IS a PROMISE
// In built for REST API interaction
// 1 argument, the endpoint you want to fetch from
// extra optional argument of options for interacting with API

    //  commented this fetch for the challenge

//  fetch("https://api.kanye.rest/") // returns a PROMISE
//  .then(result =>  result.json()  /* console.log(result) */) // convert API response to JSON => returns a PROMISE
//  .then(jsonResponse => tweetHolder.innerHTML = jsonResponse.quote /* console.log(jsonResponse.quote) */) // get the JSON response and do something
//  .catch(err => console.error(err));

// Challenge:
// Attach this fetch API call to the "get Kanye" button insted
// Everytime I click the button, I get a new Kanye quote

// Extension:
// Don't just replace the quote, add it to a list of quotes on the page

// Super Extension:
// Separate the DOM logic from the Fetch logic

const printingKanyeQuotesOnTheDOMY = (quoteToPrintParam) => {
  tweetHolder.innerHTML += `<li>` + quoteToPrintParam + `</li>`;
}

const fetchingKanyeQuotes = () => {
  fetch( "https://api.kanye.rest/" )
  .then( result =>  result.json() )
  .then( jsonResponse => printingKanyeQuotesOnTheDOMY(jsonResponse.quote) )
  .catch( err => console.error(err) );
}

 const getKanyeQuoteButton = document.querySelector(".tweets__getter").addEventListener("click", event => {
  fetchingKanyeQuotes();
 })

 /*  Matt result for challenge
 
  const getKanyeQuote = () => {
    return fetch("https://api.kanye.rest/") // returns a PROMISE
      .then((result) => result.json()) // convert API response to JSON => returns a PROMISE
      .then((jsonResponse) => jsonResponse.quote) // Get the JSON response and do something with it
      .catch((err) => console.error(err)); // Do something with the error
  };

  // Takes any string and prints it to the page
  const printQuote = (quote) => {
    const container = document.querySelector(".tweets__holder");
    container.innerHTML = quote;
  };

  document.querySelector(".tweets__getter").addEventListener("click", () => {
    getKanyeQuote()
      .then((res) => printQuote(res));
  });

  getKanyeQuote().then((res) => printQuote(res));
 
*/

