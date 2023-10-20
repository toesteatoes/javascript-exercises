const fibonacci = function(num) {
  if (num < 1) return "OOPS";
  
  let fiboArr = [0, 1];

  for (let i = 1; i < num; i++) {
    fiboArr.push(fiboArr[i] + fiboArr[i-1]);
  }

  return fiboArr[fiboArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
