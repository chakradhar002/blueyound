// Write a JavaScript function to clone an array.

let arr = [1,2,3,4,5];
let brr;
brr = [...arr];  // cloning using the spread operator
console.log(brr);

const obj_clone = structuredClone(brr);
console.log(obj_clone);