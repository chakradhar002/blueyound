function array_check(input) {
    if(toString.call(input) === "[object Array]"){
        return true;
    }
    return false;
}

let arr = [1,2,3];
let brr  = "hem";
console.log(array_check(arr));
console.log(array_check(brr));