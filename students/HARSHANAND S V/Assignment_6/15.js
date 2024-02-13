// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

let str='Web Development Tutorial';
str=str.split(" ");
str=str.sort((a,b)=>{
    return a.length-b.length;
})
console.log(str[str.length-1]);