console.log("What does process.argv contain?", process.argv);

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
const BMI = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(BMI);

// To find the ideal weight, you can use the formula: weight (kg) = BMI x (height (m) x height (m)):
const minIdealWeight = Math.round((18.5 * heightInM * heightInM) * 100) / 100;
const maxIdealWeight = Math.round((25 * heightInM * heightInM) * 100) / 100;

console.log(minIdealWeight);
console.log(maxIdealWeight);

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

A BMI under 18.5 is considered underweight and above 25 is considered overweight

Your ideal weight is between ${minIdealWeight} Kgs and ${maxIdealWeight} Kgs.
`);