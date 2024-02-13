//Write a JavaScript function to check whether an input is an array or not.s
const is_array=(arr)=>{
    if(Array.isArray(arr))
        console.log("it is an array");
    else    
        console.log("it is not an array");
};
is_array([0,1,2,3]);
is_array("harshanand");
