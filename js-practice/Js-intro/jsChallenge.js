// If a name, is a coaches name, log "It's a coach"

let nameSample = "John";

if (nameSample == "Matthew" || nameSample == "Charlie") {
  console.log("It's a coach");
}

// If a greeting, is bonjour, log "comment ca va"

const greeting = "bonjour";

if (greeting == "bonjour") {
  console.log("comment ca va");
}

// If a score, reaches ten, log "you won the game" otherwise "you didn't win the game"

 let score = 0;

 if (score >= 10) {
   console.log("you won the game");
 } else {
   console.log("you didn't win the game");
 }

// If age, is greater than or equal to 65, log "Time to retire" otherwise "Get to work"

let age = 0;

if (age >= 65) {
  console.log("time to retire");
} else {
  console.log("Get to work");
}

// If hasCovid OR isShielding, log "time to isolate", else log "Keep social distancing"

let hasCovid = false;
let isShielding = false;

if (hasCovid || isShielding) {
  console.log("time to isolate");
} else {
  console.log("Keep social distancing");
}

// If age, greater than 18, and isBritish, "You can vote in the next election"

let isBritish = true

if (age > 18 && isBritish) {
  console.log("You can vote in the next election");
}