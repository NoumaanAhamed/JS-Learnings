//*String Conversion

let value = true;
stringValue = String(value);
console.log(stringValue);

//* Numeric Conversion

console.log(Number("123")); //123
console.log(Number("ghj")); //NaN
console.log(2 + "3"); //"23"

alert(2 + 2 + "1"); // "41" and not "221"
alert("1" + 2 + 2); // "122" and not "14"
alert(6 - "2"); // 4, converts '2' to a number
alert(6 / "2"); // 3, converts both operands to numbers

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5 else "23"

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
//! undefined -> NaN
//! null -> 0
//! true and false -> 1 and 0

//* Boolean Conversion

//! Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
//!Other values become true

console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
