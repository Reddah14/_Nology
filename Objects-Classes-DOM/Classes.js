// Class is the "blueprint/mould" for what properties and methods
// each object should have
class Person {
  constructor(firstName, lastName, age) { // this is the mould to create objects
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hi my name is ${this.firstName} and I am ${this.age} years old.`
  }
}

const angaar = new Person("Angaar", "lastNAme", 24);
const ish = new Person ("Ish", "IshsLastName", 19);

console.log(angaar.greet());