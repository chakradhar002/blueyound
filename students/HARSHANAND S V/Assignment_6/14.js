// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
 

let str='the quick brown fox';
str=str.split(" ");
for(let i=0;i<str.length;i++){
    str[i]=str[i][0].toUpperCase() + str[i].slice(1);
}
str=str.join(" ");
console.log(str);