const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let returnValue = 0;
	for (const n of arr) {
    returnValue += n;
  }
  return returnValue;
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let returnValue = 1;
  if (a === 0) return 1;
	while (a > 0) {
    returnValue *= a;
    a--;
  }
  return returnValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
