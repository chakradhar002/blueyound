// Write a JavaScript program to list the properties of a JavaScript object.

var obj = { name: 'Harry', sclass: 'VI', rollNo: '12'};

var props = Object.keys(obj);  

console.log(props); // props is an array of the attributes

props.forEach((attribute)=> console.log(attribute));

 