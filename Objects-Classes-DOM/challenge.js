// 1. Define a person class
// 2. Create 3 people using the class
// 3. Insert them into the page

//HINT: You con c+p code from index.js to this faster/easier..

class Person {
  constructor(fullName, skills) {
    this.fullName = fullName;
    this.skills = skills;
  }

  getSkills() {
    return this.skills.map(s => `<li>${s}</li>`).join("");
  }

/*   getDetails() { *** Rashme's way -- creating this method & then calling this method to get details from each person !!!
    return `<h3>${this.fullName}</h3>
            <ul>${this.getSkills()}</ul>
            <button>View</button>`
  } */
}

const person_1 = new Person("Max Wayne", ["cooking", "jumping", "html"]);
const person_2 = new Person("Linda Smith", ["running", "swimming", "css"]);
const person_3 = new Person("John Doe", ["reading", "javascript"]);

let html = `<h2>${person_1.fullName}</h2>
              <ul>${person_1.getSkills()}</ul>
            <h2>${person_2.fullName}</h2>
              <ul>${person_2.getSkills()}</ul>
            <h2>${person_3.fullName}</h2>
              <ul>${person_3.getSkills()}</ul>
            `

document.getElementById("main").innerHTML = html;
              

