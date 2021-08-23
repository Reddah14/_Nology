// 2. Create a person object
const person = {
  name: "Max Mix",
  quote: "If sky was the limit, there wouldn't be footprints on the moon",
  skills: ['Javascript', 'Pulling Weeds', 'Cooking'],
  getSkills() {
    return this.skills.map(s => `<li>${s}</li>`).join(""); // use join here to avoid the "comma" (so they will be joined without a comma)
  }
}
// name, quote, and a getSkills (array)
// 3. getSkills() should return an li list
// 4. Using your DOM skills, insert the list of skill into the page 
const html = `<h1>${person.name}</h1>
              <p>${person.quote}</p>
              <ul>${person.getSkills()}</ul>`

document.getElementById("main").innerHTML = html;

/*  wrong approach!!!
const heading = document.querySelector("#person-name");
let myName = person.name;
heading.textContent = myName;

console.log(document.body);
 */

// 1. Insert a <footer> into the body, which contains nology - 2021
let companyName = "Nology";
let year = new Date().getFullYear();
document.getElementById("footer").innerHTML = companyName + " - " + year;