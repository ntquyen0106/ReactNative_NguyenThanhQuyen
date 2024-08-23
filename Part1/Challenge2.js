let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92; 
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) cao hơn John's (${johnBMI1.toFixed(2)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) coa hơn Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`Mark và John BMI bằng nhau (${markBMI1.toFixed(2)})!`);
}

let markMass2 = 95; 
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) cao hơn John's (${johnBMI2.toFixed(2)})!`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) cao hơn Mark's (${markBMI2.toFixed(2)})!`);
} else {
    console.log(`Mark và John BMI bằng nhau (${markBMI2.toFixed(2)})!`);
}
