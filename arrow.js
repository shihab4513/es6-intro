// function declaration
function add(a, b) {
    return a + b;
}




// function expression or anonymous function
const add2 = function (a, b) {

    return a + b;
}
// Arrow function 
/*
const add2=function(a,b) {
   
    return a+b;
}
Above and below code basically do the same thing.
const add3=(a,b)=>a+b;
*/
const add3 = (a, b, c) => a + b + c;
const sum = add3(5, 9, 10);
console.log(sum);
// For 1 parameter you dont need to use parenthesis. below an example given
const add1 = a => a + a;
const s1 = add1(5);
console.log(s1);