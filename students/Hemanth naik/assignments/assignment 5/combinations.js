/* Write a JavaScript function that generates all combinations of a string.*/

function combinations(input)
{
    let v=[];

    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1;j<input.length+1;j++)
        {
           v.push(input.slice(i,j)); 
        }
    }

    return v;

}

let str="naik"
console.log(combinations(str));