let arr = [3, 5, 7];
let sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 1);
console.log(sum);