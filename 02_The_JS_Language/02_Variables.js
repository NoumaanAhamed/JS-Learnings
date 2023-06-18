//* No Temporal Dead Zone, Declaration , Assignment
var a = 1;
var a = 2;
a = 3;

//* TDZ, Reassignment ,
let b;
//! let b = 7; can't be ReDeclared
b = "Hello";
b = 5;

//* TDZ, No Reassignment
const c = 3;
