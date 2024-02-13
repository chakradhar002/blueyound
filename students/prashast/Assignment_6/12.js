// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
let x="dog";
for(let i=0;i<x.length;i++){
    let y=x[i];
    console.log(y);
    for(let j=i+1;j<x.length;j++){
        y+=x[j];
        console.log(y);
    }
}

