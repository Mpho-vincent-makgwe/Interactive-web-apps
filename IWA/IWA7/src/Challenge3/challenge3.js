const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

// const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2);
// const leo = `${leoName}  ${leoSurname} + (Owed:R ${parseFloat(leoBalance)}`;
// const sarah = `${sarahName} + ${sarahSurname} + (Owed:R ${parseFloat(sarahBalance)}`;
// const total = `Total amount owed:R ${owed}`;
// const result = leo + sarah + divider + total + owed + divider;

// console.log(result);



const owed = (parseInt(leoBalance) + parseInt(sarahBalance)).toFixed(2);
const leo = `${leoName} ${leoSurname} (Owed: R ${(parseInt(leoBalance)).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${(parseInt(sarahBalance)).toFixed(2)})\n`;
const total = `  Total amount owed: R ${owed.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}`;

const result = `\n${leo}${sarah}\n${divider}\n${total}\n${divider}`;

console.log(result);
