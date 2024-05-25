const first = 'Shihab';
const last = 'Uddin';
const greet = 'Chandarli';
const name = first + ' ' + last + ' ' + greet;
console.log(name);
const a = 5;
const b = 15;
// const result='Your result is: '+(a+b);
/*
  This " `` " symbol has a superpower. We can use this instead of ''
  const result='Your result is: '+(a+b);
  We can write above line as const result=`Your result is: ${a+b}`; 
*/
const result = `Your result is: ${a + b}`;
console.log(result);
// This `` symbol basically work as like html pre tag. It can automatically detect next line and show it as such way where as if you have used '' you would have to use \n symbol to go next line.
const message = `Hi there,
how are you?`;
console.log(message);
const numbers = [50, 15, 3];
const student = {
    name: 'John cena',
    wife: 'Kissa Sins',
    age: 31

}
console.log(`Name is ${student.name} , his wife name is ${student.wife} and his age is ${student.age + numbers[2]}`);