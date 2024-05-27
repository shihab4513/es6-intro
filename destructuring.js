const actor = {
  name: "Shihab Uddin",
  age: 24,
  number: "+8801632600330",
  money: 123696987,
};
// const phone=actor.number;
/*
const phone=actor.number;
To write above using destructure you should do like below
*/
// If right side is an object left side of destructuring will be object as well
const { number, name, money: taka } = actor;
console.log(number);
console.log(number);
console.log(number);
console.log(number);
console.log(name);
console.log(taka);

// Array destructuring

// If right side is an array left side of destructuring will be array as well

const numbers = [45, 99];
const [first, second] = numbers;
console.log(first);

//Advanced
function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [awal, saani] = doubleThem(6, 9);
console.log(saani);

// swapping using destructuring
let num1 = 1,
  num2 = 2;
[num1, num2] = [num2, num1];
console.log(num1);
console.log(num2);
// through spreading operator we can merge two object. Below an example given
const circle = {
  radius: 10,
};
const style = {
  backgroundColor: "red",
};
const solidCircle = {
  ...circle,
  ...style,
};
console.log(solidCircle);
// WE can remove element from array using destructing
const fruits = [
  "Watermelon",
  "banana",
  "strawberry",
  "Guava",
  "Lichi",
  "Beery",
];
const [Watermelon, ...rest] = fruits;
console.log(rest);
console.log(Watermelon);
