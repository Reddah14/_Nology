//  1. How can we create objects?
//  - Create a bank account object
//    accountNumber, sortCode, bankName, owner, isBusinessAcc

const bankAccount_1 = {
  accountNumber: 777777,
  sortCode: 123456,
  bankName: "nationwide",
  owner: "Salva",
  isBusinessAcc: false,
  getBalance() {
    // .... do some work in here to find balance
    let balance = 123;
    return balance;
  }
}

console.log(bankAccount_1);
console.log(bankAccount_1.getBalance()); // calling the method on the object

//    - Create a business object
//    .... what properties should it have?
//    .... Extra:  define a method on it.

const businessAcc_1 = {
  name: "Andy's Hardware store",
  location: "Bristol",
  phoneNumber: 123456798,
  isClosed: false,
  openBusiness() {
    this.isClosed = true
  }
}

//  2. How can we access properties?
let key = "Bristol";
console.log(business[key]); // accessing dinamically an object property
console.log(business["phoneNumber"]);




//  3. How can we call/run methods?

business.openBusiness(); // this method only exist within the object

//  4. What's square bracket syntax?