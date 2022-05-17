console.log("What does process.argv contain?", process.argv);

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
const BMI = weightInKg / (heightInM * heightInM);
const roundedBMI = Math.round(BMI);

// To find the ideal weight, you can use the formula: weight (kg) = BMI x (height (m) x height (m)):
const minIdealWeight = Math.round((18.5 * heightInM * heightInM) * 100) / 100;
const maxIdealWeight = Math.round((25 * heightInM * heightInM) * 100) / 100;

// The formula for Basal Metabolic Rate is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
const heightInCm = heightInM * 100;
const BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age); // 800 + 1012,50 - 175 = 1637,5

// Assumption of the amount of calories burned
const amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.4);

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} Years
height: ${heightInM} M
weight: ${weightInKg} Kg

****************
FACING THE FACTS
****************

Your BMI is ${roundedBMI}

A BMI under 18.5 is considered underweight and above 25 is considered overweight

Your ideal weight is between ${minIdealWeight} Kgs and ${maxIdealWeight} Kgs
With a normal lifestyle you burn ${amountOfCaloriesBurnedPerDay} calories a day
`);