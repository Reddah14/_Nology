"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1. Define a person class
// 2. Create 3 people using the class
// 3. Insert them into the page
//HINT: You con c+p code from index.js to this faster/easier..
var Person =
/*#__PURE__*/
function () {
  function Person(fullName, skills) {
    _classCallCheck(this, Person);

    this.fullName = fullName;
    this.skills = skills;
  }

  _createClass(Person, [{
    key: "getSkills",
    value: function getSkills() {
      return this.skills.map(function (s) {
        return "<li>".concat(s, "</li>");
      }).join("");
    }
    /*   getDetails() { *** Rashme's way -- creating this method & then calling this method to get details from each person !!!
        return `<h3>${this.fullName}</h3>
                <ul>${this.getSkills()}</ul>
                <button>View</button>`
      } */

  }]);

  return Person;
}();

var person_1 = new Person("Max Wayne", ["cooking", "jumping", "html"]);
var person_2 = new Person("Linda Smith", ["running", "swimming", "css"]);
var person_3 = new Person("John Doe", ["reading", "javascript"]);
var html = "<h2>".concat(person_1.fullName, "</h2>\n              <ul>").concat(person_1.getSkills(), "</ul>\n            <h2>").concat(person_2.fullName, "</h2>\n              <ul>").concat(person_2.getSkills(), "</ul>\n            <h2>").concat(person_3.fullName, "</h2>\n              <ul>").concat(person_3.getSkills(), "</ul>\n            ");
document.getElementById("main").innerHTML = html;