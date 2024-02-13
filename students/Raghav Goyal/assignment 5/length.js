/* Write a JavaScript program to get the length of a JavaScript object.*/

function getObjectLength(student) {
    return Object.keys(student).length;
}

var student = {
    name: "hemanth",
    rollno: 13,
    age: 22
};


console.log("the length of the object is : ", getObjectLength(student));