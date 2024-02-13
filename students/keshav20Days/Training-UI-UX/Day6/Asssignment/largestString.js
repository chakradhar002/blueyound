const str1 = "Hello My Name is Keshav Sharma!";
const words =  str1.split(' ');
let maxLength = 0;
let ans;
for(let i=0; i<words.length; i++) {
    if(words[i].length > maxLength) {
        maxLength = words[i].length;
        ans = words[i];
    }
}

console.log(ans);
console.log(maxLength);