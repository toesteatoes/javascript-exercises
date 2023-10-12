const removeFromArray = function(input) {

  let returnArray = input;

  for (let i = 1; i < arguments.length; i++) {
    returnArray = returnArray.filter(e => e !== arguments[i]);
  }

  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
