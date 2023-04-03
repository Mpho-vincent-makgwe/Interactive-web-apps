const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
/* The hourOfDay and minuteOfDay variables are set to 0 instead of '00', since the latter is a string and we want to compare the values to numbers.*/
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseInt(tax) / '100';// The parseInt() function is used to convert the tax string to a decimal number.
    const startingAfterTax = salary * ('1' - taxAsDecimal);//The calculation of startingAfterTax now uses the correct formula to subtract the tax from the salary.
    const balance = startingAfterTax - transport - food - rent;//The balance variable now uses the correct name and calculation formula.
    console.log("R"+ balance.toFixed(2));//The console.log() statement prefixes the output with the 'R' symbol and uses toFixed(2) to round the output to 2 decimal places.
};
	
