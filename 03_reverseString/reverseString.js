const reverseString = function(theString) {

  let returnValue = "";

  for (let i = 1; i <= theString.length; i++) {
    returnValue += theString[theString.length - i];
  }

  return returnValue;
};

// Do not edit below this line
module.exports = reverseString;
