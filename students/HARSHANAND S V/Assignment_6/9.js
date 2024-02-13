// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
let count=0;
for(let x in student){
    count++;
}
console.log(`the length of the java script object is :${count}`);
 
