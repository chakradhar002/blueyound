/* Write a JavaScript program to list the properties of a JavaScript object.*/

  properties= function( input)
  {
     for(let i in input)
     {
        if (input.hasOwnProperty(i)) {
            console.log(i );
        }
     }

  }


  var P=
  {
    name :"hemanth",
    age:22,
    company: "Blueyonder" 

  }

  console.log(properties(P));
