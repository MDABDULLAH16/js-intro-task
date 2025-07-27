// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.
const a = isNaN('s')
console.log(a);
//true because 's' is not a number, it is a string and charecters

const b = isNaN(2 - "11")
  console.log(  b);
  