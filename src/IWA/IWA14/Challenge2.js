// script.js

const add = (a, b) =>  a + b 
const multiply = (a, b) =>  a * b 
/*arrow functions with the const keyword: add and multiply. These functions take two parameters, a and b, and perform addition and multiplication on them, respectively, and then return the result.*/


function internal () {
	const added = this.add(this.internal.a, this.internal.b)
    /*The value of added is calculated by calling this.add and passing two arguments, this.internal.a and this.internal.b. Here, this.add is calling the add function defined earlier, and this.internal.a and this.internal.b are properties of an object called internal, which is a property of this. So, this.add(this.internal.a, this.internal.b) is equivalent to calling add(this.internal.a, this.internal.b).*/
	const multiplied = this.multiply(added, this.internal.c)
    /*The value of multiplied is calculated by calling this.multiply and passing two arguments, added and this.internal.c. Similarly, this.multiply is calling the multiply function defined earlier, and this.internal.c is another property of the internal object.*/
    console.log(multiplied);
};
/*Overall, the internal function uses the add and multiply functions to calculate and log the result of a mathematical operation using three variables stored in an object internal. Note that add and multiply are defined as arrow functions with the => syntax, while internal is defined using the traditional function keyword.*/

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
calculate: internal
}

example1.calculate()
example2.calculate()