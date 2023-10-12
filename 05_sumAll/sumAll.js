const sumAll = function(int1, int2) {
  let returnValue = 0;

  if (int1 < 0 || int2 < 0) return "ERROR";
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";


  if (int2 < int1) {
    const temp = int1;
    int1 = int2;
    int2 = temp;
  }

  for (; int1 - 1 < int2; int1++) {
    returnValue += int1;
  }

  return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
