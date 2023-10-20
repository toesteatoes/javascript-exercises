const findTheOldest = function(arr) {
  let ageArray = arr.map((person) => person.yearOfDeath - person.yearOfBirth);
  return arr[1].name; 
};

// Do not edit below this line
module.exports = findTheOldest;
