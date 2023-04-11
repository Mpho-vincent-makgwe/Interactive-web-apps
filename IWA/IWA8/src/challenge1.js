//
const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

//Sarah's INFORMATION
const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
const sarahBalanceTwo = '-5'//I had to change this becuase it wasnt working properly

// Only change below this line
const result =(parseFloat(sarahBalance) + parseFloat(sarahBalanceTwo));

const leo =/*added equal sign */ {
	name : leoName/*added collon removed  equal to symbol*/,
	// added commas at the end becuase we are coding objects.
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
	age : 24,
	address: {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal,
	}
	
};




const sarah = {

	name :  sarahName+ " "+sarahSurname/*included h, with posetive sings and quotation mark to add space in between. */ ,
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: result,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal,
	}
	
};//added curly bracket.
//added semicolon

console.table(leo);
console.table(sarah);