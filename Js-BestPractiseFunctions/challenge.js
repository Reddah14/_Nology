//TODO: refactor this function
const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {

  const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
  console.log(fullName);
  
  const aDate = new Date("02/16/2021");
  const bday = new Date(birthday)
  const diff = aDate.getTime() - bday.getTime();

  let ms = 1000 * 3600 * 24;

  const result = diff / ms;
  console.log(result);
  
  let myArray = [];
  arrayName.forEach(item => {
    if (item.includes('Tech')) {
      return myArray.push(item);
    } else {
      console.log("nope not tech");
    }
  })
}

const test = doesLotsOfThings('sam', 'Joyce', ("08/11/1998"), ["Tech is booming", "Covid 19 yada yada yada", "Economy due for a resurgance!", "You can retrain in tech too!"]);

const birthday = (date) => {
  const aDate = new Date("02/16/2021");
  const bday = new Date(date)
  const diff = aDate.getTime() - bday.getTime();
  return diff
} 


console.log(birthday("08/02/1986"));