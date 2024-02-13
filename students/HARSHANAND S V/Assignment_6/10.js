// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

let x=32243;

let y=0;
while(x>=1){
    y=(x%10) + y*10;
    x=Math.floor(x/10);
}
console.log(y);