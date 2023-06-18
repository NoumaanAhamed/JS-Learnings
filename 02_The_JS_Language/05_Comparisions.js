//* String - Lexicographical order

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
console.log("a" > "A"); //true

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

alert(0 === false); // false, because the types are different
//! === --> Checks Types as well

//*undefined,null

//! undefined,null --> number in comparisons except '=='.
console.log(null == undefined); //*only true
console.log(null == 0); //false,and anything
//*but
alert(null > 0); // (1) false as 0 > 0
alert(null >= 0); // (3) true as 0 >= 0
console.log(undefined > 0); //false as Nan > 0 is false
