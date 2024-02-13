// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isplaindrome(str){
   str=str.split(" ").join("");
   let i=0;
   let j=str.length-1;
   while(i<j){
    if(str[i]==str[j]){
        i++;
        j--;
        continue;
    }
    else{
        return false;
    }
   }
   return true;
}
console.log(isplaindrome("madam"));
console.log(isplaindrome("nurses run"));
console.log(isplaindrome("harshanand"));
