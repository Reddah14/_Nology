const pascalCaseVariableName = "IWantToBeSnakeCase";

/* const convertPascalCaseToSnakeCase = () => {
  const snake_case_string = "";
  for (let index = 0; index < pascalCaseVariableName.length; index++ ) {
    if (pascalCaseVariableName[index] === pascalCaseVariableName[index].toUpperCase()) {
      snake_case_string = snake_case_string + pascalCaseVariableName[index].toLowerCase() + "_";
    } else {
      snake_case_string = snake_case_string + pascalCaseVariableName[index];
    }
  }

  return snake_case_string;
}; */

/* let aaa = pascalCaseVariableName.split(/(?=[A-Z])/);
console.log(aaa); */

/* var newString = pascalCaseVariableName.replace(/(?=[A-Z])/,toLowerCase()) */

/* console.log(newString); */

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return "_" + match.toLowerCase();
  }

  let newString = propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  newString = newString.substring(1);

  return newString;
}

console.log(styleHyphenFormat(pascalCaseVariableName));
