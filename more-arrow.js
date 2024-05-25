
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
//Single parameter
/*
Below shown how to get properties from object using arrow /anonymous function
*/
const getAge = (person) => person.age;
const student = {
    name: 'Shihab Uddin',
    age: 24
};
const age = getAge(student);
console.log(age);
/*
Below shown how to get third index value from array/set using arrow function

*/
const getThird = (input) => input[2];
const numbers = [12, 54, 78, 98, 54];
const third = getThird(numbers);
console.log(third);
const doubleIt = (number) => number * 2;

//No parameter
const getPi = () => Math.PI;
console.log(getPi());

//  large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}
console.log(doMath(1, 1, 1));

