"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class is the "blueprint/mould" for what properties and methods
// each object should have
var Person =
/*#__PURE__*/
function () {
  function Person(firstName, lastName, age) {
    _classCallCheck(this, Person);

    // this is the mould to create objects
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      return "Hi my name is ".concat(this.firstName, " and I am ").concat(this.age, " years old.");
    }
  }]);

  return Person;
}();

var angaar = new Person("Angaar", "lastNAme", 24);
var ish = new Person("Ish", "IshsLastName", 19);
console.log(angaar.greet());