'use strict';

// returns true if number === "reverse" of number

const reverse = function (num) {

  let flip = parseInt(num.toString().split('').reverse().join(''));

  if (num === flip) {
    return true;
  } else {
    return false;
  }
};

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {

  let sum = 0; // fill this with correct numbers

  for (let i = 0; i < upperLimit; i++) {

    let binary = parseInt(i.toString(base1)); // binary representation of i

    if (reverse(i) && reverse(binary)) {
      console.log('i: ' + i + '  binary: ' + binary);
      sum += i;
    }
  }

  return sum;

};

module.exports = {
  doubleBasePalindromeSum,
};
