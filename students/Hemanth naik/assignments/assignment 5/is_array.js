
arr_or_not=function(input)
{

    if(toString.call(input)=== "[object Array]")
    {
        return true;

    }return false;


}

let v=[1,2,3];
console.log(arr_or_not (v));
console.log(arr_or_not("we all are one"));