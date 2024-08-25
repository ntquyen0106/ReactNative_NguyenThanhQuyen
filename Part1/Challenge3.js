function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

let dolphinsAvg1 = calcAverage(96, 108, 89);
let koalasAvg1 = calcAverage(88, 91, 110);

console.log(`Dolphins' điểm trung bình: ${dolphinsAvg1.toFixed(2)}`);
console.log(`Koalas' điểm trung bình: ${koalasAvg1.toFixed(2)}`);

if (dolphinsAvg1 > koalasAvg1) {
    console.log('Dolphins dành chiến thắng!');
} else if (koalasAvg1 > dolphinsAvg1) {
    console.log('Koalas dành chiến thắng!');
} else {
    console.log('Hòa nhau!');
}

let dolphinsAvgBonus1 = calcAverage(97, 112, 101);
let koalasAvgBonus1 = calcAverage(109, 95, 123);

console.log(`\nBonus 1 - Dolphins' điểm trung bình: ${dolphinsAvgBonus1.toFixed(2)}`);
console.log(`Bonus 1 - Koalas' điểm trung bình: ${koalasAvgBonus1.toFixed(2)}`);

if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
    console.log('Dolphins dành chiến thắng (Bonus 1)!');
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
    console.log('Koalas dành chiến thắng (Bonus 1)!');
} else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
    console.log('Hòa nhau (Bonus 1)!');
} else {
    console.log('Không đội nào dành chiến thắng (Bonus 1).');
}

let dolphinsAvgBonus2 = calcAverage(97, 112, 101);
let koalasAvgBonus2 = calcAverage(109, 95, 106);

console.log(`\nBonus 2 - Dolphins' điểm trung bình: ${dolphinsAvgBonus2.toFixed(2)}`);
console.log(`Bonus 2 - Koalas' điểm trung bình: ${koalasAvgBonus2.toFixed(2)}`);

if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log('Dolphins dành chiến thắng (Bonus 2)!');
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log('Koalas dành chiến thắng (Bonus 2)!');
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log('Hòa nhau (Bonus 2)!');
} else {
    console.log('Không đội nào dành chiến thắng (Bonus 2).');
}
