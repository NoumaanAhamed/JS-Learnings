let age;
//*The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

age
  ? age > 18
    ? console.log("You Adult")
    : console.log("You KId")
  : console.log("Dont Exist");

let accessAllowed = age > 18 ? true : false;

console.log(accessAllowed);

//!For multiple Symbols like many &&

//* OR -->returns  first Truthy value else last value;

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(undefined || firstName || lastName || nickName || "Anonymous"); // SuperCoder
console.log(false || "This is Printed");

//* AND --> returns first falsy value else last value;

console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

//* precedence of && > ||

//* NOT --> converts to boolean type and returns inverse

console.log(!null);
console.log(!!"non empty string"); //true

//* edge-cases

console.log(console.log(1) || 2 || console.log(3)); //logs 1 which returns undefined hence 2 as well
