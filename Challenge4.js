const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const tip1 = calcTip(bill1);
const tip2 = calcTip(bill2);
const tip3 = calcTip(bill3);

console.log(`Hóa đơn ${bill1}, tiền tips ${tip1.toFixed(2)}, tổng đơn giá ${ (bill1 + tip1).toFixed(2) }`);
console.log(`Hóa đơn ${bill2}, tiền tips ${tip2.toFixed(2)}, tổng đơn giá ${ (bill2 + tip2).toFixed(2) }`);
console.log(`Hóa đơn ${bill3}, tiền tips ${tip3.toFixed(2)}, tổng đơn giá ${ (bill3 + tip3).toFixed(2) }`);
