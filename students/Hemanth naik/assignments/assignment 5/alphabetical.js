/*Write a JavaScript function that returns a string that has letters in alphabetical order*/

function alphabetical(input)
{
    console.log( input.split("").sort().join(""));
}
let str="naik"
console.log(alphabetical(str));