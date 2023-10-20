const palindromes = function (str) {
  let arr = str.split('');

  if (arr.includes(',')) {
    arr = str.split(', ');
  } else {
    arr = str.split('');
  }

  let flipArr = arr.splice().reverse();
  return (arr == flipArr);
}

// Do not edit below this line
module.exports = palindromes;
