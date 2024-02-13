// Write a JavaScript function that generates all combinations of a string.

function Combinations(input) {
    let combinations = [];
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length+1;j++){
            combinations.push(input.slice(i,j));
        }
    }
    return combinations;
}

let str = "dog";

console.log(Combinations(str));