// default means if value is not provided take this as default value .
function add(num1, num2 = 100) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum=add(5,10);
/*In below example we can see if we dont give full parameter input it showing undefined NaN. But to address that if a parameter value is not provided we can set a default value that will be by default taken as 
parameter input.Default value is set into inside funtion parameter like below 
 function add(num1,num2=100) {
    const result=num1+num2;
    console.log(num1,num2,result);
    return result;
}
Above num2=100 is default value .  
*/
const sum = add(5);
//const sum=add();
// Below is a perfect use case of default value example given.Assume someone gave first name but didnt gave last name and you dont you want to see undefined NaN value you can set default last name value to ''

function fullNmae(firstName, lastName = '') {
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullNmae('Shihab');

/*
For array and empty set is given default value.
function friends(numbs=[]){

}
For object also empty object is given default value
function persons(human={}){
    
}
*/