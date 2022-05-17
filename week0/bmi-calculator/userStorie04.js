console.log("What does process.argv contain?", process.argv);

let weightInKg = parseInt(process.argv[2]);
let heightInM = parseFloat(process.argv[3]);
let age = parseInt(process.argv[4]);

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
let BMI = weightInKg / (heightInM * heightInM);
let roundedBMI = Math.round(BMI);

// To find the ideal weight, you can use the formula: weight (kg) = BMI x (height (m) x height (m)):
let idealWeight = Math.round(22.5 * heightInM * heightInM);

// The formula for Basal Metabolic Rate is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
let heightInCm = heightInM * 100;
let BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age);

// Assumption of the amount of calories burned
let amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.4);

// The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)
let amountOfWeightToLose = weightInKg - idealWeight;

// The time (weeks) it will take to reach your ideal weight is: amount of weight to lose / 0.5
let weeksToReachTheIdealWeight = Math.round(amountOfWeightToLose / 0.5);

// The amount of calories you need to consume while dieting is: your daily usage - 500
let amountOfCaloriesToEat = amountOfCaloriesBurnedPerDay - 500;

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

Your ideal weight is ${idealWeight} Kgs
With a normal lifestyle you burn ${amountOfCaloriesBurnedPerDay} calories a day

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${idealWeight} Kgs:

Eat ${amountOfCaloriesToEat} calories a day
For ${weeksToReachTheIdealWeight} weeks
`);