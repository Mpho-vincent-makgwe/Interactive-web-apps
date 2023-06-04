const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = (/*used parseFloat to display all the digits of a number*/parseFloat(leoBalance) + parseFloat(sarahBalance));

const leo = `${leoName+' '+leoSurname} (Owed: R ${(parseFloat(Math.abs/*his is to turn negative to posetive*/(leoBalance).toFixed(2))/*used toFixed to conver the number to two decimal place */)})\n`;

const sarah =  `${sarahName+' '+sarahSurname} (Owed: R ${(parseFloat(Math.abs/*his is to turn negative to posetive*/(sarahBalance).toFixed(2)))})\n`;

const total = `  Total amount owed: R ${Math.abs/*his is to turn negative to posetive*/(owed).toFixed(2)}`;

const result = `\n${leo}${sarah}\n${divider}\n${total}\n${divider}`;
//(\n)adding a line break or intoducing a new line

console.log((result.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')));
