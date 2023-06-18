//* Number

let n = 123;
n = 12.5;
n = -Infinity; //! from ( 1 / 0 )
n = NaN; //! Not A NUmber ( "hello"/ 2 )

//*BigInt (as number --> -(2^53 - 1) to (2^53 - 1))

const bigInt = 1234567890123456789012345678901234567890n; //n is bigInt

//* String
let a = "Noumaan";
let b = `hello ${a}`;

//* Booleon;

let isTrue = 4 > 1;

//* null

let age = null; //!“nothing”, “empty” or “value unknown”.

//* undefined

let name;
console.log(name); //!“value is not assigned”.
