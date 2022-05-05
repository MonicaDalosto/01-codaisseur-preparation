console.log("What does process.argv contain?", process.argv);

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);

// console.log('weight: ', weightInKg);
// console.log('height: ', heightInM);

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
const BMI = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(BMI);

console.log(`
**************
BMI CALCULATOR
**************

height: ${heightInM}
weight: ${weightInKg}

****************
FACING THE FACTS
****************

Your BMI is ${roundedBMI}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight
`);