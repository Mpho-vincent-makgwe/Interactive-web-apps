const salary = 4000;
const lodging = 'apartment';
const size = 'large';


// Only change the syntax below (not the values or key names)


const expenses = {
    food: 51.7501,
    transport:  10.2,
};

const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
};

// You can change below however you want
const Rand = 'R';
const taxAsDecimal = parseFloat(tax[913]) / 100;
/* tax.913 is invalid syntax for accessing the value of the 913 key in the tax object. The correct syntax is tax[913].*/
const startingAfterTax = salary * (1 - taxAsDecimal);
/*The calculation of startingAfterTax is incorrect. It should be salary * (1 - taxAsDecimal) to calculate the salary after taxes.*/
const type = `${lodging} + '-' + ${size}`;
const balance =  startingAfterTax - (expenses.transport + expenses.food + rent["large-apartment"]);
/*The calculation of balance is incorrect. The expenses object should be accessed using square brackets and the rent object should be accessed using the type variable. Also, the subtraction order of expenses.transport and expenses.food is incorrect.*/
console.log(Rand,balance.toFixed(2));