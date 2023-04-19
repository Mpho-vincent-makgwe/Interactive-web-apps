const firstName = 'John';
const age = 35;
const hobby = 'Coding';
/*The code starts with three variable declarations using the const keyword: firstName is assigned a string value 'John', age is assigned a number value 35, and hobby is assigned a string value 'Coding'.*/

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}/*is a function declaration called logTwice that takes a single parameter named parameter. The function logs the value of parameter to the console twice, once on each line.*/

function hobby1 () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
};
/*this is another function declaration called hobby1 which doesn't take any parameter. Inside the function, the logTwice function is called and passed a string that includes the values of the firstName, age, and hobby variables using string interpolation (using backticks ` to create a template literal).*/

hobby1();
