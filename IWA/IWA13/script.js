let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/*The first line checks if a variable called calculated is a string by using the typeof operator. The result of this check is stored in a new variable called isString*/
const logCalc = () => { 
const isString = typeof calculated === 'string'; 
const calculatedAsNumber = isString ? parseInt(calculated)  : calculated;/*The second line uses a ternary operator to conditionally convert calculated to a number.*/
calculated = calculatedAsNumber + 1; /*The third line adds 1 to calculatedAsNumber, and the result is assigned back to calculated.*/
};

const calcUser = () => {
logCalc();
if (calculated > 2){user = 'John';} 
if (calculated > 2) {state = 'requesting';}
if (calculated > 3) {state = 'idle';}
};/*
The second function, calcUser(), also takes no arguments and contains four lines of code. The first line calls the logCalc() function, which we just defined. The second, third, and fourth lines use conditional statements (if statements) to check if calculated is greater than a certain value. If calculated is greater than 2, the variable user is assigned the value 'John'. If calculated is greater than 2 again, the variable state is assigned the value 'requesting'. If calculated is greater than 3, the variable state is assigned the value 'idle'.*/

const checkUser = () => {
if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`)
}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()


