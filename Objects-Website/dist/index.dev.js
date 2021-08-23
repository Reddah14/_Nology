"use strict";

//  1. How can we create objects?
//  - Create a bank account object
//    accountNumber, sortCode, bankName, owner, isBusinessAcc
var bankAccount_1 = {
  accountNumber: 777777,
  sortCode: 123456,
  bankName: "nationwide",
  owner: "Salva",
  isBusinessAcc: false,
  getBalance: function getBalance() {
    // .... do some work in here to find balance
    var balance = 123;
    return balance;
  }
};
console.log(bankAccount_1);
console.log(bankAccount_1.getBalance()); // calling the method on the object
//    - Create a business object
//    .... what properties should it have?
//    .... Extra:  define a method on it.

var businessAcc_1 = {
  name: "Andy's Hardware store",
  location: "Bristol",
  phoneNumber: 123456798,
  isClosed: false,
  openBusiness: function openBusiness() {
    this.isClosed = true;
  }
}; //  2. How can we access properties?

var key = "Bristol";
console.log(business[key]); // accessing dinamically an object property

console.log(business["phoneNumber"]); //  3. How can we call/run methods?

business.openBusiness(); // this method only exist within the object
//  4. What's square bracket syntax?