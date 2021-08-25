// Object.keys(), Object.values(), Object.entries()

const supermarketItems = {
  shampoo: 3.99,
  toothbrush: 2.99,
  beerCrate: 10.99,
  cereal: 2.99,
  soap: 3.99,
  book: 6.99,
  paper: 5.99,
  wine: 14.99
}

// Object.keys() - All the keys on the left - The keys - In an array
console.log(Object.keys(supermarketItems));

// Object.values() - All the values of the key-value pairs - in an array
console.log(Object.values(supermarketItems));

// Object.entries() - Both parts of the key-value pair - In an array (every key-value pair is separated on his own array)
console.log(Object.entries(supermarketItems));

// Whats's the point? - Find data easier - Iterate over them - Know what the keys are
// Iterate over them
const supermarketItemsKeys = Object.keys(supermarketItems);

supermarketItemsKeys.forEach(key => {
  console.log(`The price for ${key} is ${supermarketItems[key]}`); //key -> log the key of the pairs |||| supermarketItems[key] -> logs the value of the pairs
})

Object.entries(supermarketItems).forEach(pair => {
  console.log(`The price for ${pair[0]} is €${pair[1]}`); // logs the same as above
})

// array destructuring

const array = ['Matt', 'Salva'];

const [a, b] = array;

console.log(a, b);

// Spread Operator

const supermarketItems_v2 = {
  shampoo: 3.99,
  toothbrush: 2.99,
  beerCrate: 10.99,
  cereal: 2.99,
  soap: 3.99,
  book: 6.99,
  paper: 5.99,
  wine: 14.99,
  staff : {
    staff1: {
      name: "Reshmy",
      salary: 15000,
      Address : [{}, {}]
    },
    staff2: {
      name: "Angaar",
      salary: 12000,
      Address : [{}, {}]
    }
  }
}

const copyShallow = supermarketItems_v2;

const copy = {...supermarketItems_v2};

copyShallow.beerCrate = 6.99; // THIS IS SHALLOW COPY - this will change price in both objects (ONLY copies the reference in memory)
copy.staff.staff1 = "Ish";

console.log(supermarketItems_v2);
console.log(copy);

// !!!! SEARCH LODASH FOR DEEP CLONING !!!!!!! (js library)

const companies = [
  {name: "Company One", industry: "Finance", start: 1981, end: 2004},
  {name: "Company Two", industry: "Retail", start: 1992, end: 2008},
  {name: "Company Three", industry: "Auto", start: 1999, end: 2007},
  {name: "Company Four", industry: "Retail", start: 1989, end: 2010},
  {name: "Company Five", industry: "Technology", start: 2009, end: 2014},
  {name: "Company Six", industry: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", industry: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", industry: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", industry: "Retail", start: 1981, end: 1989}
];

const companiesCopyShallow = [...companies];
//companiesCopyShallow[0].industry = "Farming";

const companiesCopy = companies.map(company => { // THIS IS DEEP CLONING 
  // IF THERE WAS AN ADDRESS OBJECT WITHIN THE COMPANIES OBJECT
  const shallowCopy = { ...company };
  shallowCopy.address = { ...company.address };
  return shallowCopy;
})

companiesCopy[0].industry = "Farming";


console.table(companies);
console.table(companiesCopy);

const methodObj = {
  log() {
    console.log("Hello");
  }
}
 const blah = {...methodObj};
 blah.log(); // it works !