const studentArr = ["ish", "saagar", "angaar", "salva"];

// define a value
// define a condition to stop
// define a incrementer

// for loop

for (let index = 0; index < 10; index++) {
  console.log(index < 10); // true on every loop
  console.log(index); // print the index
}

// boilerplate on VScode

const uppercaseStudentArr = [];
for (let index = 0; index < studentArr.length; index++) {
  console.log(studentArr[index]);
  if (studentArr[index].includes("a")) {
    uppercaseStudentArr.push(studentArr[index].toUpperCase());
  }
}                    

console.table(studentArr);
console.table(uppercaseStudentArr);

// while loop
 let index = 0;
 while (index < 10) {
   console.log(index);

   if (index > 10) { // when index is greater than 11 will stop the loop(break)
     break; 
   }
   index++;
 }