let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers = arr.filter(function(value) {
    return value % 3 === 0;
});
console.log(numbers);