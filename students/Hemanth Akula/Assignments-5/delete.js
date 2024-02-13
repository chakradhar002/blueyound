var student = {

    name : "David Rayy",
    
    sclass : "VI",
    
    rollno : 12 
};

console.log(student);

delete student.sclass;

console.log(student);

var {rollno, ...student} = student; //ES6 best practice

console.log(student);