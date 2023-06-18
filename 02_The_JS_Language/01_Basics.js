// * There is no Error

alert("Hello");
[1, 2].forEach(alert);

// ! Yields Error due to no semicolon
alert("Hello")[(1, 2)].forEach(alert); //reads as a single line
