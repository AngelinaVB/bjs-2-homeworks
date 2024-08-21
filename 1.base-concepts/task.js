"use strict";
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;

  let arr = [];

  if (d < 0) {
    arr;
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

console.log(solveEquation(2, 10, 0));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(2, 2, 5));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

 let p = (percent / 100 ) / 12;
 let s = amount - contribution;
 let payment = s * (p + (p / ((Math.pow((1 + p), countMonths)) - 1)));
 let totalSum = (payment * countMonths);

return parseFloat(totalSum.toFixed(2));
};

console.log(calculateTotalMortgage(10, 0, 50000, 12));
 console.log(calculateTotalMortgage(10, 1000, 50000, 12));
 console.log(calculateTotalMortgage(15, 2000000, 2000000, 24));
 console.log(calculateTotalMortgage(10, 0, 10000, 36));
 console.log(calculateTotalMortgage(15, 0, 10000, 36));