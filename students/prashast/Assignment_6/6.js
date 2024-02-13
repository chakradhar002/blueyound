//Write a JavaScript function to clone an array.

function is_array(arr){
    return [...arr];
}
console.log("the cloned array is:")
console.log(is_array([1,2,3,4,5]));
console.log(is_array([1, 2, [4, 0]]));
 

