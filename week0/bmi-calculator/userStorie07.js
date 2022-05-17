// 3. As a person who is trying to gain weight, I want to know how much calories I should eat everyday, so I can make progress towards my weight goal.
// 4. As a person who is trying to gain weight, I want to have a timeline in which I can reach my weight goal, so I can make a plan.

console.log("What does process.argv contain?", process.argv);

let weightInKg = parseInt(process.argv[2]);
let heightInM = parseFloat(process.argv[3]);
let age = parseInt(process.argv[4]);
let dailyExercise = process.argv[5];
let gender = process.argv[6];

// The formula for BMI is: weight (kg) / (height (m) x height (m)):
let BMI = weightInKg / (heightInM * heightInM);
let roundedBMI = Math.round(BMI);

// To find the ideal weight, you can use the formula: weight (kg) = BMI x (height (m) x height (m)):
let idealWeight = Math.round(22.5 * heightInM * heightInM);

// The formula for Basal Metabolic Rate is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
let heightInCm = heightInM * 100;
let BMR

if (gender === 'm') {
  BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 50;
} else {
  BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 150;
}

// Declaring a variable, the value will depend on wether someone exercises!
let amountOfCaloriesBurnedPerDay
if (dailyExercise === 'yes') {
  amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.6);
} else {
  amountOfCaloriesBurnedPerDay = Math.round(BMR * 1.4);
}

// The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)
let amountOfWeightToLoseOrToGain = weightInKg - idealWeight;

// The time (weeks) it will take to reach your ideal weight is: amount of weight to lose or to gain / 0.5
let weeksToReachTheIdealWeight = Math.round(Math.abs(amountOfWeightToLoseOrToGain / 0.5));

// The amount of calories you need to consume while dieting is: 
// if you want to lose weight: your daily usage - 500, and 
// if you want to gain weight: your daily usage + 500
let amountOfCaloriesToEat;
if (amountOfWeightToLoseOrToGain < 0) {
  amountOfCaloriesToEat = amountOfCaloriesBurnedPerDay + 500;
} else {
  amountOfCaloriesToEat = amountOfCaloriesBurnedPerDay - 500;
}

console.log(amountOfCaloriesToEat);

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} Years
gender: ${gender}
height: ${heightInM} M
weight: ${weightInKg} Kg
do you exercise daily? ${dailyExercise}

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