const findTheOldest = function(arr) {
	let ageArray = arr.map((person) => (person.yearOfDeath - person.yearOfBirth));
  return arr[ageArray.indexOf(Math.max(...ageArray))].name;

  //this works in sandbox, npm test brokn
};

// Do not edit below this line
module.exports = findTheOldest;
