const repeatString = function(string, num) {

  let returnValue = "";

  if (num < 0) {
    return 'ERROR';
  }

  for (; num > 0; num--) {
    returnValue += string;
  }

  return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
