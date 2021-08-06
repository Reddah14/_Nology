/* " WORKING ON THE CONSOLE " */

/* 
  TYPEOF => you call typeOf "hello" and will give "string"

  ARRAYS => you can create an array by using straight "[]" on the console and then add the values inside and it will return the array

  JSON => · can create a Json object by calling this straight in the console··> const myFullname = { firstName: "salvador", lastName: "martinez" };
          · then can call myFullname.firstName === my Fullname["firstName"] & will return true

  LOCALSTORAGE => · you call "localStorage" and prints what's stored
                  · able to set & get Item by just calling the method
                  · IF we store a number it will return a string when we retrieve it. (should call [ parseInt(sessionStorage.getItem('age')); ])

      *** STORING OBJECTS & ARRAYS ***
      · In order to do so we use parsing functions to change the format of our data. ( JSON.stringify & JSON.parse )

  !!  JSON.stringify => it creates a string representation of a list/ARRAY or an object.

              ** ARRAYS =>  · JSON.stringify([1,5,6]) RETURNS=> "[1,5,6]"

                            · sessionStorage.setItem('numberList', JSON.stringify([1,5,6])); THEN => sessionStorage.getItem('numberList'); RETURNS=> "[1,5,6]"

              
              ** JSON OBJECTS =>  · JSON.stringify({firstName: "salva"}) RETURNS=> "{\"firstName\":\"salva\"}"

                                  · sessionStorage.setItem('nameObject', JSON.stringify({firstName: "salva"})); THEN => sessionStorage.getItem('nameObject'); RETURNS=> "{\"firstName\":\"salva\"}"

  !!  JSON.parse => turns a string back to an array.

              ** ARRAYS =>  · JSON.parse("[1,5,6]"); RETURNS=> Array(3) [1, 5, 6]

                            · JSON.parse(sessionStorage.getItem('numberList');) RETURNS=> Array(3) [1, 5, 6]

              ** JSON OBJECTS =>  · JSON.parse(sessionStorage.getItem('nameObject')); RETURNS => object { firstName: "salva" } !!!NOTE: just opposite from ··> "{\"firstName\":\"salva\"}"

                                  · JSON.parse(sessionStorage.getItem('nameObject')).firstName RETURNS=> "salva"
*/