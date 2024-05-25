const glass = { name: 'glass', color: 'golden', price: 12, isCleaned: true };
// console.log(glass);
//It will return all keys of 'glass' object
const keys = Object.keys(glass);
console.log(keys);
// It will return all values of 'glass' object
const values = Object.values(glass);
console.log(values);
// It will return all values of 'glass' object in pair like (key,value)
const pair = Object.entries(glass);
console.log(pair);
// To delete glass properties
// delete glass.isCleaned;
// console.log(glass);
// Another way to delete using destructuring, below every key except isCleaned storing into shortGlass variable. 
const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freezing. if I freez glass object we cant change any keys value inside that object and we cant add any keys as well we also cant delete any keys while in freez .Below an example given.
// Object.freeze(glass);
// glass.source='Bangladesh';
// glass.price=12000;
// console.log(glass);

// Seal. If we seal an object we cant introduce new keys or delete existing keys in that object but we can update the values of existing keys.Below an example is given for such a case. 
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 12000;

console.log(glass);