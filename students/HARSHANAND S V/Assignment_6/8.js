
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
 
let person={fistName:"harshanand",lastName:"S V",age:18, eyeColor:"Blue"};
console.log("before deletion:");
console.log(person);
delete person.age;
console.log('after deletion:');
console.log(person);