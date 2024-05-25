// Math.max() returns max value
const max = Math.max(45, 85, 98, 78, 65, 85);
const numbers = [1, 5, 4, 8, 7, 9, 8, 54, 78, 98, 5, 2, 45, 65, 20];
/*
if we just write console.log(numbers); it will print array like [1,5,4,8,7,9,8,54,78,98,5,2,45,65,20]. But if you give '...' before numbers it will show 1 5 4 8 7 9 8 54 78 98 5 2 45 65 20
this '...' symbol is called spreading. It is very important. For example you cant find max number of array without spreading. If you want to find max value in a array you have to use spreading
such example shown below
*/
console.log(...numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// use spread operator to copy
/*
const friends=[4,5,7,9];
const bondho=friends;
 bondho.push(100);
 console.log(friends);
You cant copy like above.In that case if you print bondho and friends both will give same output. Because bondho is referencing to friends. To copy correctly you have to use spread operator like below. 
*/
const friends = [4, 5, 7, 9];
// const bondho=friends;
// bondho.push(100);
// console.log(nums1);
const dosto = [...friends];
dosto.push(100);
console.log(dosto);
console.log(friends);

// Advanced
// Add extra element while copy. It also doesnt hold any references.
const sonkha = [1500, ...friends, 999];
console.log(sonkha);