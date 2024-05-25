// Let: means allow it to reassign
// const: means do not allow it to reassign

const numbers = [5, 8, 9, 7];
// numbers=[5,8,9,10];
// In const array we cant reassign like above array but we can change single index array value below is an example given
numbers[0] = 1000;
// we also can insert value through push in const array.below an example given
numbers.push(98, 97, 95, 94, 125);
console.log(numbers);
// Same apply In the case of object as well
// object
const student = {
    name: 'Shihab Uddin',
    class: 12
}
// same way we cant reassign const object
// student={
//     name:'Raihan',
//     class:10
// }
// Although we cant reassign object but we can rename particular object properties. Below en example given
student.name = 'Raihan Hossen';
student.class = 11;

console.log(student);