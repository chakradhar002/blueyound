const mySentence = "my name is keshav";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
let ans = ""
for(let i=0; i<words.length; i++) {
    ans += words[i] + " ";
}

console.log(ans);