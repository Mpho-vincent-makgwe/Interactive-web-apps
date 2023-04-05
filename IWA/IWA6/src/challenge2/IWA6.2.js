const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
/* &&*/
if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / '100'; /**The parseInt() function is used to convert the tax string to a decimal number or a floating-point number.*/
    const startingAfterTax = salary * ('1' - taxAsDecimal);/**The calculation of startingAfterTax now uses the correct formula to subtract the tax from the salary.*/
    const balance = startingAfterTax - transport - food - rent;/**The balance variable now uses the correct name and calculation formula.*/
    console.log("R"+ balance.toFixed(2));/**The console.log() statement prefixes the output with the 'R' symbol and uses toFixed(2) to round the output to 2 decimal places.*/
} else if(hourOfDay !== undefined && minuteOfDay !== undefined) {
    console.log("time is not known.")
}

