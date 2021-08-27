// constructor is runned when you instantiate/create a new class

// Question: What happens when you over/under provide the constructor arguments
// --> needs ALL arguments/params otherwise will be undefined

// Challenge; Write a person class without looking at any other material

class Person {
  constructor(firstName, lastname,  age) {
    this.fName = firstName;
    this.lName = lastname;
    this.age = age;
  }

  // methods below if we needed them
}

const andy = new Person("Andy", "Evans", 31);
console.log(andy.fName);
const keyWeWant = "fName";
console.log(andy[keyWeWant]); // another way to access a property

//array of primtive type - String

const name = ['Andy', 'Reshmy', 'Salva'];
const ages = [31, 20, 35];

// separate person objects

const person = {
  name: "Andy",
  age: 30
}

const personTwo = {
  name: "Reshmy",
  age: 20
}

// Array of objects
const people = [person, personTwo];

console.log(people[0].name);

// Objects withing objects
const personThree = {
  name: "Salim",
  age: 22,
  employer: {
    name: "Nology",
    monthStarted: "August",
    otherObject: {
      random: "thing"
    }
  }
}

console.log(personThree.employer.otherObject.random);

// Arrays within arrays - two dimensional array
const grid = [
  ['O', 'X', 'X'],
  ['O', 'O', 'X'],
  ['X', 'X', 'O']
];

console.log(grid[1][1]);

// Objects which contain arrays
const personFour = {
  name: "Jerome",
  age: 22,
  employmentHistory: [
    {
      name: "theBank",
      started: "August 2019"
    },
    {
      name: "lawFirm",
      started: "August 2017"
    }
  ]
}

console.log(personFour.employmentHistory[1].started);

//Object.keys & Object.values
const students = ["Noor", "Joaquin", "Wei"];
const coach = {
  name: "Andy",
  title: "Coach"
}

console.log(Object.keys(coach)); // log array the keys
console.log(Object.values(coach)); // log array the values

// challenge - loop that prints andy and coach
const valuesArray = Object.values(coach);
for (let index = 0; index < Object.values(coach).length; index++) {
  console.log(valuesArray[index]); 
}
