/**
 * Write a program to find the factorial of a number.
 */

let factorial = (number) => {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(5));
