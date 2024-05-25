const numbers = [1, 6, 8, 4];
for (const num of numbers) {
    // console.log(num);
}
const name = 'Shihab Uddin';
for (const char of name) {
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
/*
You cant print object with for of loop you have to use for in for that matter below such an example is given
*/
// for (const iterator of glass) {
//     console.log(iterator); 
// }

for (const key in glass) {
    const value = glass[key];
    // console.log(`${key} :  ${value}`);
}

// optional , another way to do it indirectly with for of\
const key = Object.keys(glass);
for (const value of key) {
    console.log(value + ' : ' + glass[value]);
}