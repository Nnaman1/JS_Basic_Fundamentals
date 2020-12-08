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

const barcelona = 300;
const liverpool = 200;

if (barcelona > liverpool && barcelona >= 100) {
    console.log(`barcelona win!`);
} else if (barcelona < liverpool && liverpool >= 100) {
    console.log(`liverpool win!`);
}
else if (liverpool === barcelona && liverpool || barcelona >= 100) {
    console.log(`Draw!`);
} else {
    console.log(`no winner`)
}

const day = `friday`;
switch (day) {
    case `monday`:
        console.log(`today is Monday`);
        break;
    case `tuesday`:
        console.log(`today is Tuesday`);
        break;
    default:
        console.log(`None`);

}

const voteage = 24;

const vote = voteage >= 18 ? `You can vote` : `You can't vote yet`;
console.log(vote);




const bill = 1000;

const tip = bill >= 50 && bill <= 500 ? bill * .2 : bill * .15;

console.log(`My bill is ${bill}, my tip is ${tip} and my total is ${bill + tip}`);