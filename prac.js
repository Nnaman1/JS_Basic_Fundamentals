//Math Operator 
const year = 2050;
const joeAge = (year - 1990);
const billAge = (year - 2020);

console.log(joeAge, billAge)
console.log(joeAge * 2, billAge / 10, 2 ** 3);

//Assignment Operator
let x = 2;
x = + 22;

console.log(x);

//Comparison Operator
console.log(billAge > joeAge);

//Coding Toy Prop.
const mikeWeight = 78;
const mikeMass = 1.69 ** 2;

const joeWeight = 95;
const joeMass = 1.22 ** 2;

const mikeBMI = mikeWeight / mikeMass;
const joeBMI = joeWeight / joeMass;

const mikeHigherBMI = (mikeBMI > joeBMI);
console.log(mikeHigherBMI);


// IF statment
const age = 21;
const oldEnough = age >= 18;

if (oldEnough) {
    console.log(`Joe is ${age} so he can drive!`)
}

if (mikeBMI > joeBMI) {
    console.log(`Mike BMI of ${mikeBMI} is greater than Joes!`);
} else {
    console.log(`Joe BMI is greater`);
}


console.log(String(22), 22);

