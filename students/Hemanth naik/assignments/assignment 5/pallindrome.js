/* Write a JavaScript function that checks whether a passed string is a palindrome or not?*/

let string="kaak"
let s1="";



function pallindrome(input)
{
  

    for(let j=string.length-1;j>=0;j--)
    {
        s1+= input[j];
    }

    

    if(s1==string)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }

}

console.log(pallindrome(string));