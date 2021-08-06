/* HOW TO INTERACT WITH HTML ELEMENTS ON THE PAGE */

/* 
      >>> DOCUMENT OBJECT => Js gives us this "document" object that allow us to interact with specific elements on the page

      ** BY TAG: (grabbing elements by tagName & changing their text)

        document.getElementsByTagName('p'); => allow us to grab elements base on the name of their tag. THIS METHOD WILL RETURN AN ARRAY => document.getElementsByTagName('p')[0]

        THEN run => document.getElementsByTagName('p')[0].innerHTML; => will change the text of that element => document.getElementsByTagName('p')[0].innerHTML = "I've changed the text";

      ** BY ID: (grabbing elements by Id name & changing value)

        document.getElementById('email').value = "ppl@ppl.com"; => this will change the input at the email input inserting "ppl@ppl.com" on the screen.

        document.getElementByTagName('select')[0].value = "complaint";
*/